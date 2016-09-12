/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var DEPENDENCIES = {
  grunt: [
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
  ],
  gulp: [
    "gulp@^3.8.7",
    "gulp-cache@^0.4.1",
    "gulp-changed@1.3.0",
    "gulp-clean@^0.3.1",
    "gulp-if@^1.2.4",
    "gulp-less@^3.1.0",
    "gulp-livereload@^3.8.1",
    "gulp-load-plugins@^0.6.0",
    "gulp-notify@^1.4.2",
    "gulp-rename@^1.2.2",
    "gulp-rev-replace@^0.4.3",
    "gulp-rimraf@^0.2.0",
    "gulp-uglify@^1.0.1",
    "gulp-util@^3.0.0",
    "gulp-csso@^2.0.0",
    "gulp-filter@^4.0.0",
    "gulp-rev@^7.1.2",
    "rimraf@^2.5.1",
    "run-sequence@^1.1.5",
    "sails-hook-gulptask@1.0.2"
  ]
};

module.exports = function(){
  var febuild = this['febuild'].toLowerCase();
  if(DEPENDENCIES[febuild]){
    this.npmInstall(DEPENDENCIES[febuild], {save: true});
  }
};
