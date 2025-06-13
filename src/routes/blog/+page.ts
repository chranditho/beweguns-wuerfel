// +page.ts
export const load = async () => {
	const modules = import.meta.glob('$lib/posts/*.md');

	const postPromises = Object.entries(modules).map(async ([path, resolver]) => {
		const { metadata } = (await resolver()) as { metadata: any };
		const slug = path.split('/').pop()?.replace('.md', '') || '';
		return { slug, ...metadata };
	});

	const posts = await Promise.all(postPromises);

	// Optional: sort newest first
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
