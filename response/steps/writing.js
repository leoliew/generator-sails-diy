/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

var fs = require('fs');


var SOURCE_RESPONSE = function(name) {
  result = name ? 'api/responses/' + name + '.js' : 'Response.js';
  return result;
};
var SOURCE_RESPONSE_TEST = function(name) {
  result = name ? 'test/unit/responses/' + name + '.test.js' : 'Response.test.js';
  return result;
};

var DESTINATION_RESPONSE = function(name) {
  result = 'api/responses/' + name + '.js';
  return result;
};
var DESTINATION_RESPONSE_TEST = function(name) {
  result = 'test/unit/responses/' + name + '.test.js';
  return result;
};

module.exports = function(){
  var name = (this['response-name'].charAt(0).toLowerCase() + this['response-name'].slice(1)).replace(/Response/, '');
  var isNew = this.options['new'];
  var isAll = !name || this.options['all'];

  if (isAll) {
    this.directory('api/responses', 'api/responses');
    this.directory('test/unit/responses', 'test/unit/responses');
  } else if (isNew) {
    this.template(SOURCE_RESPONSE(), DESTINATION_RESPONSE(name), { name: name });
    this.template(SOURCE_RESPONSE_TEST(), DESTINATION_RESPONSE_TEST(name), { name: name });
  } else {
    var responseTemplate = _fs2['default'].existsSync(this.templatePath(SOURCE_RESPONSE(name))) ? SOURCE_RESPONSE(name) : SOURCE_RESPONSE();
    var testTemplate = _fs2['default'].existsSync(this.templatePath(SOURCE_RESPONSE_TEST(name))) ? SOURCE_RESPONSE_TEST(name) : SOURCE_RESPONSE_TEST();

    this.template(responseTemplate, DESTINATION_RESPONSE(name), { name: name });
    this.template(testTemplate, DESTINATION_RESPONSE_TEST(name), { name: name });
  }
};
