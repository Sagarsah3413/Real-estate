import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db.js";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();
const app = express();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json())

app.use('/api/user/',userRouter);
app.use('/api/auth/',authRouter);
app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error!';
  return res.status(statusCode).json({
    success : false,
    statusCode,
    message
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}...`);
});
