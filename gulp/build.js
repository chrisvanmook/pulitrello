
  'use strict';


var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del', 'run-sequence', 'concurrent-transform']
  });

module.exports = function (config) {

  /**
   * Remove build/ directory
   */
  gulp.task('pre-clean', function (cb) {
    plugins.del([
      config.build_dir + '/**/*'
    ], cb);
  });

  /**
   * Combine, minify and bump js/css
   */
  gulp.task('usemin', function () {
    return gulp.src(config.src_dir + '/index.html')
      .pipe(plugins.usemin({
        css: [
          plugins.autoprefixer(
            'last 2 version', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
          ),
          plugins.minifyCss(),
          plugins.header(config.banner),
          plugins.rev()
        ],
        html: [plugins.minifyHtml({empty: true, conditionals: true})],
        js_modernizr: [plugins.uglify(), plugins.header(config.banner), plugins.rev()],
        js_bundle: [plugins.ngAnnotate(), plugins.uglify(), plugins.header(config.banner), plugins.rev()]
      }))
      .pipe(gulp.dest(config.build_dir));
  });

  /**
   * Copy files to build directory
   */
  gulp.task('copy', function () {
    return gulp.src(config.globs.build, {base: config.src_dir})
      .pipe(gulp.dest(config.build_dir));
  });

  gulp.task('jshint', function () {
    return gulp.src(config.globs.js)
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'));
  });

  /**
   * - Bump version nr in needed files and tag in git
   * - Generate a build folder
   */
  gulp.task('build', function (callback) {
    plugins.runSequence(
        ['sass'],
        'pre-clean',
        ['usemin', 'copy'],
        callback);
  });
};
