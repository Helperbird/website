const fs = require('fs');
const path = require('path');
const htmlmin = require('html-minifier');
const pluginPWA = require('eleventy-plugin-pwa');
const manifest = {
	'main.js': '/assets/js/main.bundle.js',
	'main.css': '/assets/js/main.css'
};

const format = require('date-fns/format');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/assets/images');
	eleventyConfig.addPassthroughCopy('./src/assets/videos');
	eleventyConfig.addPassthroughCopy('./src/assets/setup');

	eleventyConfig.addPlugin(pluginPWA, {
		swDest: './docs/service-worker.js',
		globDirectory: './docs'
	});

	// add `date` filter
	eleventyConfig.addFilter('date', function (date, dateFormat) {
		return format(date, dateFormat);
	});

	let markdownIt = require('markdown-it');
	let options = {
		html: true,
		breaks: true,
		linkify: true
	};

	eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
		// Eleventy 1.0+: use this.inputPath and this.outputPath instead
		if (outputPath && outputPath.endsWith('.html')) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});
			return minified;
		}

		return content;
	});

	eleventyConfig.setLibrary('md', markdownIt(options));

	// Add a shortcode for bundled CSS.
	eleventyConfig.addShortcode('bundledCss', function () {
		return manifest['main.css'] ? `<link href="${manifest['main.css']}" rel="stylesheet" />` : '';
	});

	// Add a shortcode for bundled JS.
	eleventyConfig.addShortcode('bundledJs', function () {
		return manifest['main.js'] ? `<script src="${manifest['main.js']}"></script>` : '';
	});
	return {
		markdownTemplateEngine: 'md',
		dir: {
			input: 'src',
			output: 'docs'
		}
	};
};
