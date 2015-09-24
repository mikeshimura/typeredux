var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
var    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    browserify = require('browserify'),
    transform = require('vinyl-transform');

gulp.task('default', function() {
  return gulp.src('src/org/*.js')
    .pipe(named(function(file) {
      return file.relative.replace(/\.[^\.]+$/, '');
    }))
    .pipe(webpack({
  
      externals: 
       {
       "react": "React" ,
       "immutable":"Immutable",
       "sweetalert":"sweetAlert",
       "jquery":"$"
       } }
       
       ))
    .pipe(gulp.dest('dist/'));
});

