
module.exports = {
	enabled: true,
	purge: {
		content: [ './app/**/*.pug',  './app/**/*.js' ],
		enabled: true
	},
	darkMode: false, // or 'media' or 'class'

	variants: {
		extend: {}
	},
	plugins: [ require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio') ]
};
