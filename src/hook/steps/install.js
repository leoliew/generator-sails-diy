/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var DEPENDENCIES = {
  count: ['lodash', 'pluralize'],
  pluralize: ['lodash']
};

module.exports = function(){
  var name = this['hook-name'].replace(/Hook/, '').toLowerCase();
  if (DEPENDENCIES[name]) {
    this.npmInstall(DEPENDENCIES[name], { save: true });
  }
};
