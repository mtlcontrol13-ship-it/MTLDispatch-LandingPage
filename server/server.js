const express = require('express');
const app = express()
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();

const PORT = process.env.PORT;

app.use(cors());

// connect to database
connectDB();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});