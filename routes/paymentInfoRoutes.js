const express = require('express');
const router = express.Router();
const paymentInfoController = require('../controllers/paymentInfoController');

router.get('/payment-info', paymentInfoController.getPaymentInfo);

module.exports = router;