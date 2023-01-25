const {src, dest, watch, parallel, series} = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

const css_style = function () {
  return src('./scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('./css/'))
    .pipe(cleanCSS())
    .pipe(rename({extname: '.min.css'}))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('./css/'))
    .pipe(browserSync.stream());
};

const sync = function (cb) {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  cb();
};

const browserReload = function (cb) {
  browserSync.reload();
  cb();
}

const watchFiles = function () {
  watch('./**/*', browserReload);
  // watch('./scss/**/*', css_style);
};

// exports.default = series(css_style, parallel(watchFiles, sync));
exports.default = parallel(watchFiles, sync);
