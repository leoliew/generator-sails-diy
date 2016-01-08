/**
 * Created by leo on 1/20/15.
 */


var should = require('should');
var request = require('superagent');

describe("notFound Response test !", function() {
  it("should response notFound view !", function(done) {
    request.get(sails.getBaseurl()+"/api/v1/response/notFound")
      .end(function(err,res){
        res.statusCode.should.match(404);
        done() ;
      }) ;
  });
});

