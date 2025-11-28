const express = require('express');
const app = express()
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact.route');

require('dotenv').config();

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