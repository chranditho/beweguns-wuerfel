<script lang="ts">
	let { imageSrc, altText, text, reverse }: {
		imageSrc: string;
		altText: string;
		text: string;
		reverse?: boolean;
	} = $props();
</script>

<div class="flex flex-col lg:flex-row gap-y-6 gap-x-10 items-center {reverse ? 'lg:flex-row-reverse' : ''}">
	<img src="{imageSrc}"
			 alt="{altText}"
			 class="h-64 lg:h-80 w-auto object-contain block rounded-xl shadow-lg">
		<p>{text}</p>
</div>
