// module.exports = function (grunt) {
//
// 	grunt.config.set('filerev', {
//
// 		dist: {
//       options: {
// 				algorithm: 'md5',
// 				length: 8,
// 				// process: function (basename, name, extension) {
// 				// 	return basename + '.' + extension + '?v=' + name;
// 				// }
// 			},
// 			files: [
// 				{
// 					src: ['.tmp/public/**/!(analytics).{js,css}', '!.tmp/public/ueditor/**']
// 				}
// 			]
// 		}
//
// 	});
//
// 	grunt.loadNpmTasks('grunt-filerev');
//
// };
module.exports = function(gulp, plugins, growl) {
  gulp.task('filerev', function() {
    var cssFilter = plugins.filter([".tmp/public/**/*.css", "!.tmp/public/styles/h-ui/**/*.css"], { restore: true });

    return gulp.src(['.tmp/public/**/!(analytics).{js,css}', '!.tmp/public/ueditor/**'])
            .pipe(cssFilter)
            .pipe(plugins.cssnano())
            .pipe(cssFilter.restore)
            .pipe(plugins.rev())
            .pipe(gulp.dest('.tmp/public'))
            .pipe(plugins.rev.manifest())
            .pipe(gulp.dest('.tmp/public'))

  })
}
