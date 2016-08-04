/**
 * gulp 基于流操作
 * 
 */
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('es6', function () {
    gulp.src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

/**
 * 添加监控任务
 */
gulp.task('watch', function() {
    gulp.watch('src/*.js', ['es6']);
});


/**
 * 入口任务
 */
gulp.task('build', ['es6', 'watch']);