var gulp = require('gulp'),
    /*sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),*/
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
	rename = require("gulp-rename");
    concat = require('gulp-concat'),
    //notify = require('gulp-notify'),
    //cache = require('gulp-cache'),
	tscript = require('gulp-typescript'),
    livereload = require('gulp-livereload');
    //del = require('del');

var tsPath = './type-src/*.ts',
	tsDest = './type-des';

/*gulp.task('default', function() {
	var tsResults = gulp.src(tsPath)
					.pipe(tscript({
						target: 'ES5',
						declarationFiles: false,
						noExternalResolve: true
					}));
	tsResults.dts.pipe(gulp.dest(tsPath + '/type-definitions'));
	return tsResults.js.pipe(gulp.dest(tsDest));
});*/

gulp.task('default', function() {
	var tsResults = gulp.src(tsPath)
					.pipe(tscript({
						target: 'ES5',
						declarationFiles: false,
						noExternalResolve: true
					}))
					.pipe(rename("compiled.js"))
					.pipe(gulp.dest(tsDest));
	//tsResults.dts.pipe(gulp.dest(tsPath + '/type-definitions'));
	//return tsResults.js.pipe(gulp.dest(tsDest));
	return tsResults;
});

gulp.task('watch', function() {
	gulp.watch([tsPath], ['default']); //type es el nombre de la task anterior
});