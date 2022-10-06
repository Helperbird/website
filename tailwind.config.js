module.exports = {
	enabled: true,
	darkMode: 'class',
	content: [
		'./src/**/**/*.html',
		'./src/**/**/*.md',
		'./src/**/**/*.liquid',
		'./src/**/**/*.njk',
		'./src/assets/js/**/*.js'
	],

	darkMode: false, // or 'media' or 'class'
	theme: {
		fontSize: {
			'xs': ['0.75rem', { lineHeight: '1rem' }],
			'sm': ['0.875rem', { lineHeight: '1.5rem' }],
			'base': ['1rem', { lineHeight: '1.75rem' }],
			'lg': ['1.125rem', { lineHeight: '2rem' }],
			'xl': ['1.25rem', { lineHeight: '2rem' }],
			'2xl': ['1.5rem', { lineHeight: '2rem' }],
			'3xl': ['2rem', { lineHeight: '2.5rem' }],
			'4xl': ['2.5rem', { lineHeight: '3.5rem' }],
			'5xl': ['3rem', { lineHeight: '3.5rem' }],
			'6xl': ['3.75rem', { lineHeight: '1' }],
			'7xl': ['4.5rem', { lineHeight: '1.1' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }]
		},
		extend: {
			borderRadius: {
				'4xl': '2rem'
			},

			maxWidth: {
				'2xl': '40rem'
			},

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
		darkTheme: false,
		themes: ['light'],
		rtl: false
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography')
	]
};
