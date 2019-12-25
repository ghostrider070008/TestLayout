module.exports = function() {

    $.gulp.task('html', function () {
        return $.gulp.src(['src/static/html/*'])
            .pipe($.gulp.dest('build/static/html/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
    
    $.gulp.task('html:Index', function () {
        return $.gulp.src(['src/html/index.html'])
            .pipe($.gulp.dest('build'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}