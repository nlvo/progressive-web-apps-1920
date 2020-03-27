const gulp = require('gulp');
const minify = require('gulp-minify');

gulp.src([
	'./src/js/main.js',
])
	.pipe(minify({ noSource: true }))
	.pipe(gulp.dest('./public/js'));
