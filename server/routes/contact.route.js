// Contact Us Routes
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.use('/api', contactController);

module.exports = router;