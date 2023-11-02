export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'fr',
	datetimeFormats: {
		fr: {
			short: {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			},
			long: {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				weekday: 'long',
			},
		},
		en: {
			short: {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			},
			long: {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				weekday: 'long',
			},
		},
		nl: {
			short: {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			},
			long: {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				weekday: 'long',
			},
		},
	},
}));
