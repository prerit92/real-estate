import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';

dotenv.config();

console.log("This is the string " + process.env.MONGO);

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to mongodb');
}).catch(()=>{
    console.log('Some Error occured, Database not connected');
});

const app = express();

app.listen(3000, ()=>{
    console.log('Server is running on the post 3000')
});

app.use('/api/user', userRouter)