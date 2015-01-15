var _ = require('underscore');
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var routes = require('../utils/routes');

var PREFIX = 'nowplaying-';

/**
 * Builds the generator function for the lib tasks. Allows to pass the
 *   destination folder
 * @param  {String} distFolder
 * @return {Function}
 */
var libGenerator = function(folder, options) {
  return function() {
    var modules = './node_modules';

    // Move tha Fonts!
    gulp.src([
      modules + '/bootstrap/fonts/**/*',
      modules + '/flat-ui/fonts/**/*'
    ]).pipe(gulp.dest('./' + folder + '/fonts/'));

    // Move tha Libs!
    gulp.src('src/less/lib.less')
      .pipe(less(options))
      .pipe(gulp.dest('./' + folder + '/css/'));
  };
};

/**
 * Routes array for the needed less files. Uses the routes config file
 * @type {Array}
 */
var routesArray = _.map(routes, function(route) {

  var srcPath = 'src',
    src = [srcPath, route.entries.less];
  return src.join('/');
});

console.log(routesArray);

/**
 * Less Tasks
 */
gulp.task('less', function() {
  gulp.start(['less:lib', 'less:app']);
});

gulp.task('less:dev', function() {
  gulp.start(['less:dev:lib', 'less:dev:app']);
});

/**
 * Less Lib Tasks
 */
gulp.task('less:lib', libGenerator('build', { compress: true }));
gulp.task('less:dev:lib', libGenerator('dist'));

/**
 * Less App Tasks
 */
gulp.task('less:app', function() {
  var index = 0;

  gulp.src(routesArray)
    .pipe(less({ compress: true }))
    .pipe(rename(function(path) {
      var pathRoute = routes[index];
      path.basename = PREFIX + pathRoute.name;
      path.extname = '.css';
      index ++;
    }))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('less:dev:app', function() {
  var index = 0;

  gulp.src(routesArray)
    .pipe(less())
    .on('error', function(err){ console.log(err.message); })
    .pipe(rename(function(path) {
      var pathRoute = routes[index];
      path.basename = PREFIX + pathRoute.name;
      path.extname = '.css';
      index ++;
    }))
    .pipe(gulp.dest('./dist/css/'));
});