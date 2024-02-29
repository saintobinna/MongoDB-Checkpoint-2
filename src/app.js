// import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import myUserRoutes from "./routers/userRoutes.js";

const app = express();

const connectDB = async () => {
  // the try catch helps you try something then catch the errors
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MondoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use("/api/v1/users", myUserRoutes);

const port = process.env.PORT;
console.log(process.env.PORT);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
