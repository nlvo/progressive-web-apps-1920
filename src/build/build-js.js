const gulp = require('gulp');
const rename = require('gulp-rename');
const minify = require('gulp-minify');

return gulp.src([
	'./src/js/main.js'
])
.pipe(minify({noSource: true}))
.pipe(rename('main.min.js'))
.pipe(gulp.dest('./public/js'));
