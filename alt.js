const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const directory = './src/pages/';

const processFilesInDirectory = (directory) => {
	fs.readdirSync(directory).forEach((filename) => {
		const filepath = path.join(directory, filename);
		const stats = fs.statSync(filepath);

		// If it is a directory, recursively go through it
		if (stats.isDirectory()) {
			return processFilesInDirectory(filepath);
		}

		// Otherwise, if it's a file ending in .vue, process it
		if (filename.endsWith('.liquid') || filename.endsWith('.html')) {
			const htmlContent = fs.readFileSync(filepath, 'utf-8');
			const $ = cheerio.load(htmlContent);
			const imgTags = $('img');

			imgTags.each((i, imgTag) => {
				const alt = $(imgTag).attr('alt');

				if (!alt) {
					console.log(`${filename}: Missing alt tag in image ${i + 1}: ${$(imgTag).toString()}`);
				}
			});
		}
	});
};

processFilesInDirectory(directory);
