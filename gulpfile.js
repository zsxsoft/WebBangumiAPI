/* global require */
var gulp = require('gulp');
var ts = require('gulp-typescript');

// Grab settings from tsconfig.json
var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function() {
    var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('./'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./**/*.ts', ['build']);
  gulp.watch('./**/*.tsx', ['build']);
});

gulp.task('default', ['build']);