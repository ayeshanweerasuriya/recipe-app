import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./connectDB.js";
import { userRouter } from "../routes/users.js";

connectDB();
const app = express();
const PORT = process.env.PORT || 8000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/", (req, res, next) => {
  console.log(req.method + " - " + req.url);
  next();
});

app.use("/auth", userRouter);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on Port:`, PORT);
});
