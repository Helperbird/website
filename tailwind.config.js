const colors = require('tailwindcss/colors');

module.exports = {
	enabled: true,
	purge: {
		content: [ './app/**/*.pug', './docs/**/*.html', './app/**/*.{vue,js,ts,jsx,tsx}' ],
		enabled: false
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
