var gulp = require('gulp');
var concatFilenames = require('gulp-concat-filenames');
var uglify = require('gulp-uglify');

gulp.task('default', ['file-manifest', 'uglify-js']);

var concatFilenamesOptions = {
    root: './assets',
};

gulp.task('file-manifest', function() {
  gulp
  .src('./assets/*')
  .pipe(concatFilenames('asset-manifest.txt', concatFilenamesOptions))
  .pipe(gulp.dest('./js/'));
});

gulp.task('uglify-js', function() {
	gulp
	.src('./js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./js/minified/'));
});