var gulp = require('gulp');
var concatFilenames = require('gulp-concat-filenames');

gulp.task('default', ['file-manifest']);

var concatFilenamesOptions = {
    root: './assets',
};

gulp.task('file-manifest', function() {
  gulp
  .src('./assets/*')
  .pipe(concatFilenames('asset-manifest.txt', concatFilenamesOptions))
  .pipe(gulp.dest('./js/'));
});