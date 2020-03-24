require('./build-images');
require('./build-css');
require('./build-js');
const gulp = require('gulp');

gulp.src([
	'./src/*',
])
	.pipe(gulp.dest('./public/'));
