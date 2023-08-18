const express = require('express');
const router = express.Router();

// Confirm Payment
const paymentConfirmController = require('../controllers/paymentController');

router.post('/confirm-payment', paymentConfirmController.paymentController);

module.exports = router;
