export function sendContactForm(payload) {
    return new Promise((resolve, reject) => {
        console.log('📧 Dummy API received data:', payload)

        // Simulate API delay
        setTimeout(() => {
            const shouldSucceed = true

            if (shouldSucceed) {
                // Store data in localStorage (browser storage)
                const existingData = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                const newSubmission = {
                    ...payload,
                    id: Date.now(),
                    timestamp: new Date().toISOString()
                };
                existingData.push(newSubmission);
                localStorage.setItem('contactSubmissions', JSON.stringify(existingData));

                console.log('✅ Data stored successfully. Total submissions:', existingData.length);

                resolve({ message: 'Contact form submitted successfully!' })
            } else {
                reject({ error: 'Failed to submit contact form.' })
            }
        }, 1000)
    })
}

export function getContactSubmissions() {
    return JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
}

export function clearContactSubmissions() {
    localStorage.removeItem('contactSubmissions')
    console.log('🗑️ Contact submissions cleared from localStorage')
}