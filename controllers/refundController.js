const Refund = require('../models/Refund');

exports.refund = async (req, res) => {
  try {
    const { paymentId, refundId, amount, reason } = req.body;

    const refund = new Refund({
      paymentId,
      refundId,
      amount,
      reason,
    });

    await refund.save();

    res.json({ message: 'Refund saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
