'use strict';

module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('./source/style/**/*.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.uncss({
                html: ['build/**/*.html']
            }))
            .pipe($.gp.concatCss('main.css'))
            .pipe($.gp.csso())
            .pipe($.gp.cssUnit({
                type: 'px-to-rem',
                rootSize: 16
            }))
            .on('error', $.gp.notify.onError({
                title: 'Style'
            }))
            .pipe($.gp.autoprefixer({
                browsers: [
                    'last 3 version',
                    '> 1%',
                    'ie 8',
                    'ie 9',
                    'Opera 12.1'
                ]
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./build/assets/css'));
    });
}

