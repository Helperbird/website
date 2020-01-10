const {
  src,
  dest,
  series
} = require('gulp');
const pug = require('gulp-pug');
const minifyCSS = require('gulp-csso');
const image = require('gulp-image');
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");
const sitemapGulp = require('gulp-sitemap');
const minify = require('gulp-minify');
const webp = require('gulp-webp');
const svgmin = require('gulp-svgmin');
const TASKS = require('./tasks/service-worker.js');
const path = require('path');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
function html(cb) {
  src([
      'app/**/*.pug',
      '!app/components/*.pug',
      '!app/includes/*.pug'
    ])
    .pipe(pug({
      
    }))
    .pipe(dest('docs/'));
  cb();
}

function svgs(cb) {
  src([
      'app/includes/svgs/**/*.svg',
      '!app/includes/*.pug'
    ])
    .pipe(svgmin(function getOptions(file) {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      var random = Math.floor((Math.random() * 100) + 20) ;
      return {
        plugins: [{
            cleanupIDs: {
              prefix:  Math.floor((Math.random() * 100) + 20) + '-03' + prefix + '-03' + Math.floor((Math.random() * 100) + 1),
              minify: true
            }
          }
        ]
      }
    }))
    .pipe(dest('app/includes/svgs/'));
  cb();
}



function css_website(cb) {
  src([
    'app/assets/css/toastr.css',
    'app/assets/css/bootstrap.css',
    'app/assets/css/website.css',
  ])
    .pipe(minifyCSS())
    .pipe(concat('website.css'))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(dest('app/includes/css/'));
  cb();
}




function javascript(cb) {
  src(  
  [
    'app/assets/js/jquery.js',
    'app/assets/js/slim.js',
    'app/assets/js/toastr.js',
    'app/assets/js/bootstrap.js',
    'app/assets/js/a-stripe.js',
    'app/assets/js/features.js',
    'app/assets/js/plans.js',
    'app/assets/js/site.js',
    'app/assets/js/slider.js',
    'app/assets/js/third-party.js',
    'app/assets/js/youtube.js',
  ])

  .pipe(concat('site.js'))
  .pipe(dest('docs/assets/js'));
  cb();
}

function images_png(cb) {
  src('app/assets/images/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      })
    ]))
    .pipe(dest('docs/assets/images/'));
  cb();
}

function images_png_windows(cb) {
  src('app/assets/images/**/*.*')
    .pipe(dest('docs/assets/images/'));
  cb();
}

function images_windows(cb) {
  src('app/assets/images/**/*.*')
    .pipe(webp())
    .pipe(dest('docs/assets/images/'));
  cb();
}


function images(cb) {
  src('app/assets/images/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
    ]))
    .pipe(webp())
    .pipe(dest('docs/assets/images/'));
  cb();
}

function fonts(cb) {
  src('app/assets/fonts/**/*.*')
    .pipe(dest('docs/assets/fonts/'));
  cb();
}

function move(cb) {
  src('app/assets/seo/**/*')
    .pipe(image())
    .pipe(dest('docs/'));
  cb();
}


function sitemaps(cb) {
  src('docs/**/*.html', {
      read: true
    })
    .pipe(sitemapGulp({
      siteUrl: 'https://www.helperbird.com'
    }))
    .pipe(dest('./docs'));
  cb();
}




exports.fonts = fonts;
exports.javascript = javascript;
exports.sitemaps = sitemaps;
exports.images = images;
exports.images_png = images_png;
exports.move = move;
exports.svgs = svgs;
exports.css_website = css_website;
exports.html = html;
let cache = TASKS.cache;
exports.cache = TASKS.cache;
exports.default = series(css_website, svgs, html, images, images_png, move, javascript, fonts, sitemaps);
exports.windows = series(css_website, svgs, html, images_windows, images_png_windows, move, javascript, fonts, sitemaps);