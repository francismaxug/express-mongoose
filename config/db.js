import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let connected = false;
const connectDB = async () => {
  if (connected) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
