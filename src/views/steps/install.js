/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var DEPENDENCIES = {
  ejs: ['ejs'],
  jade: ['jade']
};

module.exports = function(){
  var view_engine = this['views-engine'].toLowerCase();
  if(DEPENDENCIES[view_engine]){
    this.npmInstall(DEPENDENCIES[view_engine], {save: true});
  }
};
