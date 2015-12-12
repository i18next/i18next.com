var gulp = require('gulp');

// gulp.task('copyBundleIfNoDomain', function() {
//    gulp.src('./public/*.{js,map}')
//    .pipe(gulp.dest('./public/i18next.com'));
// });
//
// gulp.task('copyLocalesIfNoDomain', function() {
//    gulp.src('./pages/translate/**/locales/**/*.json')
//    .pipe(gulp.dest('./public/i18next.com/translate/'));
// });
//
// gulp.task('copyStaticIfNoDomain', function() {
//    gulp.src('./static/**/*')
//    .pipe(gulp.dest('./public/'));
// });
//

gulp.task('copyLocales', function() {
   gulp.src('./pages/translate/**/locales/**/*.json')
   .pipe(gulp.dest('./public/translate/'));
});

gulp.task('copyStatic', function() {
   gulp.src('./static/**/*')
   .pipe(gulp.dest('./public/'));
});


gulp.task('copy', ['copyLocales', 'copyStatic']);
