# Contact Form Setup with Resend

This document explains how to set up the contact form to send emails using Resend.

## Prerequisites

1. Create a Resend account at [resend.com](https://resend.com)
2. Verify your domain in the Resend dashboard
3. Create an API key in the Resend dashboard

## Environment Variables

Add the following environment variable to your project:

### For local development (.env.local):
```
RESEND_API_KEY=re_your_api_key_here
```

### For Vercel deployment:
1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the environment variable:
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key

## Configuration

Update the following values in `src/routes/api/contact/+server.ts`:

1. **From Email Address** (line 44):
   ```
   from: 'noreply@yourdomain.com', // Replace with your verified domain
   ```
   Replace `yourdomain.com` with your verified domain in Resend.

2. **To Email Address** (line 45):
   ```
   to: ['your-email@example.com'], // Replace with your email address
   ```
   Replace `your-email@example.com` with the email address where you want to receive contact form submissions.

## Domain Verification

In Resend, you need to verify your domain to send emails from it:

1. Go to Resend Dashboard > Domains
2. Add your domain
3. Follow the DNS configuration instructions
4. Wait for verification to complete

## Testing

1. Make sure your environment variables are set
2. Start your development server: `npm run dev`
3. Navigate to the contact page
4. Fill out and submit the form
5. Check your email for the message

## Email Template

The email template includes:
- Sender's name and email
- Subject line
- Message content
- Automatic reply-to setup for easy responses

## Security Notes

- Never commit your API key to version control
- Use environment variables for all sensitive configuration
- The API endpoint includes validation for all required fields
- Email addresses are validated using regex patterns

## Troubleshooting

- **API Key Error**: Make sure `RESEND_API_KEY` environment variable is set
- **Domain Not Verified**: Verify your domain in the Resend dashboard
- **Email Not Received**: Check spam folder and verify the recipient email address
- **Rate Limits**: Resend has rate limits based on your plan