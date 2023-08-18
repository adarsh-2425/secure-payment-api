const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.Secret_key);

// Confirm Payment
router.post('/confirm-payment', async (req, res) => {
  try {
    const { id, paymentMethod } = req.body;

    const paymentIntent = await stripe.paymentIntents.confirm(id, {
      payment_method: paymentMethod,
    });

    // Handle successful payment
    res.json({ status: paymentIntent.status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
