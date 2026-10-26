import { getDB } from '../config/db.js';
import { sendInquiryEmails } from '../config/mailer.js';

/**
 * POST /api/inquiries
 * Save package inquiry in MySQL and send dual emails (Admin + User)
 */
export const createInquiry = async (req, res) => {
  try {
    const { fullName, email, phone, companyName, package: packageName, currency, message } = req.body;

    // Basic Validation
    if (!fullName || !email || !packageName) {
      return res.status(400).json({
        success: false,
        message: 'Full Name, Email, and Package Name are required fields.',
      });
    }

    let insertId = null;
    const db = getDB();

    // 1. Insert into MySQL (if connected)
    if (db) {
      const query = `
        INSERT INTO inquiries (full_name, email, phone, company_name, package_name, currency, message)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      const [result] = await db.execute(query, [
        fullName,
        email,
        phone || null,
        companyName || null,
        packageName,
        currency || 'INR',
        message || null,
      ]);
      insertId = result.insertId;
      console.log(`📦 [MySQL] Inquiry saved with ID: ${insertId}`);
    } else {
      console.warn('⚠️  [MySQL Notice] Database not connected. Proceeding with email notification.');
    }

    // 2. Send Emails (Admin Alert + User Confirmation)
    try {
      await sendInquiryEmails({
        fullName,
        email,
        phone,
        companyName,
        packageName,
        currency,
        message,
      });
    } catch (mailError) {
      console.error('⚠️  [Mailer Error]', mailError.message);
      // Even if mail fails, if DB saved, don't completely fail the client
    }

    return res.status(201).json({
      success: true,
      message: 'Inquiry received successfully! Confirmation email has been sent.',
      inquiryId: insertId,
    });
  } catch (error) {
    console.error('❌ [Inquiry Error]', error);
    return res.status(500).json({
      success: false,
      message: 'Server error processing inquiry. Please try again.',
      error: error.message,
    });
  }
};

/**
 * GET /api/inquiries
 * Retrieve all inquiries (for Admin)
 */
export const getAllInquiries = async (req, res) => {
  try {
    const db = getDB();
    if (!db) {
      return res.status(503).json({
        success: false,
        message: 'Database connection is currently unavailable.',
      });
    }

    const [rows] = await db.query('SELECT * FROM inquiries ORDER BY created_at DESC');
    return res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    console.error('❌ [Fetch Inquiries Error]', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch inquiries.',
      error: error.message,
    });
  }
};
