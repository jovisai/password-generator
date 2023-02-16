const gulp = require("gulp");
const clean = require('gulp-clean');
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const minifyJs = require("gulp-minify");

gulp.task('clean-app', () => {
   return gulp.src('./dist/', {read: true, allowEmpty: true}).pipe(clean());
  });

gulp.task("minify-html", () => {
  return gulp
    .src("*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("minify-css", () => {
  return gulp
    .src("*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist"));
});

gulp.task("minify-js", function () {
  return gulp
    .src(["main.js"])
    .pipe(minifyJs({
        ext: {
            min: '.js' // Set the file extension for minified files to just .js
        },
        noSource: true // Don’t output a copy of the source file
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task('default', gulp.series('clean-app', 'minify-html', 'minify-js', 'minify-css'));