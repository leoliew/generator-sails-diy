/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

var SOURCE_CRON = 'config/views.template';
var DESTINATION_CRON = 'config/views.js';

module.exports = function(){
  var view_engine = this['views-engine'].toLowerCase();
  this.template(SOURCE_CRON, DESTINATION_CRON, {'view_engine':view_engine});
};
