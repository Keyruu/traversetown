import { vitePreprocess } from '@astrojs/svelte';

export default {
	preprocess: vitePreprocess(),
	optimizeDeps: {
		exclude: ['@urql/svelte'],
	}
};
