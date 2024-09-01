const lodash = require('lodash');
const htmlmin = require('html-minifier');
const svgContents = require('eleventy-plugin-svg-contents');
const pluginPWA = require('./tools/eleventy-plugin-pwa');
const fs = require('fs');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const path = require('path');
const { format, parseISO } = require('date-fns');
const moment = require('moment');
const { createCanvas, loadImage } = require('canvas');
const { formatTitle } = require('./tools/format-title');

const createSocialImageForArticle = async (input, output) => {
    try {
        // Check if the output image already exists
        if (fs.existsSync(output)) {
            return;
        }

        // Read data from the input file
        const data = fs.readFileSync(input, { encoding: 'utf-8' });

        // Get title from file data
        const [, title] = data.match(/cardTitle:(.*)/);

        const post = {
            title: title.trim(),
            author: 'Helperbird',
            tagline: 'Accessibility & Productivity App' // You can customize or remove this as needed
        };

        const width = 1200;
        const height = 627;

        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');

        const helperbirdLogo = await loadImage('./tools/images/helperbird-logo.png');

        // Background
        context.fillStyle = '#450a75';
        context.fillRect(0, 0, width, height);

        // Calculate logo position centered horizontally above the title
        const logoWidth = 100;
        const logoHeight = 100;
        const logoX = (width - logoWidth) / 2;
        const logoY = 150;

        // Draw Helperbird Logo
        context.drawImage(helperbirdLogo, logoX, logoY, logoWidth, logoHeight);

        // Title Styling and Positioning
        context.font = "bold 40pt 'PT Sans'";
        context.textAlign = 'center';
        context.fillStyle = '#ffffff';

        const titleText = formatTitle(post.title);
        const titleX = width / 2;
        const titleY = logoY + logoHeight + 75; // Below the logo
        context.fillText(titleText[0], titleX, titleY);
        if (titleText[1]) {
            context.fillText(titleText[1], titleX, titleY + 50);
        }

        // Author and Tagline at the Bottom Center
        context.font = "25pt 'PT Sans'";
        const authorText = `${post.author} - ${post.tagline}`;
        context.fillText(authorText, width / 2, height - 50);

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
			const [, title2] = data.match(/title:(.*)/);
		}
	});
    eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(pluginPWA, {
		swDest: './docs/service-worker.js',
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
		console.log(dateString);
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
	
			h1: 'leading-relaxed font-display text-3xl mb-8 font-bold text-gray-900',
			h2: 'leading-relaxed font-display text-2xl mb-6 mt-12 font-semibold text-gray-800',
			h3: 'leading-relaxed font-display text-xl mb-4 mt-10 font-semibold text-gray-700',
			h4: 'leading-relaxed font-display text-lg mb-4 mt-8 font-semibold text-gray-600',
			p: 'leading-relaxed font-display mb-4 mt-4 text-lg text-gray-900',
			strong: 'text-lg font-semibold text-gray-800',
			bold: 'font-bold text-gray-900',
			ul: "leading-relaxed list-disc list-inside mt-4 space-y-2 pl-6 text-lg font-display ml-6 mb-8 text-gray-900",
			ol: "leading-relaxed list-decimal list-inside mt-4 space-y-2 pl-6 text-lg font-display ml-6 mb-8 text-gray-900",
			li: "leading-relaxed mb-2 text-lg font-display text-gray-900 flex items-center",
		  
			img: 'aspect-square rounded-2xl mb-8 shadow-lg',
			hr: 'divider divider-neutral my-10',
			a: 'leading-relaxed font-sans text-lg text-blue-500 hover:text-blue-700 underline',
			iframe: 'w-full h-96 rounded-xl shadow-lg my-10',
			blockquote: 'border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4',
			code: 'bg-gray-100 text-gray-800 rounded p-2 text-sm font-mono',
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
	eleventyConfig.setLibrary('md', markdownIt(options).use(markdownItClass, mapping)
	.use(markdownItAnchor, {
        permalink: false // or true if you want automatic anchor links
    })
);

	eleventyConfig.addShortcode("youtubeEmbed", function(id) {
		return `
		<div class="mt-2 mb-8 bg-stone-200 rounded-2xl aspect-w-16 aspect-h-9">
			<iframe id="videos" class="rounded-md shadow-2xl ring-1 ring-gray-900/10" src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
