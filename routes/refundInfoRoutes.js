const express = require('express');
const router = express.Router();
const refundInfoController = require('../controllers/refundInfoController');

// All Refund Info
router.get('/refund-info', refundInfoController.getAllRefunds)

// Refund Info By Id
router.get('/refund-info/:refundId', refundInfoController.getRefundById);

module.exports = router;