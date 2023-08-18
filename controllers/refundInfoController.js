const Refund = require('../models/Refund');

// Get all refunds
exports.getAllRefunds = async (req, res) => {
  try {
    const refunds = await Refund.find();
    res.json(refunds);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get refund by ID
exports.getRefundById = async (req, res) => {
  const { refundId } = req.params;

  try {
    const refund = await Refund.findById(refundId);
    if (!refund) {
      return res.status(404).json({ message: 'Refund not found' });
    }
    res.json(refund);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
