var should = require('should');

describe('controllers:PingController', function() {
  it('Should return message that HTTP server is working', function(done){
    sails.request({
      method: 'GET',
      url: '/v1/ping'
    }, function(error, res, body){
      if (error) return done(error);

      assert.equal(res.statusCode, 200);
      assert.equal(body.message, 'HTTP server is working');

      done();
    });
  });
});
