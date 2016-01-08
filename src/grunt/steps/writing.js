/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

var SOURCE_CRON = 'tasks';
var DESTINATION_CRON = 'tasks';
var SOURCE_GRUNT_FILE = 'Gruntfile.js';
var DESTINATION_GRUNT_FILE = 'Gruntfile.js';

module.exports = function(){
  this.directory(SOURCE_CRON, DESTINATION_CRON);
  this.template(SOURCE_GRUNT_FILE,DESTINATION_GRUNT_FILE);
};
