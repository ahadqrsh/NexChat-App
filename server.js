import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import AuthRoutes from './routes/auth.routes.js'
import ChatRoutes from './routes/chat.routes.js'
import { checkAuth } from './middleware/auth.middleware.js';
dotenv.config()
connectDB();


const app=express();

app.use(cors({credentials:true}));
app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Server is working");
});

//Auth Routes
app.use('/api/v1/auth',AuthRoutes)
//Chat Routes
app.use('/api/v1/chat',checkAuth,ChatRoutes)

const PORT=process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});