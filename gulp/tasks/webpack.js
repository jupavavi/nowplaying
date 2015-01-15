var _ = require('underscore');
var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var webpackConfig = require('../../webpack.config.js');

gulp.task('webpack', function() {
  var wpConfig = _.clone(webpackConfig),
    uglify = new webpack.optimize.UglifyJsPlugin({ minimize: true });

  // Compress the Bundle File
  wpConfig.plugins.push(uglify);

  // Update the output path
  wpConfig.output.path = '/build';

  return gulpWebpack(wpConfig)
    .pipe(gulp.dest('build/js'));
});


gulp.task('webpack:dev', function() {
  var wpConfig = _.defaults(webpackConfig, {
    devtool: 'sourcemap',
    debug: true
  });

  return gulpWebpack(wpConfig)
    .pipe(gulp.dest('dist/js'));
});