import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();
		const { name, email, subject, message } = data;

		// Validate required fields
		if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
			return json(
				{ success: false, error: 'Alle Felder sind erforderlich.' },
				{ status: 400 }
			);
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json(
				{ success: false, error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
				{ status: 400 }
			);
		}

		// Check for Resend API key
		const resendApiKey = process.env.RESEND_API_KEY;
		if (!resendApiKey) {
			console.error('RESEND_API_KEY environment variable not set');
			return json(
				{ success: false, error: 'E-Mail-Service ist nicht konfiguriert.' },
				{ status: 500 }
			);
		}

		// Send email using Resend API
		const emailResponse = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${resendApiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				from: 'noreply@yourdomain.com', // Replace with your verified domain
				to: ['your-email@example.com'], // Replace with your email address
				subject: `Kontaktformular: ${subject}`,
				html: `
					<h2>Neue Nachricht über das Kontaktformular</h2>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>E-Mail:</strong> ${email}</p>
					<p><strong>Betreff:</strong> ${subject}</p>
					<h3>Nachricht:</h3>
					<p>${message.replace(/\n/g, '<br>')}</p>
					<hr>
					<p><em>Diese Nachricht wurde über das Kontaktformular auf der BewegUNS Würfel Website gesendet.</em></p>
				`,
				reply_to: email, // Allow replying directly to the sender
			}),
		});

		if (!emailResponse.ok) {
			const errorData = await emailResponse.text();
			console.error('Resend API error:', errorData);
			return json(
				{ success: false, error: 'E-Mail konnte nicht gesendet werden.' },
				{ status: 500 }
			);
		}

		const result = await emailResponse.json();
		console.log('Email sent successfully:', result);

		return json({
			success: true,
			message: 'Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden.'
		});

	} catch (error) {
		console.error('Error processing contact form:', error);
		return json(
			{ success: false, error: 'Ein unerwarteter Fehler ist aufgetreten.' },
			{ status: 500 }
		);
	}
};