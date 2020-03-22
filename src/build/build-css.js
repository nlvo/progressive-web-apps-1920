const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

return gulp.src([
	'./src/scss/main.scss'
])
	.pipe(sass())
	.pipe(cleanCSS())
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('./public/css'));