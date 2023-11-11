import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
// import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
	theme: {
		extend: {
			fontFamily: {
				brand: ["'Manrope'"],
				'brand-bold': ["'Manrope-Bold'"],
				'brand-medium': ["'Manrope-Medium'"],
				'brand-semibold': ["'Manrope-SemiBold'"],
				'brand-light': ["'Manrope-Light'"],
				'brand-extralight': ["'Manrope-ExtraLight'"],
			},
			colors: {
				primary: {
					'50': '#f4f4fb',
					'100': '#e8e9f6',
					'200': '#cbd0ec',
					'300': '#9da7dc',
					'400': '#6979c7',
					'500': '#4658b1',
					'600': '#344195',
					'700': '#2b3479',
					'800': '#272f65',
					'900': '#252a55',
					'950': '#0a0b17',
				},
				secondary: {
					'50': '#f6f6f7',
					'100': '#eeeff1',
					'200': '#e0e1e5',
					'300': '#cdced4',
					'400': '#b8bac1',
					'500': '#a1a2ac',
					'600': '#90919b',
					'700': '#7c7d86',
					'800': '#65656e',
					'900': '#55545b',
					'950': '#313135',
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
