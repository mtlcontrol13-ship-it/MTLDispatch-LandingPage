# Contact Form API Integration Guide

## Overview

This guide explains how to integrate the contact form API with ContactPage.jsx

## API Endpoint

- **URL**: `/api/contact` or your dummy API endpoint
- **Method**: POST
- **Content-Type**: application/json

## Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "phone": "+1234567890",
  "subject": "Project Inquiry",
  "message": "Hello, I'm interested in..."
}
```

## Implementation Steps

### 1. Import the API function

At the top of ContactPage.jsx, add:

```javascript
import { sendContactForm } from "../api/contactApi";
```

### 2. Add state for loading and messages

Inside the ContactPage component, add these state variables:

```javascript
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
```

### 3. Update the handleSubmit function

Replace the existing handleSubmit with:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validation
  if (!formData.name || !formData.email || !formData.message) {
    setSubmitStatus({ type: 'error', message: 'Please fill in all required fields' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
    return;
  }

  // Submit to API
  setIsSubmitting(true);
  setSubmitStatus({ type: '', message: '' });
  
  try {
    const response = await sendContactForm(formData);
    
    setSubmitStatus({ 
      type: 'success', 
      message: response.message || 'Thank you! Your message has been sent successfully.' 
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    setSubmitStatus({ 
      type: 'error', 
      message: error.error || 'Failed to send message. Please try again.' 
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

### 4. Add status message display

Add this after the form opening tag (after `<form onSubmit={handleSubmit} className="mt-8 space-y-6">`):

```javascript
{submitStatus.message && (
  <div className={`p-4 rounded-lg ${
    submitStatus.type === 'success' 
      ? 'bg-green-50 text-green-800 border border-green-200' 
      : 'bg-red-50 text-red-800 border border-red-200'
  }`}>
    {submitStatus.message}
  </div>
)}
```

### 5. Update the submit button

Replace the existing button with:

```javascript
<button
  type="submit"
  disabled={isSubmitting}
  className={`rounded-full py-2 px-8 text-md font-bold text-white transition-colors ${
    isSubmitting 
      ? 'bg-blue-400 cursor-not-allowed' 
      : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
  }`}
>
  <ICONS.Send className="h-4 w-4 mr-2 inline-block" />
  {isSubmitting ? 'Sending...' : 'Send'}
</button>
```

## API File Structure

The dummy API is already created at `src/api/contactApi.js`:

- **Function name**: `sendContactForm`
- **Returns**: A Promise that resolves after 1 second
- **Logs**: The payload to console for testing
- **Testing**: Change `shouldSucceed` to `false` to test error handling

No additional setup needed - the API file is ready to use!
};

```

## Testing

1. Fill out the form with test data
2. Click Submit
3. Check for success/error message
4. Verify form clears on success
5. Check network tab for API call

## Error Handling

The implementation handles:

- Required field validation
- Email format validation
- Network errors
- API errors
- Loading states

## Notes

- Replace `YOUR_API_ENDPOINT_HERE` with your actual API endpoint
- Adjust error messages as needed
- Add additional validation if required
- Consider adding rate limiting if needed
