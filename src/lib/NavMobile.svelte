<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconFolder from '@lucide/svelte/icons/folder';
	import IconImage from '@lucide/svelte/icons/image';
	import IconMusic from '@lucide/svelte/icons/music';
	import IconVideo from '@lucide/svelte/icons/video';

	let value = $state('files');
</script>

<Navigation.Bar>
	<Navigation.Tile label="Home" href="/"><IconFolder /></Navigation.Tile>
	<Navigation.Tile label="Blog" href="/blog"><IconImage /></Navigation.Tile>
	<Navigation.Tile label="Anleitung" href="/anleitung"><IconMusic /></Navigation.Tile>
	<Navigation.Tile label="Impressum" href="/impressum"><IconVideo /></Navigation.Tile>
</Navigation.Bar>
