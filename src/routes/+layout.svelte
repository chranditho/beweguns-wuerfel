<script lang="ts">
	import '../app.css';
	import header from '$lib/assets/header.png';
	import euLogo from '$lib/assets/EN_FundedbytheEU_RGB_BLACK Outline.png';

	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen max-w-6xl mx-auto">
	<header class="px-4 py-2 flex flex-col justify-center items-center gap-2">
		<img src="{header}" height="450" width="600" alt="Beweg uns Würfel Logo">
		<Nav />
	</header>
	<main class="p-4 grow">
		<div class="space-y-10">
			{@render children()}
		</div>
	</main>
	<footer class="my-8 px-6 text-slate-900">
		<div
			class=" flex gap-6 border-t border-slate-200/70 pt-6 justify-between"
		>
			<section class="space-y-2">
				<h4 class="text-base font-semibold uppercase tracking-[0.2em] text-slate-600">Navigation</h4>
				<nav class="grid grid-cols-3 gap-y-2 gap-x-16 md:grid-cols-3">
					<a href="/aktuell" class="hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Aktuell</a>
					<a href="/workshop" class="hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Workshop</a>
					<a href="/das-spiel" class="hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Das Spiel</a>
					<a href="/ueber-uns" class="hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Über uns</a>
					<a href="/kontakt" class="hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Kontakt</a>
					<a href="/impressum" class="hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Impressum</a>
				</nav>
			</section>
			<section class="space-y-2">
				<h4 class="text-base font-semibold uppercase tracking-[0.2em] text-slate-600">Socials</h4>
				<a
					href="https://www.instagram.com/bewegunswuerfel/?igsh=d2k5eTBzbDh5Zjg%3D&utm_source=qr"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram (external link to BewegUNS Würfel profile)"
					class="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-slate-900 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2"
				>
					<svg aria-hidden="true" viewBox="0 0 24 24" class="h-6 w-6 fill-current">
						<path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm6-2.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
					</svg>
				</a>
			</section>
			<section class="flex flex-col items-start gap-3">
				<h4 class="text-base font-semibold uppercase tracking-[0.2em] text-slate-600">Funded by</h4>
				<img
					src="{euLogo}"
					alt="Funded by the European Union"
					class="h-12 w-auto object-contain"
				>
			</section>
		</div>
	</footer>
</div>
