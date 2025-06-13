<script lang="ts">
	import '../app.css';

	let { children } = $props();
	import Nav from '$lib/Nav.svelte';
</script>

<div class="card grid min-h-screen w-full grid-cols-[auto_1fr]">
	<Nav/>
	<div class="p-4">
		{@render children()}
	</div>
</div>


