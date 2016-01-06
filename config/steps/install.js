/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var DEPENDENCIES = [
  'sails-disk',
  'sails-memory'
];



module.exports = function(){
  var adapter = ('sails-'+ this.options['database-adapter']).toLowerCase();
  this.npmInstall(DEPENDENCIES.concat([adapter]), {save: true});
};
