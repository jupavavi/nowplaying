var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config');

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: config.port,
    livereload: false
  });
});