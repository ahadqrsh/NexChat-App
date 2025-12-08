import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB=async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected as ${process.env.MONGO_URI}`)
    } catch (error) {
        console.log("Eror",error)
    }
};
export default connectDB;