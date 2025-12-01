// Contact Us Routes
import express from 'express';
import { submitContactForm } from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/contact/submit-form', submitContactForm);

export default router;