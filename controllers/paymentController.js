const stripe = require('stripe')(process.env.Secret_key);
const Payment = require('../models/Payment'); 

exports.paymentController = async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never',
      },
    });

  // Save the payment data to the database
    const payment = new Payment({
      paymentId: paymentIntent.id,
      amount,
      currency,
      status: paymentIntent.status
    });
    await payment.save();

    console.log(payment);

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}