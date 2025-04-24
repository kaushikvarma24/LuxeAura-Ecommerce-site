import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

// Load environment variables
dotenv.config();

// App configuration
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

//connect to cloudinary
connectCloudinary

// Middleware
app.use(cors());
app.use(express.json());

// API endpoints
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Middleware
app.use(cors());
app.use(express.json());

//api endpoints
app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));