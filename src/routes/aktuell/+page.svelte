<script>
	import { resolve } from '$app/paths';
	import workshopBanner from '$lib/assets/workshop/workshop.png';
	import { Download } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Aktuell - BewegUNS-Würfel</title>
</svelte:head>

<section class="mb-12">
	<h1 class="text-3xl font-bold mb-6">Aktuelle Workshop-Termine</h1>

	<div class="bg-primary-50 border-t-4 border-primary-500 rounded-lg shadow-md overflow-hidden">
		<div class="flex flex-col md:flex-row">
			<img src="{workshopBanner}" alt="Workshop Banner" class="w-full md:w-1/3 h-auto max-h-[350px] object-contain bg-white p-4">
			<div class="p-6 flex flex-col justify-between gap-6">
				<div class="space-y-4">
					<h2 class="text-2xl font-bold text-primary-800">Workshop - BewegUNS-Würfel</h2>
					<a href="{resolve('/workshop.ics')}" download="BewegUNS-Workshop.ics" class="flex items-start gap-2 hover:underline">
						<span class="text-lg">📅</span>
						<p class="text-gray-700">15.03.2026, 12:00 - 15:00 Uhr</p>
					</a>
					<a href="https://www.google.com/maps/search/?api=1&query=Raiffeisen+Sportpark+1.+Stock" target="_blank" rel="noopener noreferrer" class="flex items-start gap-2 hover:underline">
						<span class="text-lg">📍</span>
						<p class="text-gray-700">Raiffeisen Sportpark, 1. Stock</p>
					</a>
				</div>
				<a
					href="{resolve('/flyer.pdf')}"
					download="BewegUNS-Wuerfel-Flyer.pdf"
					class="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 border-2 border-primary-700 py-3 px-6 rounded-lg transition-colors font-medium shadow-sm self-start"
				>
					<Download size={20} />
					Flyer herunterladen
				</a>
			</div>
		</div>
	</div>

</section>

<!-- Hero Greeting Section -->
<section class="text-center py-16 bg-gray-50  rounded-lg mt-16 mb-16">
	<div class="max-w-2xl mx-auto px-8">
		<h2 class="text-3xl font-bold text-gray-800  mb-6">
			Willkommen bei BewegUNS-Würfel!
		</h2>
		<p class="text-lg text-gray-700 mb-8">
			Wir sind der Meinung, dass jeder Mensch Spaß an Bewegung haben kann!
			Der BewegUNS-Würfel ist ein inklusives Würfelspiel für alle. Er wurde partizipativ entwickelt, also von Menschen
			mit und ohne Behinderungen gemeinsam. So vielfältig wie wir Menschen sind, haben auch die kleinen Spielwürfel
			keine Grenzen. Entdecke verschiedene Spielformen für alt und jung, egal ob unterwegs mit Freunden oder allein
			zuhause - wir bringen Bewegung in deinen Alltag!
		</p>
		<a href="{resolve('/kontakt')}"
			 class="inline-block bg-primary-700 hover:bg-primary-600 text-white py-3 px-8 rounded-lg transition-colors font-medium">
			Jetzt anmelden
		</a>
	</div>
</section>
