const {watch, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

const sync = function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
};

const browserReload = function (cb) {
  browserSync.reload();
  cb();
}

const watchFiles = function () {
  watch('./**/*', browserReload);
};

exports.default = parallel(watchFiles, sync);
