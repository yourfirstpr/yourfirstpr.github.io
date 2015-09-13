'use strict'

var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
  return gulp.src('assets/css/*.css')
    .pipe(minifyCss({compatability: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});