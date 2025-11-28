import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import contactRoutes from './routes/contact.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const PORT = process.env.PORT;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// connect to database
connectDB();

// Routes
app.use(contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});