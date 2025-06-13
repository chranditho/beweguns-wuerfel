<script lang="ts">
	// Data comes from +page.ts load function
	export let data: {
		posts: {
			slug: string;
			title: string;
			date: string;
		}[];
	};
</script>

<h1 class="h1 mb-2">Blog</h1>
<p class="mb-6 text-gray-600">Stay updated with the latest posts.</p>

<ul class="prose space-y-6">
	{#each data.posts as post}
		<li>
			<a href={`/blog/${post.slug}`} class="text-xl font-semibold underline hover:no-underline">
				{post.title}
			</a>
			<div class="text-sm text-gray-500">
				{new Date(post.date).toLocaleDateString(undefined, {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</div>
		</li>
	{/each}
</ul>
