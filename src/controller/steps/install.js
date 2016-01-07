/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var DEPENDENCIES = {
  //search: ['lodash', 'bluebird']
};



module.exports = function(){
  var name = this['controller-name'].replace(/Controller/, '').toLowerCase();
  if (DEPENDENCIES[name]) {
    this.npmInstall(DEPENDENCIES[name], { save: true });
  }
};
