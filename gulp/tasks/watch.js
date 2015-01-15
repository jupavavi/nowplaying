var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js', './src/**/*.hbs'], ['webpack:dev']);
  gulp.watch(['./src/**/*.less'], ['less:dev']);
});