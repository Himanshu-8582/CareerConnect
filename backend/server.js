import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/user.route.js';
import postRoute from './routes/post.route.js';

dotenv.config();



const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
app.use(cors());
app.use(express.json());

app.use(userRoute);
app.use(postRoute);
app.use(express.static('uploads'))

const start = async () => {
    const connectDB = await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
start();