var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("Hooray!");
});

gulp.task('watch', function(){

	watch('./app/index.html', function() {
		gulp.start('html');
	})
})