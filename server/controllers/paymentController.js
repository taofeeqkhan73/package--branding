import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDB } from '../config/db.js';
import { sendPaymentEmails } from '../config/mailer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

// Initialize Razorpay Instance
const getRazorpayInstance = () => {
  const key_id = process.env.RAZORPAY_KEY_ID || 'rzp_test_TFllHkuIfXTW7p';
  const key_secret = process.env.RAZORPAY_KEY_SECRET || 'LRierBT5vgYP8yihxOJWiFXa';

  return new Razorpay({ key_id, key_secret });
};

// Helper: Resolve package numeric price if not provided directly
export const resolvePlanPrice = (packageName = '', currency = 'INR') => {
  const pkg = (packageName || '').toLowerCase();
  const isUSD = currency.toUpperCase() === 'USD';

  if (pkg.includes('platinum') || pkg.includes('enterprise') || pkg.includes('dominance')) {
    return isUSD ? 5500 : 149999;
  }
  if (pkg.includes('gold') || pkg.includes('growth') || pkg.includes('scale') || pkg.includes('viral')) {
    return isUSD ? 2800 : 79999;
  }
  // Default Starter / Silver
  return isUSD ? 1200 : 39999;
};

/**
 * 1. POST /api/payment/create-order
 * Creates a Razorpay Order and saves pending record to MySQL
 */
export const createOrder = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      companyName,
      packageName,
      amount: rawAmount,
      currency = 'INR',
    } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: 'All required customer fields must be completed before submission.',
      });
    }

    const numericAmount = rawAmount
      ? Number(String(rawAmount).replace(/[^0-9.]/g, ''))
      : resolvePlanPrice(packageName, currency);

    if (!numericAmount || numericAmount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid plan amount.',
      });
    }

    const cur = currency.toUpperCase() === 'USD' ? 'USD' : 'INR';
    // Subunit calculation: 1 INR = 100 paise, 1 USD = 100 cents
    const amountInSubunits = Math.round(numericAmount * 100);

    const razorpay = getRazorpayInstance();
    const shortReceipt = `rcpt_${Date.now().toString().slice(-8)}_${Math.floor(Math.random() * 900 + 100)}`;

    const options = {
      amount: amountInSubunits,
      currency: cur,
      receipt: shortReceipt,
      notes: {
        packageName: packageName || 'Brand Package',
        clientName: fullName,
        clientEmail: email,
        clientPhone: phone || '',
        companyName: companyName || '',
      },
    };

    console.log(`💳 [Razorpay] Creating Order for ${fullName} - ${packageName} (${cur} ${numericAmount})`);
    const order = await razorpay.orders.create(options);

    // Save pending payment record in MySQL database
    const pool = getDB();
    if (pool) {
      try {
        await pool.query(
          `INSERT INTO payments (razorpay_order_id, full_name, email, phone, company_name, package_name, amount, currency, status)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'created')`,
          [
            order.id,
            fullName,
            email,
            phone || '',
            companyName || '',
            packageName || 'Plan Purchase',
            numericAmount,
            cur,
          ]
        );
      } catch (dbErr) {
        console.warn('⚠️ [MySQL] Could not save pending order to database:', dbErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      numericAmount,
      keyId: process.env.RAZORPAY_KEY_ID || 'rzp_test_TFllHkuIfXTW7p',
    });
  } catch (error) {
    console.error('❌ [Razorpay Error] Order creation failed:', error);
    return res.status(500).json({
      success: false,
      message: error.error?.description || error.message || 'Payment order initiation failed.',
    });
  }
};

/**
 * 2. POST /api/payment/verify-payment
 * Verifies Razorpay HMAC signature, updates MySQL, and sends dual confirmation emails
 */
export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      fullName,
      email,
      phone,
      companyName,
      packageName,
      amount,
      currency = 'INR',
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: 'Payment verification parameters missing (order_id, payment_id, signature).',
      });
    }

    const secret = process.env.RAZORPAY_KEY_SECRET || 'LRierBT5vgYP8yihxOJWiFXa';

    // Verify HMAC-SHA256 signature
    const generatedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const isSignatureValid = generatedSignature === razorpay_signature;

    if (!isSignatureValid) {
      console.error('❌ [Razorpay] Signature verification failed! Tampered or invalid.');
      return res.status(400).json({
        success: false,
        message: 'Payment verification failed: Signature mismatch.',
      });
    }

    console.log(`✅ [Razorpay] Signature verified for Payment ID: ${razorpay_payment_id}`);

    // Update status in MySQL
    const pool = getDB();
    if (pool) {
      try {
        const [updateResult] = await pool.query(
          `UPDATE payments 
           SET razorpay_payment_id = ?, razorpay_signature = ?, status = 'paid'
           WHERE razorpay_order_id = ?`,
          [razorpay_payment_id, razorpay_signature, razorpay_order_id]
        );

        // If row didn't exist for some reason, insert fresh completed record
        if (updateResult.affectedRows === 0) {
          await pool.query(
            `INSERT INTO payments (razorpay_order_id, razorpay_payment_id, razorpay_signature, full_name, email, phone, company_name, package_name, amount, currency, status)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'paid')`,
            [
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
              fullName,
              email,
              phone || '',
              companyName || '',
              packageName || 'Plan Purchase',
              amount || resolvePlanPrice(packageName, currency),
              currency.toUpperCase(),
            ]
          );
        }
      } catch (dbErr) {
        console.warn('⚠️ [MySQL] Could not update payment in database:', dbErr.message);
      }
    }

    // Send Confirmation Emails to User & Admin
    console.log(`📧 [Mailer] Dispatching payment receipt & confirmation emails...`);
    const emailResult = await sendPaymentEmails({
      fullName,
      email,
      phone,
      companyName,
      packageName,
      amount: amount || resolvePlanPrice(packageName, currency),
      currency,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });

    return res.status(200).json({
      success: true,
      message: 'Payment verified successfully! Confirmation emails dispatched to User and Admin.',
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      emailSent: emailResult?.success ?? false,
    });
  } catch (error) {
    console.error('❌ [Payment Error] Verification processing failed:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Payment verification processing error.',
    });
  }
};
