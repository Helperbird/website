const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const directory = './src/pages/';

fs.readdirSync(directory).forEach((filename) => {
	if (filename.endsWith('.html')) {
		const filepath = path.join(directory, filename);
		const htmlContent = fs.readFileSync(filepath, 'utf-8');

		const $ = cheerio.load(htmlContent);

		const imgTags = $('a');

		imgTags.each((i, imgTag) => {
			const alt = $(imgTag).attr('title');
			if (!alt) {
				console.log(`${filename}: Missing title tag in image ${i + 1}: ${$(imgTag).toString()}`);
			}
		});
	}
});
