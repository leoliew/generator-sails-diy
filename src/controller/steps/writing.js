/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

var fs = require('fs');

var SOURCE_CONTROLLER = function(name) {
  result = name ? 'api/controllers/' + name + 'Controller.js' : 'Controller.js';
  return result;
};
var SOURCE_CONTROLLER_TEST = function(name) {
  result = name ? 'test/unit/controllers/' + name + 'Controller.test.js' : 'Controller.test.js';
  return result;
};

var DESTINATION_CONTROLLER = function(name) {
  result = 'api/controllers/' + name + 'Controller.js';
  return result;
};
var DESTINATION_CONTROLLER_TEST = function(name) {
  result = 'test/unit/controllers/' + name + 'Controller.test.js';
  return result;
};

module.exports = function(){
  var name = (this['controller-name'].charAt(0).toUpperCase() + this['controller-name'].slice(1)).replace(/Controller/, '');
  var isNew = this.options['new'];
  var isAll = !name || this.options['all'];

  if (isAll) {
    this.directory('api/controllers', 'api/controllers');
    this.directory('test/unit/controllers', 'test/unit/controllers');
  } else if (isNew) {
    this.template(SOURCE_CONTROLLER(), DESTINATION_CONTROLLER(name), { name: name });
    this.template(SOURCE_CONTROLLER_TEST(), DESTINATION_CONTROLLER_TEST(name), { name: name });
  } else {
    var controllerTemplate = fs.existsSync(this.templatePath(SOURCE_CONTROLLER(name))) ? SOURCE_CONTROLLER(name) : SOURCE_CONTROLLER();
    var testTemplate = fs.existsSync(this.templatePath(SOURCE_CONTROLLER_TEST(name))) ? SOURCE_CONTROLLER_TEST(name) : SOURCE_CONTROLLER_TEST();

    this.template(controllerTemplate, DESTINATION_CONTROLLER(name), { name: name });
    this.template(testTemplate, DESTINATION_CONTROLLER_TEST(name), { name: name });
  }
};
