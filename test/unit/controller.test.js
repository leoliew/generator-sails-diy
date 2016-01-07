var path = require('path');
var generators = require('yeoman-generator');

describe.only('sails-rest-api:controller', function(){
  //describe('Should properly scaffold controllers without arguments and options', function(){
  //  before(function(done){
  //    generators.test.run(path.join(__dirname, '../../controller')).on('end', done);
  //  });
  //  it('Should properly create api files', function(){
  //    generators.assert.file([
  //      'api/controllers/PingController.js',
  //      'api/controllers/SearchController.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'api/controllers/TestController.js'
  //    ]);
  //
  //    generators.assert.fileContent('api/controllers/PingController.js', /message: 'HTTP server is working'/);
  //  });
  //
  //  it('Should properly create test files', function(){
  //    generators.assert.file([
  //      'test/unit/controllers/PingController.test.js',
  //      'test/unit/controllers/SearchController.test.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'test/unit/controllers/TestController.test.js'
  //    ]);
  //  });
  //});
  //
  //describe('Should properly scaffold predefined controller', function(){
  //  before(function(done) {
  //    generators.test
  //      .run(path.join(__dirname, '../../src/controller'))
  //      .withArguments(['ping'])
  //      .on('end', done)
  //  });
  //
  //  it('Should properly create api files', function(){
  //    generators.assert.file([
  //      'api/controllers/PingController.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'api/controllers/SearchController.js'
  //    ]);
  //
  //    generators.assert.fileContent('api/controllers/PingController.js', /message: 'HTTP server is working'/);
  //    generators.assert.noFileContent('api/controllers/PingController.js', /res.ok\(\)/);
  //  });
  //
  //  it('Should properly create test files', function(){
  //    generators.assert.file([
  //      'test/unit/controllers/PingController.test.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'test/unit/controllers/SearchController.test.js'
  //    ]);
  //  });
  //});

  //describe('Should properly scaffold overridden predefined controller', function(){
  //  before(function(done){
  //    generators.test
  //      .run(path.join(__dirname, '../../src/controller'))
  //      .withArguments(['ping'])
  //      .withOptions({
  //        'new': true
  //      })
  //      .on('end', done)
  //  });
  //
  //  it('Should properly create api files', function(){
  //    generators.assert.file([
  //      'api/controllers/PingController.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'api/controllers/SearchController.js'
  //    ]);
  //
  //    generators.assert.fileContent('api/controllers/PingController.js', /res.ok\(\)/);
  //    generators.assert.noFileContent('api/controllers/PingController.js', /message: 'HTTP server is working'/);
  //  });
  //
  //  it('Should properly create test files', function(){
  //    generators.assert.file([
  //      'test/unit/controllers/PingController.test.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'test/unit/controllers/SearchController.test.js'
  //    ]);
  //  });
  //});

  describe('Should properly scaffold custom controller', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../controller'))
        .withArguments(['TicketController'])
        .on('end', done)
    });

    it('Should properly create api files', function(){
      generators.assert.file([
        'api/controllers/TicketController.js'
      ]);

      //generators.assert.noFile([
      //  'api/controllers/PingController.js',
      //  'api/controllers/SearchController.js'
      //]);

      generators.assert.fileContent('api/controllers/TicketController.js', /module.exports/);
      generators.assert.fileContent('api/controllers/TicketController.js', /res.ok\(\)/);
    });

    it('Should properly create test files', function(){
      generators.assert.file([
        'test/unit/controllers/TicketController.test.js'
      ]);

      //generators.assert.noFile([
      //  'test/unit/controllers/PingController.test.js',
      //  'test/unit/controllers/SearchController.test.js'
      //]);
    });
  });

  //describe('Should properly scaffold all predefined controllers at once', function(){
  //  before(function(done){
  //    generators.test
  //      .run(path.join(__dirname, '../../src/controller'))
  //      .withOptions({
  //        'all': true
  //      })
  //      .on('end', done)
  //  });
  //
  //  it('Should properly create api files', function(){
  //    generators.assert.file([
  //      'api/controllers/PingController.js',
  //      'api/controllers/SearchController.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'api/controllers/TicketController.js'
  //    ]);
  //
  //    generators.assert.fileContent('api/controllers/PingController.js', /message: 'HTTP server is working'/);
  //    generators.assert.noFileContent('api/controllers/PingController.js', /res.ok\(\)/);
  //  });
  //
  //  it('Should properly create test files', function(){
  //    generators.assert.file([
  //      'test/unit/controllers/PingController.test.js',
  //      'test/unit/controllers/SearchController.test.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'test/unit/controllers/TicketController.test.js'
  //    ]);
  //  });
  //});
});
