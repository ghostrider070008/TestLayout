'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    svgmin:  require('gulp-svgmin' ),
    svgSprite: require('gulp-svg-sprite'),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskpath) {
    require(taskpath)();
});

$.gulp.task('default',$.gulp.series(
    $.gulp.parallel('pug','stylus', 'scripts:lib','scripts','img:dev','svg','fonts','php'),
    $.gulp.parallel('watch','serve')
));
$.gulp.task('build',$.gulp.series(
    $.gulp.parallel('clean'),
    $.gulp.parallel('pug','stylus', 'scripts:lib','scripts','img:build','svg','fonts','php'),
    $.gulp.parallel('watch','serve')
));

