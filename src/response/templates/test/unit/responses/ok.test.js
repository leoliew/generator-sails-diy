/**
 * Created by leo on 1/20/15.
 */


var should = require('should');
var request = require('superagent');

describe("ok Response test !", function() {
  it("should response ok view !", function(done) {
    request.get(sails.getBaseurl()+"/api/v1/response/ok")
      .end(function(err,res){
        res.statusCode.should.match(200);
        done() ;
      }) ;
  });
});

