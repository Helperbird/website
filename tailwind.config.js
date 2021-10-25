module.exports = {
	enabled: true,
	purge: {
		content: [
			'./src/**/**/*.html',
			'./src/**/**/*.md',
			'./src/**/**/*.liquid',
			'./src/**/**/*.njk',
			'./src/assets/js/**/*.js'
		],
		enabled: true
	},
	darkMode: false, // or 'media' or 'class'

	variants: {
		extend: {}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	]
};
