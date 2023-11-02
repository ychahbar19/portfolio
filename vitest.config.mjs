import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
	test: {
		environment: 'node',
		passWithNoTests: true,
		deps: {
			experimentalOptimizer: true,
		},
	},
});
