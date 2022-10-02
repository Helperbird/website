var purgecss = require('@fullhuman/postcss-purgecss');
var cssnano = require('cssnano');
module.exports = {
	
	plugins: [
		require('tailwindcss')('./tailwind.config.js'),
		require('autoprefixer'),
		
		
	]
};
