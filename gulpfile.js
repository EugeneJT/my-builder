'use strict';

global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js'),
        app: require('./gulp/paths/app.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    gp: require('gulp-load-plugins') (),
    browserSync: require('browser-sync').create()
};

$.path.task.forEach(function (taskPath) {
    require(taskPath) ();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug',
        'img',
        'copy:fonts',
        'sprite:svg',
        'js:process'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));








