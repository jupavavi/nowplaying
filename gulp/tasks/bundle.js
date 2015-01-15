var gulp = require('gulp');

/**
 * Production build
 * - minified uglified js
 * - Use chunks of data
 * - Minified css
 * - Optimized images
 * - Configure html for chunks
 */
gulp.task('bundle', function() {
  gulp.start(['webpack', 'less', 'html']);
});

gulp.task('bundle:dev', function() {
  gulp.start(['webpack:dev', 'less:dev', 'html:dev']);
});