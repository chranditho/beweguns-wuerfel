<script>
	let { headerText, cards } = $props();
</script>

<div class="space-y-8">
	<h2 class="h2 text-center">{headerText}</h2>
	<div class="flex flex-wrap gap-4 justify-center">
		{#each cards as card (card.title)}
			<div class="card w-full max-w-md preset-filled-surface-100-900 p-4 text-center space-y-2">
				<h3 class="h3">{card.title}</h3>
				<p>{card.description}</p>
			</div>
		{/each}
	</div>
</div>