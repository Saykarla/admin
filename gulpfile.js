var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();


gulp.task('sass', async function(){
  return gulp.src('app/sass/*.sass')
    .pipe(sass())
    .pipe(concat('style.css')) 
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
  
});

gulp.task('browserSync', async function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })

})

gulp.task('watch', async function(){
	gulp.watch('app/sass/*.sass', gulp.series('sass')); 
})


gulp.task('default', gulp.parallel('browserSync', 'sass', 'watch'));


