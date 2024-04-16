import cors from 'cors';
import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import { productRouter } from './routers/productRouter';
import { seedRouter } from './routers/seedRoter';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/typezonedb';
mongoose.set('strictQuery', true);
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(() => {
    console.log('error mongodb')
  })

const app = express();

/**
 * Enable CORS middleware to allow cross-origin requests.
 * This allows the frontend application running on http://localhost:5173 to access the backend API.
 */
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

app.use('/api/products', productRouter);
app.use('/api/seed', seedRouter);


const PORT = 4000;

/**
 * Start the server and listen on the specified port.
 * @param PORT - The port number to listen on.
 */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});