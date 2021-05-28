
module.exports = {
	enabled: true,
	purge: {
		content: [ './app/**/*.pug',  './app/**/*.js' ],
		enabled: true
	},
	darkMode: false, // or 'media' or 'class'
	daisyui: {
		styled: true,
		themes: true,
		rtl: false
	},
	variants: {
		extend: {}
	},
	plugins: [ 	require('daisyui'),require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio') ]
};
