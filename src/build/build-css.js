const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

return gulp.src([
		'./src/scss/main.scss'
])
	.pipe(sass())
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('./public/css'));