/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

var fs = require('fs');


var SOURCE_HOOK = function(name) {
  result = name ? 'api/hooks/' + name + 'Hook.js' : 'Hook.js';
  return result;
};
var SOURCE_HOOK_TEST = function(name) {
  result = name ? 'test/unit/hooks/' + name + 'Hook.test.js' : 'Hook.test.js';
  return result;
};

var DESTINATION_HOOK = function(name) {
  result = 'api/hooks/' + name + 'Hook.js';
  return result;
};
var DESTINATION_HOOK_TEST = function(name) {
  result = 'test/unit/hooks/' + name + 'Hook.test.js';
  return result;
};

module.exports = function(){
  var name = (this['hook-name'].charAt(0).toUpperCase() + this['hook-name'].slice(1)).replace(/Hook/, '');
  var isNew = this.options['new'];
  var isAll = !name || this.options['all'];

  if (isAll) {
    this.directory('api/hooks', 'api/hooks');
    this.directory('test/unit/hooks', 'test/unit/hooks');
  } else if (isNew) {
    this.template(SOURCE_HOOK(), DESTINATION_HOOK(name), { name: name });
    this.template(SOURCE_HOOK_TEST(), DESTINATION_HOOK_TEST(name), { name: name });
  } else {
    var hookTemplate = fs.existsSync(this.templatePath(SOURCE_HOOK(name))) ? SOURCE_HOOK(name) : SOURCE_HOOK();
    var testTemplate = fs.existsSync(this.templatePath(SOURCE_HOOK_TEST(name))) ? SOURCE_HOOK_TEST(name) : SOURCE_HOOK_TEST();

    this.template(hookTemplate, DESTINATION_HOOK(name), { name: name });
    this.template(testTemplate, DESTINATION_HOOK_TEST(name), { name: name });
  }
};
