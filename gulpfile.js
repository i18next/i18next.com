var gulp = require('gulp');

gulp.task('copyBundle', function() {
   gulp.src('./public/*.{js,map}')
   .pipe(gulp.dest('./public/i18next.com'));
});

gulp.task('copyLocales', function() {
   gulp.src('./pages/translate/**/locales/**/*.json')
   .pipe(gulp.dest('./public/i18next.com/translate/'));
});

gulp.task('copyStatic', function() {
   gulp.src('./static/**/*')
   .pipe(gulp.dest('./public/'));
});


gulp.task('copy', ['copyBundle', 'copyLocales', 'copyStatic']);
