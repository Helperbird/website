const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

// Define the source and destination paths
const paths = {
	images: {
		src: 'src/assets/**/*.{jpg,jpeg,png,svg}',
		dest: 'src/assets/'
	}
};

// Optimize images
function optimizeImages() {
	return gulp
		.src(paths.images.src)
		.pipe(
			imagemin([
				imagemin.mozjpeg({ quality: 75, progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
				})
			])
		)
		.pipe(gulp.dest(paths.images.dest));
}

// Watch for changes and optimize images
function watch() {
	gulp.watch(paths.images.src, optimizeImages);
}

// Define complex tasks
const build = gulp.series(optimizeImages);
const watchImages = gulp.series(build, watch);

// Export tasks
exports.optimizeImages = optimizeImages;
exports.watch = watchImages;
exports.default = build;
