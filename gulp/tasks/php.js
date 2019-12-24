module.exports = function() {

    $.gulp.task('php', function () {
        return $.gulp.src(['src/static/php/**/*.php'])
            .pipe($.gulp.dest('build/static/php/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}