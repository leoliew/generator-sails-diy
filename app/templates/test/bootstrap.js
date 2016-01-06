var Sails = require('sails');
require('should');

before(function(done){
  Sails.lift(config, function(error, server) {
    if (error) return done(error);
    sails = server;
    done();
  });
});

// Global after hook
after(function (done) {
  sails.log.verbose(); // Skip a line before displaying Sails lowering logs
  sails.lower(function() {
    done();
  });
});
