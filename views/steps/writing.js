/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

var SOURCE_CRON = 'config/views.template';
var DESTINATION_CRON = 'config/views.js';

module.exports = function(){
  var view_engine = this['views-engine'].toLowerCase();
  this.template(SOURCE_CRON, DESTINATION_CRON, {'view_engine':view_engine});
  this.directory('assets', 'assets');
  if(view_engine == 'jade'){
    this.fs.copy(this.templatePath('views/403.ejs'),'views/403.ejs');
    this.fs.copy(this.templatePath('views/404.ejs'),'views/404.ejs');
    this.fs.copy(this.templatePath('views/500.ejs'),'views/500.ejs');
    this.fs.copy(this.templatePath('views/homepage.ejs'),'views/homepage.ejs');
    this.fs.copy(this.templatePath('views/layout.ejs'),'views/layout.ejs');
  }else if(view_engine == 'ejs') {
    this.fs.copy(this.templatePath('views/403.jade'),'views/403.jade');
    this.fs.copy(this.templatePath('views/404.jade'),'views/404.jade');
    this.fs.copy(this.templatePath('views/500.jade'),'views/500.jade');
    this.fs.copy(this.templatePath('views/homepage.jade'),'views/homepage.jade');
    this.fs.copy(this.templatePath('views/layout.jade'),'views/layout.jade');
  }
};
