const image = require('gulp-image');
const { task, src, dest } = require('gulp');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const imageminWebp = require('imagemin-webp');

function build(cb) {
	src('./src/assets/images/**/**')
		.pipe(
			image({
				pngquant: true,
				optipng: true,
				zopflipng: true,
				jpegRecompress: true,
				mozjpeg: true,
				guetzli: true,
				gifsicle: true,
				svgo: true,
				concurrent: 10,
				quiet: false // defaults to false
			})
		)
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({ quality: 90, progressive: true }),
				imagemin.optipng({ optimizationLevel: 6 }),
				imageminWebp({ quality: 50 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: true }]
				})
			])
		)
		.pipe(dest('./src/assets/images/'));
	cb();
}

function webm(cb) {
	src('./app/assets/images/**/*')
		.pipe(
			webp({
				lossless: true
			})
		)
		.pipe(dest('./test/assets/images/webp/'));
	cb();
}

exports.webm = webm;
exports.build = build;

exports.default = build;
