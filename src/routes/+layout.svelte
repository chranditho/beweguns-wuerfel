<script lang="ts">
	import '../app.css';
	import header from '$lib/assets/header.png';
	import euLogo from '$lib/assets/EN_FundedbytheEU_RGB_BLACK Outline.png';
	import biocraflab from '$lib/assets/partner/biocraflab.png';
	import ingeniousDesign from '$lib/assets/partner/ingenious-design.png';
	import { resolve } from '$app/paths';

	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen max-w-6xl mx-auto" aria-hidden="false">
	<a
		href="#main-content"
		class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-700"
	>
		Zum Inhalt springen
	</a>
	<header class="px-4 py-2 flex flex-col justify-center items-center gap-2">
		<h1 class="sr-only">BewegUNS-Würfel</h1>
		<img src="{header}" height="450" width="600" alt="BewegUNS-Würfel Logo">
		<Nav />
	</header>
	<main id="main-content" class="p-4 grow">
		<div class="space-y-10">
			{@render children()}
		</div>
	</main>
	<footer class="mt-auto mb-8 px-6 text-slate-900">
		<div
			class="grid gap-10 border-t border-slate-200/70 pt-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			<section class="flex flex-col items-center text-center sm:items-start sm:text-left space-y-4">
				<h2 class="text-xs font-bold uppercase tracking-widest text-slate-500">Navigation</h2>
				<nav class="grid grid-cols-2 gap-y-3 gap-x-6">
					<a href="{resolve('/aktuell')}" class="text-sm hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Aktuell</a>
					<a href="{resolve('/workshop')}" class="text-sm hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Workshop</a>
					<a href="{resolve('/das-spiel')}" class="text-sm hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Das Spiel</a>
					<a href="{resolve('/ueber-uns')}" class="text-sm hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Über uns</a>
					<a href="{resolve('/kontakt')}" class="text-sm hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Kontakt</a>
					<a href="{resolve('/impressum')}" class="text-sm hover:text-primary-700 focus-visible:underline focus-visible:underline-offset-4">Impressum</a>
				</nav>
			</section>

			<section class="flex flex-col items-center text-center sm:items-start sm:text-left space-y-4">
				<h2 class="text-xs font-bold uppercase tracking-widest text-slate-500">Socials</h2>
				<a
					href="https://www.instagram.com/bewegunswuerfel/?igsh=d2k5eTBzbDh5Zjg%3D&utm_source=qr"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram (external link to BewegUNS-Würfel profile)"
					class="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2"
				>
					<svg aria-hidden="true" viewBox="0 0 24 24" class="h-6 w-6 fill-current">
						<path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm6-2.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
					</svg>
				</a>
			</section>

			<section class="flex flex-col items-center text-center sm:items-start sm:text-left space-y-4">
				<h2 class="text-xs font-bold uppercase tracking-widest text-slate-500">Partner</h2>
				<div class="flex flex-wrap justify-center sm:justify-start gap-6 items-center">
					<a href="https://biocraftlab.com/" target="_blank" rel="noopener noreferrer" class="hover:opacity-100 transition-opacity">
						<img
							src="{biocraflab}"
							alt="Biocraflab Logo"
							class="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0"
						>
					</a>
					<a href="https://shop.ingeniousdesign.at/" target="_blank" rel="noopener noreferrer" class="hover:opacity-100 transition-opacity">
						<img
							src="{ingeniousDesign}"
							alt="Ingenious Design Logo"
							class="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0"
						>
					</a>
				</div>
			</section>

			<section class="flex flex-col items-center text-center sm:items-start sm:text-left space-y-4">
				<h2 class="text-xs font-bold uppercase tracking-widest text-slate-500">Funded by</h2>
				<img
					src="{euLogo}"
					alt="Funded by the European Union"
					class="h-10 w-auto object-contain"
				>
			</section>
		</div>
	</footer>
</div>
