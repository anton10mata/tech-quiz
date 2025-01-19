const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();dotenv.config({ path: './server/.env' });
console.log('Environment Variables:', process.env);
console.log('MONGO_URI:', process.env.MONGO_URI);

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define the port (default: 5001)
const PORT = process.env.PORT || 5001;

// Log environment variables for debugging (optional, can be removed later)
console.log('Environment Variables:', process.env);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI) // Removed deprecated options
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define a basic route to confirm the server is running
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});