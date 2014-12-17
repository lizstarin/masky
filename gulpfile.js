var gulp = require('gulp');
var concatFilenames = require('gulp-concat-filenames');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', ['file-manifest', 'concat', 'uglify-js']);

var concatFilenamesOptions = {
    root: './assets',
};

gulp.task('file-manifest', function() {
	gulp
	.src('./assets/*')
	.pipe(concatFilenames('asset-manifest.txt', concatFilenamesOptions))
	.pipe(gulp.dest('./js/'));
});

gulp.task('concat', function() {
	gulp
	.src(['./js/p5.min.js', './js/p5.dom.js', './js/clmtrackr.js', './js/model_pca_20_svm.js', './js/camera_input.js', './js/coordinates.js', './js/face_components.js', './js/gestures.js', './js/face_drawing.js', './js/main.js'])
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./js/'));
});

gulp.task('uglify-js', function() {
	gulp
	.src('./js/all.js')
	.pipe(uglify())
	.pipe(gulp.dest('./js/min'));
});