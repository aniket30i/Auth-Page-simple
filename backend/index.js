import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows to parse incoming requests : req.body data format json

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.listen(3500, () => {
  connectDB();
  console.log("Server is running on port 3500");
});
