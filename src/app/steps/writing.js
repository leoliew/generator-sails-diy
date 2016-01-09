/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

module.exports = function(){
  this.directory('test', 'test');
  this.directory('api', 'api');
  this.copy('app.js', 'app.js');
  //this.copy('Dockerfile', 'Dockerfile');
  this.copy('editorconfig', '.editorconfig');
  this.copy('esdoc.json', 'esdoc.json');
  this.copy('gitignore', '.gitignore');
  this.copy('package.json', 'package.json');
  this.copy('README.md', 'README.md');
  this.copy('sailsrc', '.sailsrc');
};
