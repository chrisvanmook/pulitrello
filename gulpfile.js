(function () {
	/* global require, console */
  // generated on 2015-04-24 using generator-web-initium 0.1.0
	'use strict';

	var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

	/**
	 * Put all your configurations here!
	 */
	var config = {
 		src_dir: './app/', //your working directory
		build_dir: './dist/', // the build directory
    	main_favicon: './app/favicon.png',
		bower_dir: './src/bower_components/', // bower components, default in src directory, change .bowerrc file if changed
		url: 'http://127.0.0.1:8000',
		globs: { // glob patterns
			build: [
				'./app/views/**/*.html',
        './app/components/**/*.html'
			],
			js: ["./src/index.js", "!./src/js/bundle.js"]
		},
		banner: '/*! Build: ' + new Date().toString() + ' */\n'
	};

  require('./gulp/sass')(config);
  require('./gulp/build')(config);
  require('./gulp/watch')(config);
  require('./gulp/server')(config);

})();
