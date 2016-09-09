/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
// module.exports = function(grunt) {
//
// 	grunt.config.set('watch', {
// 		assets: {
//
// 			// Assets to watch:
// 			files: ['assets/js/**/*', 'assets/styles/**/*', 'assets/themes/**/*', 'tasks/pipeline.js', '!**/node_modules/**'],
//
// 			// When assets are changed:
// 			tasks: ['syncAssets']
// 		}
// 	});
//
// 	grunt.loadNpmTasks('grunt-contrib-watch');
// };

module.exports = function(gulp, plugins, growl) {
  plugins.livereload.listen();

  // Watch API files
  // NOTE This watcher is set-up by the sails-hook-autoreload NPM package

  // Watch assets
  gulp.task('watcher', function() {
    gulp.watch(['assets/js/**/*', 'assets/styles/**/*', 'assets/themes/**/*', 'tasks/pipeline.js', '!**/node_modules/**'], ['syncAssets']);
  });
};
