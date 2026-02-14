<script>
	import euLogo from '$lib/assets/EN_FundedbytheEU_RGB_POS.png';
	import headerLogo from '$lib/assets/header.png';
</script>

<svelte:head>
	<title>Impressum - BewegUNS-Würfel</title>
</svelte:head>

<h1 class="text-3xl font-bold mb-6">Impressum</h1>

<div class="space-y-12">
	<section>
		<div class="p-4 space-y-4 text-lg">
			<p><strong>Verantwortlich für den Inhalt:</strong></p>
			<p>Samuel Grausgruber</p>
			<p>Rittergasse 2, 8010 Graz</p>
			<p>Österreich</p>
			<p>E-Mail: <a href="mailto:samuelgrausgruber@gmail.com" class="text-primary-700 hover:underline">samuelgrausgruber@gmail.com</a></p>
		</div>
	</section>

	<section class="bg-primary-50 p-8 rounded-2xl border-l-8 border-primary-500">
		<h2 class="text-2xl font-bold mb-4 text-primary-900">Über dieses Projekt</h2>
		<p class="text-lg text-primary-800 leading-relaxed">
			Der BewegUNS-Würfel ist ein Solidaritätsprojekt, das von der Europäischen Union im Rahmen des Europäischen Solidaritätskorps gefördert wird.
		</p>
	</section>

	<section class="flex flex-col items-center gap-12 py-8">
		<img
			src="{headerLogo}"
			alt="BewegUNS-Würfel Logo"
			class="max-w-md w-full h-auto drop-shadow-xl"
		>
		<img
			src="{euLogo}"
			alt="Funded by the European Union"
			class="max-w-xs w-full h-auto"
		>
	</section>
</div>