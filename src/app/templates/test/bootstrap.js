var Sails = require('sails');
var Barrels = require('barrels');
var config = require('../config/env/unit_test');
require('should');

// Global before hook
before(function(done){
  this.timeout(25000);
  // Lift Sails with test database
  Sails.lift(config, function(error, sails) {
    if (err)
      return done(err);
    // Load fixtures
    var barrels = new Barrels();

    // Save original objects in `fixtures` variable
    fixtures = barrels.data;

    // Populate the DB
    barrels.populate(function(err) {
      done(err, sails);
    });
  });
});

// Global after hook
after(function (done) {
  sails.log.verbose(); // Skip a line before displaying Sails lowering logs
  sails.lower(function() {
    done();
  });
});
