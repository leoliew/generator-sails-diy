// module.exports = function (grunt) {
// 	grunt.registerTask('compileAssets', [
// 		'clean:dev',
// 		'copy:dev',
// 		'less:dev',
// 		// 'cssmin',
// 		// 'uglify',
// 	]);
// };

module.exports = function (gulp, plugins) {
  gulp.task('compileAssets', function(cb) {
    plugins.sequence(
      'clean',
      'less',
      'copy',
      cb
    );
  });
}
