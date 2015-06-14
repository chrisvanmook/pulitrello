'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync');

module.exports = function (config) {

  gulp.task('bs-reload', function () {
    browserSync.reload();
  });

  /**
   * Start the develop environment
   */
  gulp.task('watch', ['sass'], function () {
    gulp.watch([config.src_dir + "scss/**/*.scss"], ['sass']);
    gulp.watch([config.src_dir + "/**/*.html"], ['bs-reload']);
    gulp.watch([config.src_dir + "/**/*.js"], ['bs-reload']);
  });
};
