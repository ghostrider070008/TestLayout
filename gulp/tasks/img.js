module.exports = function() {
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
            .pipe($.gulp.dest('build/static/img/'));
    });
    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('CqjLvgXDl5BbWSN9rdF7MqF1DGg8BnB0'))
            .pipe($.gulp.dest('build/static/img/'));
    });
}