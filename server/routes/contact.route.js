// Contact Us Routes
import express from 'express';
const router = express.Router();
import contactController from '../controllers/contact.controller.js';

router.use('/api', contactController);

export default router;