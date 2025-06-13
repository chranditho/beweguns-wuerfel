<script lang="ts">
	export let data: {
		component: ConstructorOfATypedSvelteComponent;
		metadata: {
			title: string;
			date: string;
		};
	};

	const PostContent = data.component;
</script>

<article class="prose">
	<h1 class="text-3xl font-bold">{data.metadata.title}</h1>
	<p class="mb-6 text-sm text-gray-500">
		{new Date(data.metadata.date).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>

	<!-- Render the Markdown content -->
	<PostContent />
</article>
