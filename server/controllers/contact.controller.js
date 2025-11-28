// Contact Us Controller
import express from 'express';
import Contact from '../models/contact.model.js';

const router = express.Router();

// POST /api/contact - Submit a contact form
router.post('/contact', async (req, res) => {
    const { name, email, company, phone, subject, message } = req.body;
    try {
        const newContact = new Contact({ name, email, company, phone, subject, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit contact form' });
    }
});

export default router;