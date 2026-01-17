<script lang="ts">
	 let { imageSrc, altText, description, inclusionDefinition, favoriteSports, favoriteGames, reverse }: {
		 imageSrc: string;
		 altText: string;
		 description: string;
		 inclusionDefinition: string;
		 favoriteSports: string;
		 favoriteGames: string | {text: string, singular: boolean};
		 reverse?: boolean;
	 } = $props();
</script>

<div class="flex flex-col lg:flex-row gap-y-6 gap-x-10 items-center {reverse ? 'lg:flex-row-reverse' : ''}">
	<img src="{imageSrc}"
			 alt="{altText}"
			 class="h-72 lg:h-96 block">
	<div class="flex flex-col gap-4">

		<p>{description}</p>
		<p>{inclusionDefinition}</p>
		<ul>
			<li>Lieblingssport: {favoriteSports}</li>
			{#if typeof favoriteGames === 'string'}
			<li>Lieblingsspiele: {favoriteGames}</li>
			{:else }
			<li>Lieblingsspiel: {favoriteGames.text}</li>
			{/if}
		</ul>
	</div>
</div>
