import { getDB } from '../config/db.js';
import { sendContactEmails } from '../config/mailer.js';

/**
 * POST /api/contacts
 * Save contact message in MySQL and send dual emails (Admin + User)
 */
export const createContact = async (req, res) => {
  try {
    const { name, email, company, servicePackage, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, Email, and Message are required.',
      });
    }

    let insertId = null;
    const db = getDB();

    if (db) {
      const query = `
        INSERT INTO contacts (name, email, company, service_package, message)
        VALUES (?, ?, ?, ?, ?)
      `;
      const [result] = await db.execute(query, [
        name,
        email,
        company || null,
        servicePackage || null,
        message,
      ]);
      insertId = result.insertId;
      console.log(`📩 [MySQL] Contact saved with ID: ${insertId}`);
    }

    try {
      await sendContactEmails({ name, email, company, servicePackage, message });
    } catch (mailError) {
      console.error('⚠️  [Mailer Error]', mailError.message);
    }

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully! Our team will get back to you.',
      contactId: insertId,
    });
  } catch (error) {
    console.error('❌ [Contact Error]', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process contact message.',
      error: error.message,
    });
  }
};

/**
 * GET /api/contacts
 */
export const getAllContacts = async (req, res) => {
  try {
    const db = getDB();
    if (!db) {
      return res.status(503).json({
        success: false,
        message: 'Database connection is currently unavailable.',
      });
    }

    const [rows] = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
    return res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    console.error('❌ [Fetch Contacts Error]', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch contact messages.',
      error: error.message,
    });
  }
};
