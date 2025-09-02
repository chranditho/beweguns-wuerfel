<script lang="ts">
	import '../app.css';
	import header from '$lib/assets/header.png';

	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<header class="px-4 py-2 flex flex-col justify-center items-center gap-2">
		<img src="{header}" height="300" width="400" alt="Beweg uns Würfel Logo">
		<Nav />
	</header>
	<main class="p-4 flex-grow">
		{@render children()}
	</main>
	<footer class="bg-gray-900 text-white p-4">done: footer</footer>
</div>
