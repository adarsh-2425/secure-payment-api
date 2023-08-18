const Payment = require('../models/Payment');

exports.getAllPaymentInfo = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get specific payment details
exports.getPaymentById = async (req, res) => {
  const paymentId = req.params.paymentId;

  try {
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};