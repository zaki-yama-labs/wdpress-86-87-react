var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  browserify('static/jsx/src/app.jsx', { debug: true })
    .transform(reactify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('static/jsx/dst'))
});

gulp.task('watch', function() {
  gulp.watch('static/jsx/src/*.jsx', ['browserify'])
});

gulp.task('default', ['browserify', 'watch']);
