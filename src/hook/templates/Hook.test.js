
var should = require('should');
var apiHooksNameHook = require('../../../api/hooks/<%= name %>Hook');

describe('hooks:<%= name %>', function () {
  it('Should be tested', function () {
    should.exist(apiHooksNameHook);
  });
});
