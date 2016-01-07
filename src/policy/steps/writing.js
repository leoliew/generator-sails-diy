/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

var SOURCE_POLICY = 'Policy.js';
var SOURCE_POLICY_TEST = 'Policy.test.js';

var DESTINATION_POLICY = function(name) {
  result = 'api/policies/' + name + '.js';
  return result;
};
var DESTINATION_POLICY_TEST = function(name) {
  result = 'test/unit/policies/' + name + '.test.js';
  return result;
};

module.exports = function(){
  var name = (this['policy-name'].charAt(0).toLowerCase() + this['policy-name'].slice(1)).replace(/Policy/, '');
  this.template(SOURCE_POLICY, DESTINATION_POLICY(name), { name: name });
  this.template(SOURCE_POLICY_TEST, DESTINATION_POLICY_TEST(name), { name: name });
};
