<script lang="ts">
	import '../app.css';
	import NavDesktop from '$lib/NavDesktop.svelte';
	import NavMobile from '$lib/NavMobile.svelte';

	let { children } = $props();
</script>

<div class="card grid min-h-screen w-full grid-rows-[1fr_auto] lg:grid-cols-[auto_1fr]">
	<div class="hidden lg:block h-screen sticky top-0">
		<NavDesktop />
	</div>
	<div class="p-4">
		{@render children()}
	</div>
	<div class="lg:hidden sticky bottom-0">
		<NavMobile />
	</div>
</div>
