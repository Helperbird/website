const image = require('gulp-image');
const { task,  src,
    dest } = require('gulp');

function build(cb) {
  src('./app/assets/images/**/*.*')
    .pipe(image({
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
      }))
        .pipe(dest('./app/assets/images/'));
  cb();
}

exports.build = build;
exports.default = build;