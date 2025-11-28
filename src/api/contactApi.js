export function sendContactForm(payload) {
    return new Promise((resolve, reject) => {
        console.log('📧 Dummy API recieved data:', payload)

        // Simulate API delay
        setTimeout(() => {
            const shouldSucceed = true

            if (shouldSucceed) {
                resolve({ message: 'Contact form submitted successfully!' })
            } else {
                reject({ error: 'Failed to submit contact form.' })
            }
        }, 1000) // Simulate 1 second delay
    })
}