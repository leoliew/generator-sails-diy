module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
    'clean:dev',
    'less:dev',
		'sync:dev'
	]);
};
