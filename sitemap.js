const fs = require('fs');
const globby = require('globby');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

async function createSitemap() {
	const listAllFilesAndDirs = (dir) => globby('docs/**/*.html');
	const result = await listAllFilesAndDirs(process.cwd());
	let arrayOfResult = result.map((x) => {
		let newUrl = x.replace('docs', 'https://www.helperbird.com').replace('.html', '').replace('index', '');
		return {
			url: newUrl,
			changefreq: 'weekly',
			priority: 1.0
		};
	});

	// Create a stream to write to
	const stream = new SitemapStream({ hostname: 'https://www.helperbird.com' });

	// Return a promise that resolves with your XML string
	return streamToPromise(Readable.from(arrayOfResult).pipe(stream)).then((data) =>
		fs.writeFileSync('./docs/sitemap.xml', data.toString())
	);
}

createSitemap();
