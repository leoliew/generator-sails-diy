/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var DEPENDENCIES = [
  "grunt",
  "grunt-contrib-clean",
  "grunt-contrib-coffee",
  "grunt-contrib-concat",
  "grunt-contrib-copy",
  "grunt-contrib-cssmin",
  "grunt-contrib-jst",
  "grunt-contrib-less",
  "grunt-contrib-uglify",
  "grunt-contrib-watch",
  "grunt-sails-linker",
  "grunt-sync"
];

module.exports = function(){
  this.npmInstall(DEPENDENCIES, {save: true});
};
