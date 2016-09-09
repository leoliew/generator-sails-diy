// module.exports = function (grunt) {
//   grunt.registerTask('default', ['compileAssets',  'watch']);
// };
module.exports = function (gulp, plugins) {
  gulp.task('default', function(cb) {
    plugins.sequence(
      'compileAssets',
      'watcher',
      cb
    );
  });
};
