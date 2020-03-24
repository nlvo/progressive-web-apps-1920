const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');


gulp.src([
	'./src/scss/main.scss',
])
	.pipe(sass())
	.pipe(cleanCSS())
	.pipe(rename('style.min.css'))
	// .pipe(rev())
	.pipe(gulp.dest('./public/css'));
