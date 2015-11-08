'use strict';

var gulp = require('gulp'),
    _ = require('lodash'),
    // jshint = require('gulp-jshint'),
    // jscs = require('gulp-jscs'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    webpack = require('webpack');

var paths = {
  front: ['app/**/*.js'],
  back: []
};

gulp.task('webpack', function(cb) {
  webpack({
    entry: './app/script',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    }
  }, cb);
});

gulp.task('copy', function() {
  return gulp.src(['app/index.html', 'app/stylesheet.css'])
    .pipe(gulp.dest('dist'));
});

gulp.task('reload', function() {
  console.log('reloading');
  livereload();
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('dist', ['reload']);
});

gulp.task('server', function() {
  nodemon({
    script: 'index.js',
    ext: 'js html',
    watch: ['app', 'index.js', 'gulpfile.js']
  }).on('change', ['build', 'watch']);
});

gulp.task('build', ['webpack', 'copy']);
gulp.task('default', ['build', 'server']);
