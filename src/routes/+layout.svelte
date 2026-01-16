<script lang="ts">
	import '../app.css';
	import header from '$lib/assets/header.png';

	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<header class="px-4 py-2 flex flex-col justify-center items-center gap-2">
		<img src="{header}" height="450" width="600" alt="Beweg uns Würfel Logo">
		<Nav />
	</header>
	<main class="p-4 flex-grow">
		<div class="max-w-screen-lg mx-auto space-y-10">
		{@render children()}
		</div>
	</main>
	<footer class="bg-gray-900 text-white p-4">
		<div class="max-w-screen-lg mx-auto grid gap-4 md:grid-cols-2">
			<section class="space-y-2">
				<h4 class="font-bold">Navigation</h4>
				<nav class="grid grid-cols-2 gap-2 text-sm">
					<a href="/aktuell" class="hover:underline">Aktuell</a>
					<a href="/workshop" class="hover:underline">Workshop</a>
					<a href="/das-spiel" class="hover:underline">Das Spiel</a>
					<a href="/ueber-uns" class="hover:underline">Über uns</a>
					<a href="/kontakt" class="hover:underline">Kontakt</a>
					<a href="/impressum" class="hover:underline">Impressum</a>
				</nav>
			</section>
			<section class="space-y-2">
				<h4 class="font-bold">Links</h4>
				<a
					href="https://www.instagram.com/bewegunswuerfel/?igsh=d2k5eTBzbDh5Zjg%3D&utm_source=qr"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram (external link to BewegUNS Würfel profile)"
					class="hover:underline"
				>Instagram</a>
			</section>
		</div>
	</footer>
</div>
