/**
 * Created by leo on 1/20/15.
 */


var should = require('should');
var request = require('superagent');

describe("forbidden Response test !", function() {
  it("should response forbidden view !", function(done) {
    request.get(sails.getBaseurl()+"/api/v1/response/forbidden")
      .end(function(err,res){
        res.statusCode.should.match(403);
        done() ;
      }) ;
  });
});

