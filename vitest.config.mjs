import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
	test: {
		environment: 'node',
		deps: {
			experimentalOptimizer: true,
		},
	},
});
