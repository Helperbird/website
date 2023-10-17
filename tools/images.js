import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import path from 'path';

const assetsDirectory = './src/assets'; // Specify your assets directory
const outputDirectory = assetsDirectory; // The optimized images will overwrite the original ones

(async () => {
	try {
		await imagemin([path.join(assetsDirectory, '**/*.{jpg,jpeg,png,svg}')], {
			destination: outputDirectory + '/',
			plugins: [
				imageminJpegtran(),
				imageminPngquant({
					quality: [0.6, 0.8] // Adjust quality as needed
				})
			]
		});
		console.log('Images optimized and saved back to their respective locations');
	} catch (error) {
		console.error('Error during image optimization:', error);
	}
})();
