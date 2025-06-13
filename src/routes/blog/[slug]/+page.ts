// +page.ts
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const modules = import.meta.glob('$lib/posts/*.md');

	const slug = params.slug;
	const match = Object.entries(modules).find(([path]) =>
		path.endsWith(`/${slug}.md`)
	);

	if (!match) {
		throw error(404, `Post not found: ${slug}`);
	}

	const post = await match[1]() as {
		default: unknown;
		metadata: {
			title: string;
			date: string;
		};
	};

	return {
		slug,
		component: post.default,
		metadata: post.metadata
	};
};