import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.md', '.svx']
	})],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.md', '.svx']
};

export default config;
