const express = require('express');
const router = express.Router();
const refundController = require('../controllers/refundController');

// Refund Route
router.post('/refund', refundController.refund)

module.exports = router;