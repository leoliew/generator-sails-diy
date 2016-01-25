'use strict';


var chai = require('chai');

var sinon = require('sinon');

var apiResponsesName = require('../../../api/responses/<%= name %>');


var context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:<%= name %>', function () {
  it('Should be tested', function () {
    assert(false);
  });
});
