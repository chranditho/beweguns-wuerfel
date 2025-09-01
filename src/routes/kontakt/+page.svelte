<script lang="ts">
	let name = '';
	let email = '';
	let subject = '';
	let message = '';
	let isSubmitting = false;
	let submitMessage = '';

	async function handleSubmit() {
		isSubmitting = true;
		submitMessage = '';

		// Basic form validation
		if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
			submitMessage = 'Bitte fülle alle Felder aus.';
			isSubmitting = false;
			return;
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			submitMessage = 'Bitte gib eine gültige E-Mail-Adresse ein.';
			isSubmitting = false;
			return;
		}

		// Submit form to API endpoint
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					subject: subject.trim(),
					message: message.trim()
				})
			});

			const result = await response.json();

			if (result.success) {
				// Reset form on success
				name = '';
				email = '';
				subject = '';
				message = '';
				submitMessage = result.message;
			} else {
				submitMessage = result.error || 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.';
			}
		} catch (error) {
			console.error('Form submission error:', error);
			submitMessage = 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>Kontakt - BewegUNS Würfel</title>
</svelte:head>

<div class="max-w-6xl mx-auto">
	<h1 class="text-3xl font-bold mb-6">Kontakt</h1>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
		<!-- Contact Information -->
		<div class="space-y-6">
			<section>
				<h2 class="text-2xl font-semibold mb-4">Kontaktinformationen</h2>
				<div class="bg-gray-50 p-6 rounded-lg space-y-4">
					<div class="flex items-start space-x-3">
						<div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
							<svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Adresse</h3>
							<p class="text-gray-600">[Straße und Hausnummer]</p>
							<p class="text-gray-600">[PLZ Ort]</p>
							<p class="text-gray-600">Österreich</p>
						</div>
					</div>

					<div class="flex items-start space-x-3">
						<div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
							<svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Telefon</h3>
							<p class="text-gray-600">[Telefonnummer]</p>
						</div>
					</div>

					<div class="flex items-start space-x-3">
						<div class="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
							<svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">E-Mail</h3>
							<p class="text-gray-600">[E-Mail-Adresse]</p>
						</div>
					</div>
				</div>
			</section>
		</div>

		<!-- Contact Form -->
		<div>
			<section>
				<div class="space-y-4 mb-4">
				<h2 class="text-2xl font-semibold">Nachricht senden</h2>
				<p class="bg-gray-50 p-4 rounded-lg text-gray-700">Du möchtest dich für einen unserer Workshop anmelden? einen Workshop für deine Einrichtung
					anfragen? oder hast Fragen zu unserem Projekt? - Dann schreib uns einfach eine Nachricht! Wir freuen uns von
					dir zu lesen!"</p>
				</div>
				<form on:submit|preventDefault={handleSubmit} class="space-y-4">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-1">
							Name *
						</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							required
							class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Ihr vollständiger Name"
						/>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-1">
							E-Mail-Adresse *
						</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							required
							class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							placeholder="ihre.email@beispiel.com"
						/>
					</div>

					<div>
						<label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-1">
							Betreff *
						</label>
						<input
							type="text"
							id="subject"
							bind:value={subject}
							required
							class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Worum geht es?"
						/>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-1">
							Nachricht *
						</label>
						<textarea
							id="message"
							bind:value={message}
							required
							rows="6"
							class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Ihre Nachricht an uns..."
						></textarea>
					</div>

					<div>
						<button
							type="submit"
							disabled={isSubmitting}
							class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
						>
							{isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
						</button>
					</div>

					{#if submitMessage}
						<div
							class="mt-4 p-4 rounded-md {submitMessage.includes('erfolgreich') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}">
							{submitMessage}
						</div>
					{/if}
				</form>
			</section>
		</div>
	</div>

	<div class="mt-8 text-sm text-gray-600">
		<p><strong>Hinweis:</strong> Die in eckigen Klammern stehenden Platzhalter sind durch die entsprechenden aktuellen
			Kontaktdaten zu ersetzen.</p>
	</div>
</div>