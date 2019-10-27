

const del = require('del');
const gulp = require('gulp');
const hash = require('hash-files');
const glob = require('glob');
const jsesc = require('jsesc');
const rename = require('gulp-rename');
const replace = require('gulp-replace');



const stringify = value => {
  return jsesc(value, {
    wrap: true,
    compact: false,
    indentLevel: 3
  })
};

const shortHash = files => {
  return hash
    .sync({
      files
    })
    .slice(0, 8);
};



module.exports = {
  cache: function (cb) {
    const assets = [
      ...glob.sync('docs/assets/css/**/*.*'),
      ...glob.sync('docs/*.html'),
      ...glob.sync('docs/**/*.html'),
      ...glob.sync('docs/fonts/**/*.*'),
      ...glob.sync('docs/*.js'),
      ...glob.sync('docs/assets/images/**/*.png'),
      ...glob.sync('docs/assets/images/**/*.webp'),
      ...glob.sync('docs/assets/images/**/*.svg'),
      ...glob.sync('docs/assets/js/**/*.*')
    ];
    const assetsHash = shortHash(assets);
    const assetCacheList = [
      '/',
      ...assets
      // Remove all `images/icon-*` files except for the one used in
      // the HTML.
      .filter(
        path =>
        !path.includes('images/icon-') || path.includes('icon-228x228.png')
      )
      .map(path => path.replace(/^docs\//, '/'))
    ];

    gulp
      .src('./tasks/sw-template.js')
      .pipe(replace('`%HASH%`', stringify(assetsHash)))
      .pipe(replace('`%CACHE_LIST%`', stringify(assetCacheList)))
      .pipe(
        rename(path => {
          path.basename = assetsHash;
        })
      )
      .pipe(gulp.dest('docs/'));

    gulp
      .src('docs/**/*.html')
      .pipe(
        replace(
          /(<\/body>)/g,
          `<script>
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/${assetsHash}.js');
            }
          </script>$1`
        )
      )
      .pipe(gulp.dest('docs/'));
      del(['docs/service-worker.js']);
    cb();
  }
}