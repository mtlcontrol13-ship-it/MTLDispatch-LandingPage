import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import contactRoutes from './routes/contact.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// connect to database
connectDB();

// Routes
app.use('/api', contactRoutes);

// Root route for testing
app.get('/', (req, res) => {
    res.json({ message: 'MTLDispatch API is running' });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;