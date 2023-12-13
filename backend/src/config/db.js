// db.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected.");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
}

export { connectToDatabase };
