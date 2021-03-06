/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

var SOURCE_SRC = 'sailsrc';
var DESTINATION_SRC = '.sailsrc';

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
  var sails_config = {
    grunt: false,
    pm2:false
  };
  if(this.answers['grunt:enabled']){
    sails_config.grunt = true
  }
  if(this.answers['pm2:enabled']){
    sails_config.pm2 = true
  }
  this.template(SOURCE_SRC, DESTINATION_SRC, {'sails_config':sails_config});
};
