const image = require('gulp-image');
const { task, src, dest } = require('gulp');
const html2pug = require('gulp-html2pug');
const clean = require('gulp-clean');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');



function build(cb) {
	src('./app/assets/images/**/**')
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
				imagemin.mozjpeg({ quality: 100, progressive: true }),
				imagemin.optipng({ optimizationLevel: 10 }),
				imagemin.svgo({
					plugins: [ { removeViewBox: true }, { cleanupIDs: true } ]
				})
			])
		)
		.pipe(dest('./app/assets/images/'));
	cb();
}

function html(cb) {
	src('./app/templates/**/*.html')
		.pipe(html2pug(/* options for html2pug such as { fragment: true } */))
		.pipe(dest('./app/templates/'));
	cb();
}

function deleteHtml(cb) {
	src('./app/templates/**/*.html').pipe(clean());

	cb();
}

function webm(cb) {
	src('./app/assets/images/**/*')
		.pipe(
			webp({
				lossless: true
			})
		)
		.pipe(dest('./docs/assets/images/webp/'));
	cb();
}

exports.webm = webm;
exports.build = build;
exports.delete = deleteHtml;
exports.html = html;
exports.default = build;
