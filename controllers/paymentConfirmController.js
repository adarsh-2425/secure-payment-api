module.exports.paymentConfirm = async (req, res) => {
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
}