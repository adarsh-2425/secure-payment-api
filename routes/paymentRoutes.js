const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Create Payment
router.post('/create-payment', paymentController.paymentController);

module.exports = router;
