module.exports = {
	enabled: true,
	purge: {
		content: [
			'./src/**/**/*.html',
			'./src/**/**/*.md',
			'./src/**/**/*.liquid',
			'./src/assets/js/**/*.js'
		],
		enabled: true,
		options: {
			safelist: [/data-theme$/]
		}
	},
	darkMode: false, // or 'media' or 'class'
	daisyui: {
		styled: true,
		themes: ['light'],
		rtl: false
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	]
};
