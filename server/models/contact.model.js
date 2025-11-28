// Contact Us Model
import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    phone: { type: String },
    subject: { type: String },
    message: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;