# EmailJS Template Configuration

## Template Variables
Your EmailJS template should include these variables to receive the form data:

- `{{name}}` - Customer's name
- `{{email}}` - Customer's email address
- `{{subject}}` - Subject line
- `{{message}}` - Customer's message
- `{{service}}` - Selected service (new field)

## Sample EmailJS Template

```html
<!DOCTYPE html>
<html>
<head>
    <title>New Service Inquiry</title>
</head>
<body>
    <h2>New Service Inquiry from Portfolio</h2>
    
    <h3>Contact Information:</h3>
    <p><strong>Name:</strong> {{name}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    
    <h3>Service Details:</h3>
    <p><strong>Service Required:</strong> {{service}}</p>
    <p><strong>Subject:</strong> {{subject}}</p>
    
    <h3>Message:</h3>
    <p>{{message}}</p>
    
    <hr>
    <p><em>This inquiry was sent from your portfolio contact form.</em></p>
</body>
</html>
```

## Environment Variables
Make sure you have these environment variables set in your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

## How It Works
1. User selects a service from the dropdown
2. If "Other" is selected, an additional field appears for specification
3. When "Get Quote" is clicked from any service card, it automatically:
   - Scrolls to the contact form
   - Pre-selects the chosen service
4. The form submission includes the service information in the email
5. EmailJS sends the email with all form data including the selected service

## Service Options Available
- Odoo Development
- Full-Stack Development
- Database Solutions
- Cloud Infrastructure
- UiPath RPA Solutions
- System Integration
- Other (with custom specification)
