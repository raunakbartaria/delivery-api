const express = require('express');
const bodyParser = require('body-parser');
const deliveryRouter = require('./routes/deliveryRoute');

const app = express();

// Middleware
app.use(bodyParser.json());

// Root route handler
app.get('/', (req, res) => {
  res.send('Delivery Cost API is running. Send POST requests to /api/calculate-delivery-cost');
});

// Routes
app.use('/api', deliveryRouter);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
