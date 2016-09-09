// module.exports = function (grunt) {
//   grunt.config.set('uglify', {
//     dist: {
//       files: [
//         {
//           expand: true,
//           cwd: './assets',
//           src: ['**/*.js', '!**/bower_components/**', '!**/images/**', '!**/ueditor/**'],
//           dest: '.tmp/public/'
//         }
//       ]
//     }
//   });
//   grunt.loadNpmTasks('grunt-contrib-uglify');
// };

module.exports = function(gulp, plugins, growl) {

  gulp.task('uglify', function() {
    return gulp.src(['./assets/**/*.js', '!./assets/**/bower_components/**', '!./assets/**/images/**','!./assets/**/ueditor/**'])
      .pipe(
        plugins.cssmin()
      )
      .pipe(gulp.dest('.tmp/public/'));
  });
};
