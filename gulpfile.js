var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('build', function(){
    return gulp.src('entry.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest('public/'));
});

gulp.task('dev', function(){
    webpackConfig.watch = true;

    return gulp.src('entry.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest('public/'));
});

gulp.task('default', ['build']);