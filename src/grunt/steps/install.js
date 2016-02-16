/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var DEPENDENCIES = [
  "grunt@0.4.2",
  "grunt-contrib-clean@~0.5.0",
  "grunt-contrib-coffee@~0.10.1",
  "grunt-contrib-concat@~0.3.0",
  "grunt-contrib-copy@~0.5.0",
  "grunt-contrib-cssmin@~0.9.0",
  "grunt-contrib-jst@~0.6.0",
  "grunt-contrib-less@0.11.1",
  "grunt-contrib-uglify@~0.4.0",
  "grunt-contrib-watch@^0.6.0",
  "grunt-sails-linker@~0.9.5",
  "grunt-sync@~0.0.4"
];

module.exports = function(){
  this.npmInstall(DEPENDENCIES, {save: true});
};
