/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

var SOURCE_CRON = 'cron.template';
var DESTINATION_CRON = 'config/cron.js';

module.exports = function(){
  var jobs = this['cron-jobs'];
  //this.template(SOURCE_CRON, DESTINATION_CRON, {'jobs':jobs});
};
