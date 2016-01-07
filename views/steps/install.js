/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var DEPENDENCIES = [
  'ejs',
  'jade'
];

module.exports = function(){
  this.npmInstall(DEPENDENCIES, {save: true});
};
