import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

// Create Nodemailer Transporter
const createTransporter = () => {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null; // SMTP not configured yet, will run in mock/log mode
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true' || port === 465,
    auth: { user, pass },
  });
};

/**
 * 1. Send Inquiry Emails (Both to Admin and to Client/User)
 */
export const sendInquiryEmails = async (data) => {
  const { fullName, email, phone, companyName, packageName, currency, message } = data;
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'admin@brandingagency.com';
  const transporter = createTransporter();

  // HTML for Admin Alert
  const adminHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 24px 32px; color: #ffffff;">
        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 800; color: #38bdf8; display: block; margin-bottom: 6px;">New Lead Alert</span>
        <h2 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff;">Package Inquiry Received</h2>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 140px;">Client Name:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 600;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${phone || 'Not Provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Company:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${companyName || 'Not Provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Selected Package:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 800; color: #b45309;">${packageName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Currency Preference:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${currency || 'INR'}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #64748b; font-weight: 600; vertical-align: top;">Client Message:</td>
            <td style="padding: 12px 0; color: #334155; font-size: 13px; line-height: 1.6; background: #f8fafc; border-radius: 8px; padding: 12px;">${message || 'No additional message provided.'}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
          <a href="mailto:${email}?subject=Regarding Your Inquiry for ${encodeURIComponent(packageName)}" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-weight: 700; font-size: 13px;">Reply to Client</a>
        </div>
      </div>
    </div>
  `;

  // HTML for Client/User Confirmation
  const userHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 32px 32px 28px; color: #ffffff; text-align: center;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">Thank You for Your Inquiry!</h1>
        <p style="margin: 8px 0 0; font-size: 14px; opacity: 0.9;">We have successfully received your request for <strong>${packageName}</strong>.</p>
      </div>
      <div style="padding: 32px; color: #334155; font-size: 14px; line-height: 1.7;">
        <p style="margin-top: 0;">Hi <strong>${fullName}</strong>,</p>
        <p>Thank you for reaching out to us. Our senior creative branding director is reviewing your requirements and will connect with you within <strong>24 business hours</strong> to discuss the next steps.</p>
        <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 8px; margin: 24px 0;">
          <h4 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Inquiry Summary</h4>
          <p style="margin: 4px 0; font-size: 13px;"><strong>Package:</strong> ${packageName}</p>
          <p style="margin: 4px 0; font-size: 13px;"><strong>Company:</strong> ${companyName || 'Individual / Startup'}</p>
        </div>
        <p>If you have any urgent questions, feel free to reply directly to this email.</p>
        <p style="margin-bottom: 0;">Best regards,<br><strong>Branding Agency Team</strong></p>
      </div>
      <div style="background: #f1f5f9; padding: 16px 32px; text-align: center; font-size: 11px; color: #64748b;">
        © ${new Date().getFullYear()} Branding Agency. All rights reserved.
      </div>
    </div>
  `;

  if (!transporter) {
    console.log('\n✉️  [Nodemailer Notice] SMTP credentials not set in .env.');
    console.log(`📨  [Simulated Mail to Admin]: New lead from ${fullName} (${email}) for ${packageName}`);
    console.log(`📨  [Simulated Mail to User]: Confirmation sent to ${email}\n`);
    return { success: true, simulated: true };
  }

  // Send both emails in parallel
  const [adminResult, userResult] = await Promise.all([
    transporter.sendMail({
      from: `"Branding Lead Engine" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `🚨 New Package Inquiry: ${packageName} - ${fullName}`,
      html: adminHtml,
    }),
    transporter.sendMail({
      from: `"Branding Agency" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for your inquiry with Branding Agency!`,
      html: userHtml,
    }),
  ]);

  console.log(`✅ [Nodemailer] Emails sent successfully to Admin (${adminEmail}) and User (${email}).`);
  return { success: true, adminMessageId: adminResult.messageId, userMessageId: userResult.messageId };
};

/**
 * 2. Send Contact Form Emails (Admin + User)
 */
export const sendContactEmails = async (data) => {
  const { name, email, company, servicePackage, message } = data;
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'admin@brandingagency.com';
  const transporter = createTransporter();

  const adminHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
      <h3 style="color: #0f172a; margin-top: 0;">New Contact Form Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Service Package:</strong> ${servicePackage || 'General Inquiry'}</p>
      <p><strong>Message:</strong></p>
      <div style="background: #f8fafc; padding: 12px; border-radius: 8px;">${message}</div>
    </div>
  `;

  const userHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
      <h3 style="color: #2563eb; margin-top: 0;">We have received your message!</h3>
      <p>Hi ${name},</p>
      <p>Thank you for contacting us regarding <strong>${servicePackage || 'our branding services'}</strong>. Our team will review your message and get back to you shortly.</p>
      <p>Best regards,<br><strong>Branding Agency</strong></p>
    </div>
  `;

  if (!transporter) {
    console.log('\n✉️  [Nodemailer Notice] SMTP credentials not set in .env.');
    console.log(`📨  [Simulated Contact Mail to Admin]: Message from ${name} (${email})`);
    console.log(`📨  [Simulated Contact Mail to User]: Acknowledgment sent to ${email}\n`);
    return { success: true, simulated: true };
  }

  await Promise.all([
    transporter.sendMail({
      from: `"Branding Contact" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `📩 New Contact Form Message from ${name}`,
      html: adminHtml,
    }),
    transporter.sendMail({
      from: `"Branding Agency" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We have received your message - Branding Agency`,
      html: userHtml,
    }),
  ]);

  return { success: true };
};

/**
 * 3. Send Payment Confirmation & Receipt Emails (Both Admin & User/Client)
 */
export const sendPaymentEmails = async (data) => {
  const {
    fullName,
    email,
    phone,
    companyName,
    packageName,
    amount,
    currency = 'INR',
    paymentId,
    orderId,
  } = data;

  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'admin@brandingagency.com';
  const transporter = createTransporter();

  const formattedAmount =
    currency.toUpperCase() === 'USD'
      ? `$${Number(amount).toLocaleString()}`
      : `₹${Number(amount).toLocaleString('en-IN')}`;

  const paymentDate = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  // Admin Alert HTML
  const adminHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
      <div style="background: linear-gradient(135deg, #064e3b 0%, #047857 100%); padding: 26px 32px; color: #ffffff;">
        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 800; color: #6ee7b7; display: block; margin-bottom: 6px;">Payment Received • Razorpay Test Mode</span>
        <h2 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff;">🎉 ${formattedAmount} Collected!</h2>
      </div>
      <div style="padding: 30px;">
        <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
          <div style="font-size: 12px; font-weight: 700; color: #047857; text-transform: uppercase; letter-spacing: 0.5px;">Purchased Package</div>
          <div style="font-size: 18px; font-weight: 800; color: #065f46; margin-top: 4px;">${packageName}</div>
          <div style="font-size: 13px; color: #047857; margin-top: 2px;">Amount: <strong>${formattedAmount} ${currency.toUpperCase()}</strong> (Status: <strong>PAID</strong>)</div>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 9px 0; color: #64748b; font-weight: 600; width: 140px;">Client Name:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 700;">${fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 9px 0; color: #64748b; font-weight: 600;">Email Address:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 600;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 9px 0; color: #64748b; font-weight: 600;">Phone Number:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 600;">${phone || 'Not Provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 9px 0; color: #64748b; font-weight: 600;">Company:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 600;">${companyName || 'Not Provided'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 9px 0; color: #64748b; font-weight: 600;">Payment ID:</td>
            <td style="padding: 9px 0; color: #0f172a; font-weight: 700; font-family: monospace;">${paymentId}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 9px 0; color: #64748b; font-weight: 600;">Order ID:</td>
            <td style="padding: 9px 0; color: #64748b; font-family: monospace; font-size: 13px;">${orderId || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 9px 0; color: #64748b; font-weight: 600;">Date & Time:</td>
            <td style="padding: 9px 0; color: #334155; font-size: 13px;">${paymentDate}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
          <a href="mailto:${email}?subject=Welcome to Branding Agency - Kickoff for ${encodeURIComponent(packageName)}" style="display: inline-block; background: #047857; color: #ffffff; padding: 12px 28px; border-radius: 9999px; text-decoration: none; font-weight: 700; font-size: 13px;">Send Kickoff Email to Client</a>
        </div>
      </div>
    </div>
  `;

  // User Payment Receipt HTML
  const userHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 32px 28px; color: #ffffff; text-align: center;">
        <div style="display: inline-block; width: 48px; height: 48px; line-height: 48px; border-radius: 50%; background: #10b981; color: #fff; font-size: 26px; font-weight: 800; margin-bottom: 12px;">✓</div>
        <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff;">Payment Successful!</h1>
        <p style="margin: 6px 0 0; font-size: 14px; color: #94a3b8;">Your plan purchase has been confirmed. Welcome aboard!</p>
      </div>
      <div style="padding: 32px; color: #334155; font-size: 14px; line-height: 1.7;">
        <p style="margin-top: 0;">Hi <strong>${fullName}</strong>,</p>
        <p>Thank you for partnering with <strong>Branding Agency</strong>. Your payment for the <strong>${packageName}</strong> has been successfully processed.</p>
        
        <!-- Receipt Box -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 24px 0;">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #cbd5e1; padding-bottom: 10px; margin-bottom: 10px;">
            <span style="color: #64748b; font-weight: 600;">Package Selected:</span>
            <span style="font-weight: 800; color: #0f172a;">${packageName}</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #cbd5e1; padding-bottom: 10px; margin-bottom: 10px;">
            <span style="color: #64748b; font-weight: 600;">Amount Paid:</span>
            <span style="font-weight: 800; color: #059669; font-size: 16px;">${formattedAmount} ${currency.toUpperCase()}</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #cbd5e1; padding-bottom: 10px; margin-bottom: 10px;">
            <span style="color: #64748b; font-weight: 600;">Transaction ID:</span>
            <span style="font-family: monospace; font-weight: 700; color: #334155;">${paymentId}</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #cbd5e1; padding-bottom: 10px; margin-bottom: 10px;">
            <span style="color: #64748b; font-weight: 600;">Order ID:</span>
            <span style="font-family: monospace; font-size: 12px; color: #64748b;">${orderId || 'N/A'}</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: #64748b; font-weight: 600;">Payment Status:</span>
            <span style="color: #059669; font-weight: 800; text-transform: uppercase;">Completed (Paid)</span>
          </div>
        </div>

        <h4 style="margin: 20px 0 8px; font-size: 14px; color: #0f172a;">🚀 What Happens Next?</h4>
        <ul style="padding-left: 20px; margin: 0 0 20px; color: #475569;">
          <li>Our Senior Creative Director will review your brand profile.</li>
          <li>We will schedule a 1-on-1 Strategy & Kickoff Call within <strong>24 business hours</strong>.</li>
          <li>You will receive your custom Brand Discovery Questionnaire link.</li>
        </ul>

        <p>If you have any questions or need to share brand assets immediately, feel free to reply directly to this email.</p>
        <p style="margin-bottom: 0;">Warm regards,<br><strong>Branding Agency Creative Team</strong></p>
      </div>
      <div style="background: #f1f5f9; padding: 16px 32px; text-align: center; font-size: 11px; color: #64748b;">
        Official Receipt • © ${new Date().getFullYear()} Branding Agency. All rights reserved.
      </div>
    </div>
  `;

  if (!transporter) {
    console.log('\n✉️  [Nodemailer Notice] SMTP credentials not set.');
    console.log(`📨  [Simulated Payment Mail to Admin]: ${formattedAmount} received from ${fullName} (${email}) for ${packageName}`);
    console.log(`📨  [Simulated Receipt to User]: Receipt sent to ${email} for Payment ID ${paymentId}\n`);
    return { success: true, simulated: true };
  }

  try {
    const [adminResult, userResult] = await Promise.all([
      transporter.sendMail({
        from: `"Branding Accounts & Payments" <${process.env.SMTP_USER}>`,
        to: adminEmail,
        subject: `🎉 Payment Confirmed: ${formattedAmount} for ${packageName} - ${fullName}`,
        html: adminHtml,
      }),
      transporter.sendMail({
        from: `"Branding Agency" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `Official Payment Receipt: ${packageName} - Branding Agency`,
        html: userHtml,
      }),
    ]);

    console.log(`📧 [Nodemailer] Dual Payment emails dispatched successfully (Admin: ${adminEmail}, User: ${email})`);
    return { success: true, adminResult, userResult };
  } catch (error) {
    console.error(`⚠️  [Nodemailer Error] Could not send payment emails: ${error.message}`);
    return { success: false, error: error.message };
  }
};

