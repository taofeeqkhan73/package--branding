import express from 'express';
import { createOrder, verifyPayment } from '../controllers/paymentController.js';

const router = express.Router();

// Route: Create Razorpay Order
router.post('/create-order', createOrder);

// Route: Verify Razorpay Signature & Send Confirmation Emails
router.post('/verify-payment', verifyPayment);

export default router;
