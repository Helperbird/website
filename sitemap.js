const fs = require('fs');
const sm = require('sitemap');
const globby = require('globby');

async function createSitemap() {
	const listAllFilesAndDirs = (dir) => globby('docs/**/*.html');
	const result = await listAllFilesAndDirs(process.cwd());
	let arrayOfResult = result.map((x) =>
		x.replace('docs', 'https://www.helperbird.com').replace('.html', '').replace('index', '')
	);

	var sitemap = sm.buildSitemapIndex({
		hostname: 'https://www.helperbird.com',
		urls: arrayOfResult
	});
	fs.writeFileSync('./docs/sitemap.xml', sitemap.toString());
}

createSitemap();
