'use strict';

module.exports = function () {
    $.gulp.task('img', function () {
        return $.gulp.src('./source/img/**/*.*')
            .pipe($.gp.imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 5,
                svgoPlugins: [{removeViewBox: false}],
                pngquant: [{quality: '65-70', speed: 5}]
            }))
            .pipe($.gulp.dest($.config.root + '/assets/img'))
    });
};

