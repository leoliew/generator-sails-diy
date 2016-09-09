// module.exports = function (grunt) {
// 	grunt.registerTask('syncAssets', [
//     'clean:dev',
//     'less:dev',
// 		'sync:dev'
// 	]);
// };

module.exports = function (gulp, plugins) {
  gulp.task('syncAssets', function(cb) {
    plugins.sequence(
			'compileAssets',
      cb
    );
  });
};
