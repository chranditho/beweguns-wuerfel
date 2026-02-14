<script>
	import { resolve } from '$app/paths';
	import workshopBanner from '$lib/assets/workshop/workshop.png';
	import { Download } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Aktuell - BewegUNS-Würfel</title>
</svelte:head>

<img src="{workshopBanner}" alt="Workshop Banner" class="w-full h-auto max-h-[500px] object-contain rounded-xl mb-12 shadow-md bg-white">

<section class="mb-12">
	<h1 class="text-3xl font-bold mb-6">Aktuelle Workshop-Termine</h1>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
		<div class="bg-primary-50 border-t-4 border-primary-500  p-6 rounded-lg col-span-3">
			<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
				<div class="space-y-4">
					<div class="flex items-start gap-2">
						<span class="text-lg">🏃‍♂️</span>
						<p class="text-gray-700 ">Workshop</p>
					</div>
					<div class="flex items-start gap-2">
						<span class="text-lg">📅</span>
						<p class="text-gray-700 ">15.03.2026, 12:00 - 15:00 Uhr</p>
					</div>
					<div class="flex items-start gap-2">
						<span class="text-lg">📍</span>
						<p class="text-gray-700 ">Raiffeisen Sportpark, 1. Stock</p>
					</div>
				</div>
				<a
					href="{resolve('/flyer.pdf')}"
					download="BewegUNS-Wuerfel-Flyer.pdf"
					class="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 border-2 border-primary-700 py-3 px-6 rounded-lg transition-colors font-medium shadow-sm"
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
