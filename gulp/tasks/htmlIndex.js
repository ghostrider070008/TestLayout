module.exports = function() {

    $.gulp.task('htmlIndex', function () {
        return $.gulp.src(['src/static/html/index.html'])
            .pipe($.gulp.dest('build'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}