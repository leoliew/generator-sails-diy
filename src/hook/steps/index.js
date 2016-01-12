/**
 * Exports object that contains each of priority steps of yeoman run loop
 */

var initializingSteps = require('./initializing');
var promptingSteps = require('./prompting');
var configuringSteps = require('./configuring');
var defaultSteps = require('./default');
var writingSteps = require('./writing');
var conflictsSteps = require('./conflicts');
var installSteps = require('./install');
var endSteps = require('./end');

/**
 * The available priorities are (in order)
 * @type {{initializing: *, prompting: *, configuring: (*|exports|module.exports), default: *, writing: (*|exports|module.exports), conflicts: (*|exports|module.exports), install: *, end: *}}
 */
module.exports = {
  initializing: initializingSteps,
  prompting: promptingSteps,
  configuring: configuringSteps,
  default: defaultSteps,
  writing: writingSteps,
  conflicts: conflictsSteps,
  install: installSteps,
  end: endSteps
};
