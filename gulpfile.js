import gulp from 'gulp';
import image from 'gulp-image';

gulp.task('image', async () => {
	return new Promise(function (resolve, reject) {
		gulp
			.src('./src/assets/images/**/**')
			.pipe(
				image({
					pngquant: true,
					optipng: true,
					zopflipng: true,
					jpegRecompress: true,
					mozjpeg: true,
					gifsicle: true,
					svgo: true,
					concurrent: 10,
					quiet: false // defaults to false
				})
			)
			.pipe(gulp.dest('./src/assets/images/'));
		resolve();
	});
});

gulp.task('default', gulp.series('image'));
