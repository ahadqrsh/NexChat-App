import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import AuthRoutes from './routes/auth.routes.js'
dotenv.config()
connectDB();


const app=express();

app.use(cors({credentials:true}));
app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Server is working");
});
app.use('/api/v1/auth',AuthRoutes)
const PORT=process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});