const API_URL = 'http://localhost:3000/api';

export async function sendContactForm(payload) {
    try {
        const response = await fetch(`${API_URL}/contact/submit-form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            throw data;
        }

        console.log('✅ Contact form submitted successfully:', data);
        return data;
    } catch (error) {
        console.error('❌ Error submitting contact form:', error);
        throw error;
    }
}
