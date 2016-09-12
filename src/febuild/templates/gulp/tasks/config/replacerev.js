module.exports = function(gulp, plugins, growl) {
  gulp.task('replacerev', function() {
    var manifest = gulp.src("./.tmp/public/rev-manifest.json");
    return gulp.src('./views/**/*.ejs')
      .pipe(plugins.revReplace({manifest: manifest,replaceInExtensions: '.ejs'}))
      .pipe(gulp.dest('./views/'))
  })
}
