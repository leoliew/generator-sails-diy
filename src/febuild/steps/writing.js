/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

module.exports = function(){
  var febuild = this['febuild'].toLowerCase();
  if(febuild == 'grunt'){
    this.directory('grunt/tasks', 'tasks');
    this.fs.copy(this.templatePath('grunt/Gruntfile.js'),'Gruntfile.js');
  }else if(febuild == 'gulp') {
    this.directory('gulp/tasks', 'tasks');
    this.fs.copy(this.templatePath('gulp/gulpfile.js'),'gulpfile.js');
  }
};
