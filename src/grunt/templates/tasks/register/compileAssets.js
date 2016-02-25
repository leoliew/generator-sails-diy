module.exports = function (grunt) {
  //jst,coffee 模板编译目前没用到，注释
  grunt.registerTask('compileAssets', [
    'clean:dev',
    //'jst:dev',
    'less:dev',
    'copy:dev'
    //'coffee:dev'
  ]);
};
