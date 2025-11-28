// Contact Us Routes
import express from 'express';
import contactController from '../controllers/contact.controller.js';

const router = express.Router();

router.use('/api', contactController);

export default router;