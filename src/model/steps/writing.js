/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

var fs = require('fs');

var SOURCE_CONTROLLER = 'Controller.js';
var SOURCE_CONTROLLER_TEST = 'Controller.test.template';
var SOURCE_MODEL = 'Model.js';
var SOURCE_MODEL_TEST = 'Model.test.js';
var SOURCE_MODEL_FIXTURE = 'ModelFixture.js';

var DESTINATION_CONTROLLER = function(name){
  result = 'api/controllers/' + name + 'Controller.js';
  return result;
};
var DESTINATION_CONTROLLER_TEST = function(name) {
  result = 'test/unit/controllers/' + name + 'Controller.test.js';
  return result;
};
var DESTINATION_MODEL = function DESTINATION_MODEL(name) {
  result = 'api/models/' + name + '.js';
  return result;
};
var DESTINATION_MODEL_TEST = function DESTINATION_MODEL_TEST(name) {
  result = 'test/unit/models/' + name + '.test.js';
  return result;
};
var DESTINATION_MODEL_FIXTURE = function DESTINATION_MODEL_FIXTURE(name) {
  result = 'test/fixtures/' + name + '.js';
  return result;
};



module.exports = function(){
  var isREST = this.options['rest'];
  var name = (this['model-name'].charAt(0).toUpperCase() + this['model-name'].slice(1)).replace(/Model/, '');
  if (isREST && !fs.existsSync(this.destinationPath(DESTINATION_CONTROLLER(name)))) {
    this.template(SOURCE_CONTROLLER, DESTINATION_CONTROLLER(name), { name: name });
    this.template(SOURCE_CONTROLLER_TEST, DESTINATION_CONTROLLER_TEST(name), { name: name });
  }
  this.template(SOURCE_MODEL, DESTINATION_MODEL(name), { name: name });
  this.template(SOURCE_MODEL_TEST, DESTINATION_MODEL_TEST(name), { name: name });
  this.template(SOURCE_MODEL_FIXTURE, DESTINATION_MODEL_FIXTURE(name), { name: name });
};
