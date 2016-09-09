/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */
// module.exports = function(grunt) {
//
// 	grunt.config.set('clean', {
// 		dev: ['.tmp/**'],
// 		build: ['www']
// 	});
//
// 	grunt.loadNpmTasks('grunt-contrib-clean');
// };

var rimraf = require('rimraf');
module.exports = function(gulp, plugins, growl) {
  gulp.task('clean', function(cb) {
    return rimraf('.tmp/public', cb);
  });
  gulp.task('clean:build', function(cb) {
    return rimraf('www', cb);
  });
};
