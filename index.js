const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Database connection
const connectDb = require('./db.js');
connectDb();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Payment Route
const paymentRoutes = require("./routes/paymentRoutes");
app.use('/api/payment', paymentRoutes);

// Confirm Payment Route
const confirmRoutes = require("./routes/confirmRoutes");
app.use('/api/payment', confirmRoutes);

// Payment Info Route
const paymentInfoRoutes = require("./routes/paymentInfoRoutes");
app.use('/api/payment', paymentInfoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Something went wrong' });
});

// Server
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});