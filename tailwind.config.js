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
		base: false,
		themes: [
			{
				helperbird: {
					'primary': '#785ef0' /* Primary color */,
					'primary-focus': '#3212BF' /* Primary color - focused */,
					'primary-content': '#ffffff' /* Foreground content color to use on primary color */,

					'secondary': '#DC267F' /* Secondary color */,
					'secondary-focus': '#B41D66' /* Secondary color - focused */,
					'secondary-content': '#ffffff' /* Foreground content color to use on secondary color */,

					'accent': '#ffb000' /* Accent color */,
					'accent-focus': '#C78800' /* Accent color - focused */,
					'accent-content': '#000000' /* Foreground content color to use on accent color */,

					'neutral': '#3d4451' /* Neutral color */,
					'neutral-focus': '#2a2e37' /* Neutral color - focused */,
					'neutral-content': '#ffffff' /* Foreground content color to use on neutral color */,

					'base-100': '#ffffff' /* Base color of page, used for blank backgrounds */,
					'base-200': '#f9fafb' /* Base color, a little darker */,
					'base-300': '#d1d5db' /* Base color, even more darker */,
					'base-content': '#000000' /* Foreground content color to use on base color */,

					'info': '#648fff' /* Info */,
					'success': '#31a1ae' /* Success */,
					'warning': '#fe6100' /* Warning */,
					'error': '#d73e41' /* Error */
				}
			}
		],
		rtl: false
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	]
};
