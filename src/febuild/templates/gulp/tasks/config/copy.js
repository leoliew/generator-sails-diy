/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
// module.exports = function (grunt) {
//
//   grunt.config.set('copy', {
//     dev: {
//       files: [
//         {
//           expand: true,
//           cwd: './assets',
//           src: ['**/*.!(less)', '!**/bower_components/**'],
//           dest: '.tmp/public'
//         }
//       ]
//     }
//   });
//
//   grunt.loadNpmTasks('grunt-contrib-copy');
// };

module.exports = function(gulp, plugins, growl) {
  gulp.task('copy', function() {
    return gulp.src(['./assets/**/*.!(less)', '!**/bower_components/**'])
      .pipe(gulp.dest('.tmp/public'))
      .pipe(plugins.if(growl, plugins.notify({ message: 'Copy dev task complete' })));
  });
};
