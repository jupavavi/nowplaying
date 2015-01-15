var gulp = require('gulp');

gulp.task('dev', ['clean'], function() {
  gulp.start(['bundle:dev', 'watch', 'connect']);
});