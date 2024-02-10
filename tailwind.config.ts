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
					'50': '#f1f4fe',
					'100': '#e1e6fd',
					'200': '#bdcbfa',
					'300': '#82a0f7',
					'400': '#4070f0',
					'500': '#174de0',
					'600': '#0a35bf',
					'700': '#0a2b9a',
					'800': '#0c2680',
					'900': '#10236a',
					'950': '#04081a',
				},
				secondary: {
					'50': '#fdf3f3',
					'100': '#fce4e4',
					'200': '#fbcdcd',
					'300': '#f7aaaa',
					'400': '#f07979',
					'500': '#e54e4e',
					'600': '#ca2d2d',
					'700': '#b02525',
					'800': '#912323',
					'900': '#792323',
					'950': '#410e0e',
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
