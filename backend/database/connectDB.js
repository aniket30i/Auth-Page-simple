import mongoose from "mongoose";

const mguri = `mongodb+srv://aniketsaha1809:${process.env.PASSWORD}@authdb.ycxdx.mongodb.net/auth_DB?retryWrites=true&w=majority`;

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
