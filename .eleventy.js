const lodash = require('lodash');
const htmlmin = require('html-minifier');
const svgContents = require('eleventy-plugin-svg-contents');
const pluginPWA = require('./tools/eleventy-plugin-pwa');
const fs = require('fs');
const path = require('path');

const { createCanvas, loadImage } = require('canvas');
const { formatTitle } = require('./tools/format-title');
const createSocialImageForArticle = (input, output) =>
	new Promise((resolve, reject) => {
		(async () => {
			// read data from input file
			try {
				const data = fs.readFileSync(input, {
					encoding: 'utf-8'
				});

				// get title from file data
				const [, title] = data.match(/cardTitle:(.*)/);
		
				const post = {
					title: title,
					author: 'Helperbird',
					tagline: 'Your Accessibility Assistant'
				};

				const width = 1200;
				const height = 627;
				// Set the coordinates for the image position.
				const imagePosition = {
					w: 100,
					h: 100,
					x: 360,
					y: 260
				};
				// Because we are putting the image near the top (y: 75)
				// move the title down.
				const titleY = 300;
				const titleLineHeight = 50;
				// Bring up the author's Y value as well to make it all
				// fit together nicely.
				const authorY = 510;

				const canvas = createCanvas(width, height);
				const context = canvas.getContext('2d');

				const helperbirdLogo = await loadImage('./tools/images/helperbird-logo.png');

				context.fillStyle = '#450a75';
				context.fillRect(0, 0, width, height);

				context.font = "bold 30pt 'PT Sans'";
				context.textAlign = 'left';
				context.fillStyle = '#ffffff';

				const titleText = formatTitle(post.title);
				context.fillText(titleText[0], 470, titleY);
				if (titleText[1]) {
					context.fillText(titleText[1], 485, titleY + titleLineHeight);
				}

				context.font = "20pt 'PT Sans'";
				context.textAlign = 'left';
				context.fillStyle = '#ffffff';
				if (titleText[1]) {
				context.fillText(`${post.author} - ${post.tagline}`, 485, titleY + titleLineHeight + 45);
				}else{
					context.fillText(`${post.author} - ${post.tagline}`, 485, titleY + titleLineHeight);
				}
		//		context.font = "15pt 'PT Sans'";
		//	context.textAlign = 'left';
		//		context.fillStyle = '#ffffff';
		//		context.fillText(`${post.tagline}`, 570, 530 + 35);

				const { w, h, x, y } = imagePosition;
				context.drawImage(helperbirdLogo, x, y, w, h);

				const outputDir = path.dirname(output);
				if (!fs.existsSync(outputDir)) {
					fs.mkdirSync(outputDir, { recursive: true });
				}

				// write the output image

				const stream = fs.createWriteStream(output);
				stream.on('finish', resolve);
				stream.on('error', reject);
				canvas
					.createPNGStream({
						quailty: 1.0
					})
					.pipe(stream);
			} catch (e) {
				console.error(this.inputPath, e);
				console.error(e);
			}
		})();
	});

const manifest = {
	'main.js': '/assets/js/main.bundle.js',
	'main.css': '/assets/js/main.css'
};
const format = require('date-fns/format');
const moment = require('moment');
const { tr } = require('date-fns/locale');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ 'src/pages/admin/': '/admin/' });
	eleventyConfig.addPassthroughCopy({ 'src/assets/': '/assets/' });
	eleventyConfig.addLiquidFilter('limit', (arr, limit) => arr.slice(0, limit));
	eleventyConfig.addTransform('social-image', async function (content) {
		// only handle blog posts
		if (this.inputPath.endsWith('.njk')) {
			return content;
		}

		try {
			await createSocialImageForArticle(
				// our input article
				this.inputPath,
				// the output image name
				this.outputPath.replace('.html', '.png')
			);

			// return normal content
			return content;
		} catch (error) {
			const [, title2] = data.match(/title:(.*)/);
		}
	});



	eleventyConfig.addPlugin(pluginPWA, {
		swDest: './docs/service-worker.js',
		globDirectory: './docs'
	});
	eleventyConfig.addPlugin(svgContents);

	// add `date` filter
	eleventyConfig.addFilter('date', function (date, dateFormat) {
		return format(date, dateFormat);
	});

	// Random Filter: With the help from google search engine
	eleventyConfig.addFilter('shuffle', (arr) => lodash.shuffle(arr));

	eleventyConfig.addFilter('dateDisplay', function (input) {
		let xx = moment(input).format('MMMM Do YYYY');
		return xx;
	});

	let markdownIt = require('markdown-it');
	let markdownItClass = require('@toycode/markdown-it-class');
	let options = {
		html: true,
		breaks: false,
		linkify: true
	};

	const mapping = {
		h1: 'leading-relaxed font-display text-3xl   text-black  mb-2 font-bold',
		h2: 'leading-relaxed font-display text-2xl text-black mb-4 mt-8 font-extrabold',
		h3: 'leading-relaxed font-display text-xl text-black mb-2 font-bold',
		p: 'text-black mb-4 text-lg font-display ',
		strong: 'text-black text-base text-lg',
		bold: 'text-black',
		ul: 'leading-relaxed list-decimal list-decimal-important list-inside mt-4 space-y-2  pl-6 text-lg font-display ml-6 ',
		ol: 'list-decimal list-decimal-important list-inside text-lg font-display ml-6',
		li: 'leading-relaxed mb-4 text-lg font-display ',
		img:'aspect-square rounded-2xl bg-zinc-100 shadow-lg',
		a: 'leading-relaxed font-sans text-lg link link-hover text-blue-500 hover:text-blue-700',
		iframe: 'w-full h-96 rounded-xl shadow-lg m-10'
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

	eleventyConfig.setLibrary('md', markdownIt(options).use(markdownItClass, mapping));
	eleventyConfig.setLiquidOptions({
		dynamicPartials: false,
		strictFilters: false // renamed from `strict_filters` in Eleventy 1.0
	});
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
			data: '../_data',
			includes: '../_includes',
			input: 'src/pages/',
			output: 'docs'
		}
	};
};
