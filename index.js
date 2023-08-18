const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Database connection
const connectDb = require('./db.js');
connectDb();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Payment Route
const paymentRoutes = require("./routes/paymentRoutes");
app.use('/api/payment', paymentRoutes);

// Confirm Payment Route
const confirmRoutes = require("./routes/confirmRoutes");
app.use('/api/payment', confirmRoutes);

// All Payment Info Route
//Two routes at this path. even if multiple routes in module, one i enough in main file
const paymentInfoRoutes = require("./routes/paymentInfoRoutes");
app.use('/api/payment', paymentInfoRoutes);

// Refund Payment Route
const refundRoutes = require("./routes/refundRoutes");
app.use('/api/payment', refundRoutes);

// Refund Info Route
const refundInfoRoutes = require("./routes/refundInfoRoutes");
app.use('/api/payment', refundInfoRoutes);

// Serve static files from the "public" folder
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

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