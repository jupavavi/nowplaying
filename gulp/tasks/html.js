var _ = require('underscore');
var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var routes = require('../utils/routes');
var config = require('../config');

var indexSrc = ['./src/templates/frame.hbs'];

gulp.task('html', function() {
  var timestamp = new Date().getTime();

  _.each(routes, function(route) {
    gulp.src(indexSrc)
      .pipe(handlebars({
        release: true,
        timestamp: timestamp,
        appName: config.prefix + route.name
      }))
      .pipe(rename('index' + '.html'))
      .pipe(gulp.dest('./'));
  });
});

gulp.task('html:dev', function() {
  var timestamp = new Date().getTime();

  _.each(routes, function(route) {
    gulp.src(indexSrc)
      .pipe(handlebars({
        timestamp: timestamp,
        appName: config.prefix + route.name
      }))
      .pipe(rename(route.name + '.html'))
      .pipe(gulp.dest('./dist/'));
  });

});