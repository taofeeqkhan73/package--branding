import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME || 'branding_agency_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

let pool = null;

// Initialize Database and Tables automatically
export const initDB = async () => {
  try {
    // 1. Connect without database first to ensure database exists
    const rootConnection = await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password,
      port: dbConfig.port,
    });

    await rootConnection.query(
      `CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
    );
    await rootConnection.end();

    // 2. Create the connection pool with database selected
    pool = mysql.createPool(dbConfig);

    // 3. Auto-create 'inquiries' table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS \`inquiries\` (
        \`id\` INT AUTO_INCREMENT PRIMARY KEY,
        \`full_name\` VARCHAR(255) NOT NULL,
        \`email\` VARCHAR(255) NOT NULL,
        \`phone\` VARCHAR(50) DEFAULT NULL,
        \`company_name\` VARCHAR(255) DEFAULT NULL,
        \`package_name\` VARCHAR(255) NOT NULL,
        \`currency\` VARCHAR(10) DEFAULT 'INR',
        \`message\` TEXT DEFAULT NULL,
        \`status\` VARCHAR(50) DEFAULT 'pending',
        \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // 4. Auto-create 'contacts' table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS \`contacts\` (
        \`id\` INT AUTO_INCREMENT PRIMARY KEY,
        \`name\` VARCHAR(255) NOT NULL,
        \`email\` VARCHAR(255) NOT NULL,
        \`company\` VARCHAR(255) DEFAULT NULL,
        \`service_package\` VARCHAR(255) DEFAULT NULL,
        \`message\` TEXT NOT NULL,
        \`status\` VARCHAR(50) DEFAULT 'new',
        \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // 5. Auto-create 'payments' table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS \`payments\` (
        \`id\` INT AUTO_INCREMENT PRIMARY KEY,
        \`razorpay_order_id\` VARCHAR(100) NOT NULL,
        \`razorpay_payment_id\` VARCHAR(100) DEFAULT NULL,
        \`razorpay_signature\` VARCHAR(255) DEFAULT NULL,
        \`full_name\` VARCHAR(255) NOT NULL,
        \`email\` VARCHAR(255) NOT NULL,
        \`phone\` VARCHAR(50) DEFAULT NULL,
        \`company_name\` VARCHAR(255) DEFAULT NULL,
        \`package_name\` VARCHAR(255) NOT NULL,
        \`amount\` DECIMAL(10, 2) NOT NULL,
        \`currency\` VARCHAR(10) DEFAULT 'INR',
        \`status\` VARCHAR(50) DEFAULT 'created',
        \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    console.log(`✅ [MySQL] Connected to database '${dbConfig.database}' & tables verified.`);
    return pool;
  } catch (error) {
    console.error(`⚠️  [MySQL Warning] Could not connect to MySQL (${error.message}).`);
    console.error(`👉  Make sure your local MySQL (XAMPP / Workbench) is running.`);
    // Return null pool so server doesn't crash
    return null;
  }
};

export const getDB = () => pool;
