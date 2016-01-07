/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var DEPENDENCIES = [
  'sails-hook-cron'
];

module.exports = function(){
  this.npmInstall(DEPENDENCIES, {save: true});
};
