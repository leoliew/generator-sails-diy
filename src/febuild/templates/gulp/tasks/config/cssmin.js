// module.exports = function (grunt) {
//   grunt.config.set('cssmin', {
//     dist: {
//       files: [
//         {
//           expand: true,
//           cwd: './assets',
//           src: ['plugins/**/*.css', 'styles/**/*.css', 'themes/**/*.css'],
//           dest: '.tmp/public/'
//         }
//       ]
//     }
//   });
//   grunt.loadNpmTasks('grunt-contrib-cssmin');
// };

module.exports = function(gulp, plugins, growl) {

  gulp.task('cssmin', function() {
    return gulp.src(['./assets/plugins/**/*.css', './assets/styles/**/*.css', './assets/themes/**/*.css'])
      .pipe(
        plugins.cssmin()
      )
      .pipe(gulp.dest('.tmp/public/'));
  });
};
