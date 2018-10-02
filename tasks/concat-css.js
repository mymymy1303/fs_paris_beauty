module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-css', function () {
		return gulp.src([
				'bower_components/font-awesome/css/font-awesome.min.css',
				'bower_components/mdi/css/materialdesignicons.min.css',
				'bower_components/animate.css/animate.min.css',
				'bower_components/lightgallery/dist/css/lightgallery.min.css',
				'bower_components/lightgallery/dist/css/lg-transitions.min.css',
				// OWL
				'bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
				'bower_components/owl.carousel/dist/assets/owl.theme.default.min.css',
			])
			.pipe($.concat('thuvien.css'))
			.pipe(gulp.dest('./dist/css'));
	});
};
