'use strict';

module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
        $.gulp.watch('./source/images/**/*.*', $.gulp.series('img'));
        $.gulp.watch('./source/sprite/**/*.*', $.gulp.series('sprite:svg'));
    });
};