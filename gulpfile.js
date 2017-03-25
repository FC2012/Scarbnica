var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');



//---------task sass
gulp.task('sass', function() {      // 'sass' - name
  return gulp.src('app/sass/**/*.sass')
   .pipe(sass())
   .pipe(gulp.dest('app/css'))
   .pipe(browserSync.reload({stream: true}))

});

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'app'
    },
      notify: false
  })
})


//-----------task watch
gulp.task('watch', ['browser-sync','sass'], function() {
  // , ['browser-sync','sass'], - do before reload

  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
















