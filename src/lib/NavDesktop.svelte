<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconFolder from '@lucide/svelte/icons/folder';
	import IconImage from '@lucide/svelte/icons/image';
	import IconMusic from '@lucide/svelte/icons/music';
	import IconVideo from '@lucide/svelte/icons/video';

	// State
	let value = $state('files');
</script>

<Navigation.Rail {value} onValueChange={(newValue) => (value = newValue)}>
	{#snippet tiles()}
		<Navigation.Tile href="/" label="Home"><IconImage /></Navigation.Tile>
		<Navigation.Tile href="/blog" label="Blog"><IconFolder /></Navigation.Tile>
		<Navigation.Tile href="/anleitung" label="Anleitung"><IconMusic /></Navigation.Tile>
		<Navigation.Tile href="impressum" label="Impressum"><IconVideo /></Navigation.Tile>
	{/snippet}
</Navigation.Rail>
