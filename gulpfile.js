'use strict';

var gulp = require('gulp'),
    refresh = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    _ = require('lodash'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    webpack = require('gulp-webpack');

var paths = {
  gulp: 'gulpfile.js',
  front: {
    html: ['app/**/*.html'],
    scripts: ['app/**/*.js'],
    styles: ['app/**/*.css']
  },
  back: ['server/**/*.js']
};

gulp.task('webpack', ['jshint', 'jscs'], function() {
  return gulp.src('./app/script')
    .pipe(webpack({
      entry: {filename: './app/script'},
      output: {filename: 'bundle.js'}
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(refresh());
});

gulp.task('jshint', function() {
  return gulp.src(_.flatten([paths.gulp, paths.front.scripts, paths.back]))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function() {
  return gulp.src(_.flatten([paths.gulp, paths.front.scripts, paths.back]))
    .pipe(jscs())
    .pipe(jscs.reporter());
});

gulp.task('copy', function() {
  return gulp.src(['app/index.html', 'app/stylesheet.css'])
    .pipe(gulp.dest('./dist/'))
    .pipe(refresh());
});

gulp.task('serve', function() {
  nodemon({
    script: 'server/server.js',
    watch: ['server.js']
  });
});

gulp.task('watch', function() {
  refresh.listen();
  gulp.watch([paths.front.html, paths.front.styles], ['copy']);
  gulp.watch(paths.front.scripts, ['webpack']);
});

gulp.task('build', ['webpack', 'copy']);
gulp.task('default', ['build', 'serve', 'watch']);
