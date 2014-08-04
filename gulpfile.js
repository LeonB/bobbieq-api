var gulp  = require('gulp'),
    shell = require('gulp-shell');

var paths = {
  go: '**.go',
};

gulp.task('build', shell.task([
  'go build',
]))

gulp.task('test', shell.task([
  'go test',
]))

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.go, ['test']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'test']);
