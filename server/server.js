import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDB, getDB } from './config/db.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, postman)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive for local dev
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger (Development)
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// Health Check API
app.get('/api/health', (req, res) => {
  const dbConnected = getDB() !== null;
  res.status(200).json({
    status: 'online',
    server: 'Branding Backend Node.js API',
    database: dbConnected ? 'MySQL Connected' : 'MySQL Not Connected (Check XAMPP/MySQL service)',
    time: new Date().toISOString(),
  });
});

// Mount Routes
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/payment', paymentRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found.` });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('💥 [Server Error]', err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred.',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// Start Server and Initialize Database
app.listen(PORT, async () => {
  console.log(`\n======================================================`);
  console.log(`🚀 [Backend] Server running at http://localhost:${PORT}`);
  console.log(`📡 [Health] API Health Check at http://localhost:${PORT}/api/health`);
  console.log(`======================================================`);
  await initDB();
});
