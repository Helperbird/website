const colors = require('tailwindcss/colors');

module.exports = {
	enabled: true,
	purge: {
		content: [ './app/**/*.pug',  './app/**/*.js' ],
		enabled: true
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				orange: colors.orange
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [ require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio') ]
};
