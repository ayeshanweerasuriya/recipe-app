import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
