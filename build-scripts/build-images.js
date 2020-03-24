const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.src([
	'./src/img/**/*',
])
	.pipe(imagemin())
	.pipe(gulp.dest('public/img'));
