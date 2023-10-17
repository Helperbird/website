import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

import path from 'path';

const assetsDirectory = './src/assets'; // Change this to your assets directory
const outputDirectory = path.join(assetsDirectory, 'optimized');

(async () => {
	await imagemin([path.join(assetsDirectory, '**/*.{jpg,jpeg,png,svg}')], {
		destination: outputDirectory,
		plugins: [
			imageminJpegtran(),
			imageminPngquant({
				quality: [0.6, 0.8] // Adjust quality as needed
			})
	
		]
	});

	console.log('Images optimized and saved to', outputDirectory);
})();
