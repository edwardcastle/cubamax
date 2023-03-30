/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.vue',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./assets/**/*.css',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		screens: {
			xs: '600px',
			sm: '768px',
			md: '992px',
			lg: '1200px',
			xl: '1700px',
		},

		extend: {
			colors: {
				primary: '#363D47',
				secondary: '#349898',
				'secondary-light': '#9BDAD6',
				gray: '#ADAFA6',
				'gray-light': '#F6F5F1',
				accent: '#FDBD31',
			},
		},
	},
};
