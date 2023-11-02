// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	modules: [
		'@vueuse/nuxt',
		'@pinia/nuxt',
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'@nuxt/image',
		'@nuxtjs/i18n',
		'nuxt-vitest',
		'@nuxtjs/html-validator',
		'nuxt-typed-router',
	],
	components: [
		{
			path: '@/components',
			pathPrefix: false,
		},
	],
	imports: {
		dirs: ['store', 'composables/**'],
	},
	devServer: {
		port: 8000,
	},
	runtimeConfig: {},
	tailwindcss: {
		cssPath: '@/assets/css/tailwind.css',
		configPath: 'tailwind.config',
	},
	image: {
		dir: 'assets',
		formats: ['webp'],
	},
	app: {
		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
		layoutTransition: {
			name: 'layout',
			mode: 'out-in',
		},
	},
	i18n: {
		compilation: {
			strictMessage: false,
		},
		locales: [
			{
				code: 'fr',
				iso: 'fr-FR',
				name: 'Français',
				file: 'fr-FR.json',
			},
			{
				code: 'en',
				iso: 'en-US',
				name: 'English',
				file: 'en-US.json',
			},
		],
		lazy: true,
		langDir: 'lang',
		defaultLocale: 'fr', // default locale of your project for Nuxt pages and routings,
		// TODO : change this to your own domain
		// baseUrl: 'http://localhost:8000', // used in hreflang tags
		strategy: 'prefix_except_default', // use prefix_except_default strategy to remove the default locale prefix
	},
	devtools: { enabled: true },
});
