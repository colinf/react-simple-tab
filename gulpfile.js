var gulp = require('gulp');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var browserify = require('browserify');
var babelify = require('babelify');
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var p = require('path');

var path = {
  SRC: 'src/**',
  MIN_OUT: 'react-simple-tab.min.js',
  OUT: 'react-simple-tab.js',
  DEST: 'dist',
  DEST_LIB: 'lib',
  DEST_DIST: 'dist',
  ENTRY_POINT: './index.js'
};

gulp.task('out', function(){
  browserify(path.ENTRY_POINT)
    .transform(babelify)
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_DIST));
});

gulp.task('min', function(){
  gulp.src(p.join(path.DEST_DIST, path.OUT))
    .pipe(uglify())
    .pipe(rename(path.MIN_OUT))
    .pipe(gulp.dest(path.DEST_DIST));
});


gulp.task('build', function () {
  return gulp.src(path.SRC)
    .pipe(babel())
    .pipe(gulp.dest(path.DEST_LIB));
});

gulp.task('dist', ['out', 'min']);
gulp.task('default', ['build']);