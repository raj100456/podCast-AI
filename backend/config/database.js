import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully");
    return true;
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    return false; 
  }
}

export default connectToDatabase;