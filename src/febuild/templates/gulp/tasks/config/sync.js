/**
 * A grunt task to keep directories in sync. It is very similar to grunt-contrib-copy
 * but tries to copy only those files that has actually changed.
 *
 * ---------------------------------------------------------------
 *
 * Synchronize files from the `assets` folder to `.tmp/public`,
 * smashing anything that's already there.
 *
 * For usage docs see:
 * 		https://github.com/tomusdrw/grunt-sync
 *
 */
// module.exports = function(grunt) {
//
//   grunt.config.set('sync', {
//     dev: {
//       files: [{
//         cwd: './assets',
//         src: ['**/*.!(coffee)','**/*.!(less)'],
//         dest: '.tmp/public'
//       }]
//     }
//   });
//
// 	grunt.loadNpmTasks('grunt-sync');
// };

module.exports = function(gulp, plugins, growl) {
  gulp.task('sync', function() {
    return gulp.src(['./assets/**/*.!(less)', './assets/**/*.!(coffee)'])
      .pipe(plugins.changed('.tmp/public'))
      .pipe(gulp.dest('.tmp/public'))
      .pipe(plugins.if(growl, plugins.notify({ message: 'Sync task complete' })));
  });
};
