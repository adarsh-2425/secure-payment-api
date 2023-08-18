const mongoose = require('mongoose');

const refundSchema = new mongoose.Schema({
  paymentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment',
    required: true,
  },
  refundId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  refundedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Refund', refundSchema);
