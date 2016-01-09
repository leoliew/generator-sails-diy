/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

var fs = require('fs');

var SOURCE_SERVICE = function(name) {
  result = name ? 'api/services/' + name + 'Service.js' : 'Service.js';
  return result;
};
var SOURCE_SERVICE_CONFIG = function(name) {
  result = name ? 'config/services/' + name.toLowerCase() + '.js' : 'ServiceConfig.template';
  return result;
};
var SOURCE_SERVICE_TEST = function(name) {
  result = name ? 'test/unit/services/' + name + 'Service.test.template' : 'Service.test.template';
  return result;
};

var DESTINATION_SERVICE = function(name) {
  result = 'api/services/' + name + 'Service.js';
  return result;
};
var DESTINATION_SERVICE_CONFIG = function(name) {
  result = 'config/services/' + name.toLowerCase() + '.js';
  return result;
};
var DESTINATION_SERVICE_TEST = function(name) {
  result = 'test/unit/services/' + name + 'Service.test.js';
  return result;
};

module.exports = function(){
  var name = (this['service-name'].charAt(0).toUpperCase() + this['service-name'].slice(1)).replace(/Service/, '');
  var isNew = this.options['new'];
  var isAll = !name || this.options['all'];

  if (isAll) {
    this.directory('api/services', 'api/services');
    this.directory('config/services', 'config/services');
    this.directory('test/unit/services', 'test/unit/services');
  } else if (isNew) {
    this.template(SOURCE_SERVICE(), DESTINATION_SERVICE(name), { name: name, options: this.options });
    this.template(SOURCE_SERVICE_CONFIG(), DESTINATION_SERVICE_CONFIG(name), { name: name, options: this.options });
    this.template(SOURCE_SERVICE_TEST(), DESTINATION_SERVICE_TEST(name), { name: name, options: this.options });
  } else {
    var serviceTemplate = fs.existsSync(this.templatePath(SOURCE_SERVICE(name))) ? SOURCE_SERVICE(name) : SOURCE_SERVICE();
    var configTemplate = fs.existsSync(this.templatePath(SOURCE_SERVICE_CONFIG(name))) ? SOURCE_SERVICE_CONFIG(name) : SOURCE_SERVICE_CONFIG();
    var testTemplate = fs.existsSync(this.templatePath(SOURCE_SERVICE_TEST(name))) ? SOURCE_SERVICE_TEST(name) : SOURCE_SERVICE_TEST();

    this.template(serviceTemplate, DESTINATION_SERVICE(name), { name: name, options: this.options });
    this.template(configTemplate, DESTINATION_SERVICE_CONFIG(name), { name: name, options: this.options });
    this.template(testTemplate, DESTINATION_SERVICE_TEST(name), { name: name, options: this.options });
  }
};
