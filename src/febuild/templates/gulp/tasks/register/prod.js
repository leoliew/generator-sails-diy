// module.exports = function (grunt) {
// 	grunt.registerTask('prod', [
// 		'compileAssets',
// 		'filerev',
// 		'usemin'
// 	]);
// };

module.exports = function (gulp, plugins) {
  gulp.task('prod', function(cb) {
    plugins.sequence(
			'compileAssets',
      'filerev',
      'replacerev',
      cb
    );
  });
};
