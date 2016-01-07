/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var DEPENDENCIES = [
  'ejs',
  'jade'
];

module.exports = function(){
  console.log("abc"+this['views-engine']);
  this.npmInstall(DEPENDENCIES, {save: true});
};
