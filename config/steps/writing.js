/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */



module.exports = function(){
  this.directory('config', 'config');
  this.fs.copy(this.templatePath('LocalesReadme.md'),'config/locales/_README.md');
};
