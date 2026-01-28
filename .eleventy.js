const lodash = require('lodash');
const htmlmin = require('html-minifier');
const svgContents = require('eleventy-plugin-svg-contents');
const pluginPWA = require('eleventy-plugin-pwa-v2');
const fs = require('fs');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const path = require('path');
const { format, parseISO } = require('date-fns');
const moment = require('moment');
const { createCanvas, loadImage } = require('canvas');
const { formatTitle } = require('./tools/format-title');

/**
 * Extract front matter value from markdown content
 * @param {string} data - File content
 * @param {string} key - Front matter key to extract
 * @returns {string|null} - Extracted value or null
 */
const extractFrontMatter = (data, key) => {
	const regex = new RegExp(`^${key}:\\s*(.*)$`, 'm');
	const match = data.match(regex);
	return match ? match[1].trim() : null;
};

const createSocialImageForArticle = async (input, output) => {
	try {
		// Check if the output image already exists
		if (fs.existsSync(output)) {
			return;
		}

		// Read data from the input file
		const data = fs.readFileSync(input, { encoding: 'utf-8' });

		// Extract front matter fields
		const title = extractFrontMatter(data, 'cardTitle') || extractFrontMatter(data, 'title') || 'Helperbird';
		const category = extractFrontMatter(data, 'blog_cat');
		const description = extractFrontMatter(data, 'blog_snip') || extractFrontMatter(data, 'description');

		const post = {
			title: title.trim(),
			category: category ? category.trim() : null,
			description: description ? description.trim() : null,
			domain: 'Helperbird.com'
		};

		const width = 1200;
		const height = 627;

		const canvas = createCanvas(width, height);
		const ctx = canvas.getContext('2d');

		// === BACKGROUND ===
		// Clean purple background
		ctx.fillStyle = '#450a75';
		ctx.fillRect(0, 0, width, height);

		// === LOGO ===
		const helperbirdLogo = await loadImage('./tools/images/helperbird-logo.png');
		const logoSize = 100;
		const logoX = (width - logoSize) / 2;
		const logoY = 120;
		ctx.drawImage(helperbirdLogo, logoX, logoY, logoSize, logoSize);

		// === TITLE ===
		ctx.font = "bold 42pt 'PT Sans'";
		ctx.textAlign = 'center';
		ctx.fillStyle = '#FFFFFF';

		const titleText = formatTitle(post.title);
		const titleStartY = logoY + logoSize + 80;
		const lineHeight = 58;

		ctx.fillText(titleText[0], width / 2, titleStartY);
		if (titleText[1]) {
			ctx.fillText(titleText[1], width / 2, titleStartY + lineHeight);
		}

		// === CATEGORY BADGE (only if available, below title) ===
		if (post.category) {
			ctx.font = "bold 16pt 'PT Sans'";
			const badgeText = post.category.toUpperCase();
			const badgeMetrics = ctx.measureText(badgeText);
			const badgePadding = 20;
			const badgeWidth = badgeMetrics.width + badgePadding * 2;
			const badgeHeight = 40;
			const badgeX = (width - badgeWidth) / 2;
			// Position badge below title (accounting for 1 or 2 lines)
			const badgeY = titleText[1] ? titleStartY + lineHeight + 30 : titleStartY + 30;

			// Badge background
			ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
			ctx.beginPath();
			ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, 20);
			ctx.fill();

			// Badge border
			ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
			ctx.lineWidth = 2;
			ctx.stroke();

			// Badge text
			ctx.fillStyle = '#E9D5FF';
			ctx.textAlign = 'center';
			ctx.fillText(badgeText, width / 2, badgeY + 28);
		}

		// === BOTTOM BAR ===
		// Subtle tagline
		ctx.font = "18pt 'PT Sans'";
		ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
		ctx.fillText('Accessibility & Productivity App', width / 2, height - 75);

		// Domain/URL at bottom
		ctx.font = "600 22pt 'PT Sans'";
		ctx.fillStyle = '#FFFFFF';
		ctx.fillText(post.domain, width / 2, height - 40);

		// Create output directory if it doesn't exist
		const outputDir = path.dirname(output);
		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir, { recursive: true });
		}

		// Write the output image
		const stream = fs.createWriteStream(output);
		stream.on('finish', () => console.log(`Image created at ${output}`));
		stream.on('error', (error) => console.error(`Error writing image: ${error}`));
		canvas.createPNGStream({ quality: 1.0 }).pipe(stream);
	} catch (e) {
		console.error(`Error processing file ${input}:`, e);
		throw e; // Reject in case of an error
	}
};

const manifest = {
	'main.js': '/assets/js/main.bundle.js',
	'main.css': '/assets/js/main.css'
};

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ 'src/assets/': '/assets/' });
	eleventyConfig.setWatchThrottleWaitTime(3000); // in milliseconds
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
			// Log error but don't fail the build - social image generation is non-critical
			console.error(`Social image generation failed for ${this.inputPath}:`, error.message);
			return content;
		}
	});
	eleventyConfig.addFilter('mtime', function (inputPath) {
		try {
			let stats = fs.statSync(inputPath);
			return stats.mtime; // JS Date object
		} catch (e) {
			return null;
		}
	});
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginPWA, {
		swDest: './docs/service-worker.js',
		cleanupOutdatedCaches: true,
		globDirectory: './docs'
	});
	eleventyConfig.addPlugin(svgContents);

	// add `date` filter
	eleventyConfig.addFilter('date', function (date2, dateFormat) {
		return format(date2, dateFormat);
	});

	// Random Filter: With the help from google search engine
	eleventyConfig.addFilter('shuffle', (arr) => lodash.shuffle(arr));

	eleventyConfig.addFilter('formatDateWithOrdinal', function (dateString) {
		try {
			const date2 = moment(dateString);
			const formattedDate = date2.format('MMMM Do, YYYY');

			return formattedDate;
		} catch (error) {
			console.error('Error formatting date:', error);
			return dateString; // Fallback to returning the original string
		}
	});

	let markdownIt = require('markdown-it');
	let markdownItClass = require('@toycode/markdown-it-class');
	let markdownItAnchor = require('markdown-it-anchor');
	let options = {
		html: true,
		breaks: false,
		linkify: true
	};

	const mapping = {
		h1: 'leading-relaxed font-display text-pretty text-3xl mb-8 font-bold text-gray-900',
		h2: 'leading-relaxed font-display text-pretty text-2xl mb-6 mt-12 font-semibold text-gray-800',
		h3: 'leading-relaxed font-display text-pretty text-xl mb-4 mt-10 font-semibold text-gray-700',
		h4: 'leading-relaxed font-display text-pretty text-lg mb-4 mt-8 font-semibold text-gray-600',
		p: 'leading-relaxed font-display mb-4 mt-4 text-pretty text-lg text-gray-900',
		strong: 'text-lg font-semibold text-pretty text-gray-800',
		bold: 'font-bold text-pretty text-gray-900',
		ul: 'list-disc list-inside mt-4 space-y-2 pl-6 text-pretty text-lg font-display ml-6 mb-8 text-gray-900',
		ol: 'list-decimal list-inside mt-4 space-y-2 pl-6 text-pretty text-lg font-display ml-6 mb-8 text-gray-900',
		li: 'mb-2 text-pretty text-lg font-display text-gray-900',
		table: 'table-auto w-full border-collapse border border-gray-300 text-pretty text-lg font-display text-gray-900 mt-4 mb-8',
		thead: 'bg-gray-100',
		th: 'border border-gray-300 px-4 py-2 text-pretty text-left text-gray-700 font-medium',
		tbody: '',
		tr: 'odd:bg-gray-50 even:bg-white',
		td: 'border border-gray-300 px-4 py-2 text-pretty text-gray-900',
		img: 'aspect-square rounded-3xl mb-8 border-gray-300 border-2',
		hr: 'divider divider-neutral my-10',
		a: 'text-lg text-pretty text-blue-500 hover:text-blue-700 underline underline-offset-2',
		iframe: 'w-full h-96 rounded-3xl shadow-lg my-10',
		blockquote: 'border-l-4 border-gray-300 pl-4 italic text-pretty text-gray-700 my-4',
		code: 'bg-gray-100 text-pretty text-gray-800 rounded p-2 text-sm font-mono',
		pre: 'bg-gray-100 p-4 rounded overflow-x-auto'
	};

	eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
		if (process.env.ELEVENTY_ENV === 'production' && outputPath.endsWith('.html')) {
			return htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});
		}
		return content;
	});
	eleventyConfig.setLibrary(
		'md',
		markdownIt(options).use(markdownItClass, mapping).use(markdownItAnchor, {
			permalink: false // or true if you want automatic anchor links
		})
	);

	eleventyConfig.addShortcode('youtubeEmbed', function (id) {
		return `
		<div class="mt-2 my-8 bg-stone-300 rounded-2xl aspect-w-16 aspect-h-9">
			<iframe id="videos" class="rounded-md shadow-2xl ring-1 ring-black/10" src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		</div>`;
	});

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
		markdownTemplateEngine: 'liquid',
		dir: {
			data: '../_data',
			includes: '../_includes',
			input: 'src/pages/',
			output: 'docs'
		}
	};
};
