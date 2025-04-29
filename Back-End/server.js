import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';

// Load environment variables
dotenv.config();

// App configuration
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Connect to Cloudinary
connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());

// API endpoints
app.use('/api/users', userRouter);
app.use('/api/product', productRouter);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



