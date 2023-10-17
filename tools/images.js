import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import path from 'path';
import fs from 'fs';

const assetsDirectory = './src/assets';

const getDirectories = source =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const optimizeImagesInDirectory = async (directory) => {
  try {
    await imagemin([path.join(directory, '*.{jpg,jpeg,png,svg}')], {
      destination: directory,
      plugins: [
        imageminJpegtran(),
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ]
    });
    console.log(`Images optimized in ${directory}`);
  } catch (error) {
    console.error(`Error during image optimization in ${directory}:`, error);
  }
}

(async () => {
  // Optimize images in the root assets directory
  await optimizeImagesInDirectory(assetsDirectory);

  // Optimize images in subdirectories
  const subdirectories = getDirectories(assetsDirectory);
  for (const sub of subdirectories) {
    await optimizeImagesInDirectory(path.join(assetsDirectory, sub));
  }
})();
