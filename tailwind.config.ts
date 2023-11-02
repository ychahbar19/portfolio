import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default <Partial<Config>>{
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				primary: {
					50: '#e0f1f2',
					100: '#b2dede',
					200: '#80c9c9',
					300: '#4db3b2',
					400: '#27a3a1',
					500: '#07938e',
					600: '#078681',
					700: '#077670',
					800: '#096661',
					900: '#094a44',
				},
				secondary: {
					50: '#fff3e2',
					100: '#ffe0b7',
					200: '#ffcc89',
					300: '#ffb75c',
					400: '#ffa83e',
					500: '#ff992d',
					600: '#fc8e2b',
					700: '#f57e28',
					800: '#ee6f26',
					900: '#e35723',
				},
				tertiary: colors.gray,
				accent: colors.pink,
				info: colors.blue,
				success: colors.green,
				warning: colors.yellow,
				error: colors.red,
			},
		},
	},
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
};
