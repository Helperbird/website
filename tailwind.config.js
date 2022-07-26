module.exports = {
	enabled: true,

	content: [
		'./src/**/**/*.html',
		'./src/**/**/*.md',
		'./src/**/**/*.liquid',
		'./src/**/**/*.njk',
		'./src/assets/js/**/*.js'
	],

	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateRows: {
				'[auto,auto,1fr]': 'auto auto 1fr'
			}
		}
	},
	variants: {
		extend: {}
	},
	daisyui: {
		styled: true,
		themes: true,
		base: false,
		utils: true,
		logs: true,
		rtl: false,
		darkTheme: 'dark',
		themes: ['light'],
		rtl: false
	},
	plugins: [require('daisyui')]
};
