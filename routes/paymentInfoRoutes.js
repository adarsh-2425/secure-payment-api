const express = require('express');
const router = express.Router();
const paymentInfoController = require('../controllers/paymentInfoController');

router.get('/payment-info', paymentInfoController.getAllPaymentInfo);

// Get specific payment info
router.get('/:paymentId', paymentInfoController.getPaymentById);

module.exports = router;