module.exports = function (gulp, $, browserSync) {
	gulp.task('watch', function () {
		gulp.watch('./src/lib/**/*.sass', ['tao-sass']);
		gulp.watch('./src/lib/**/*.pug', ['tao-html']);
		gulp.watch('./src/lib/**/*.js', ['tao-html']);
		gulp.watch('./src/img/**/*.*', ['copy-img']);
		gulp.watch('./src/templates/**/*.pug', ['tao-html']);
		gulp.watch('./src/scripts/**/*.js', ['tao-js']);
		gulp.watch("./dist/**/*.*").on('change', browserSync.reload);
	});
};
