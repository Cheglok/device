const {watch, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

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
};

exports.default = parallel(watchFiles, sync);
