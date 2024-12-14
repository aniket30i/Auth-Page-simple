import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("MONGO_PASS from env:", process.env);

const mguri = `mongodb+srv://aniketsaha1809:${process.env.MONGO_PASS}@authdb.ycxdx.mongodb.net/?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    console.log("mongo_uri", mguri);
    const conn = await mongoose.connect(mguri);
    console.log(`MongoDB, I'm connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

//7K1mAqZAmTYO3TtA
