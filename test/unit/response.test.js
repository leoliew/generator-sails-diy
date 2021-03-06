var path = require('path');
var generators = require('yeoman-generator');

describe('sails-diy:response', function(){
  describe('Should properly scaffold predefined response', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../src/response'))
        .withArguments(['ok'])
        .on('end', done)
    });

    it('Should properly create api files', function(){
      generators.assert.file([
        'api/responses/ok.js'
      ]);

      generators.assert.noFile([
        'api/responses/badRequest.js',
        //'api/responses/created.js',
        'api/responses/forbidden.js',
        //'api/responses/negotiate.js',
        'api/responses/notFound.js',
        'api/responses/serverError.js'
        //'api/responses/unauthorized.js'
      ]);

      generators.assert.fileContent('api/responses/ok.js', /res.ok\(\) :: Sending 200 \("OK"\) response/);
    });

    it('Should properly create test files', function(){
      generators.assert.file([
        'test/unit/responses/ok.test.js'
      ]);

      generators.assert.noFile([
        'test/unit/responses/badRequest.test.js',
        //'test/unit/responses/created.test.js',
        'test/unit/responses/forbidden.test.js',
        //'test/unit/responses/negotiate.test.js',
        'test/unit/responses/notFound.test.js',
        'test/unit/responses/serverError.test.js'
        //'test/unit/responses/unauthorized.test.js'
      ]);

      generators.assert.fileContent('test/unit/responses/ok.test.js', /should response ok view/);
    });
  });

  describe('Should properly scaffold overridden predefined response', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../src/response'))
        .withArguments(['ok'])
        .withOptions({
          'new': true
        })
        .on('end', done)
    });

    it('Should properly create api files', function(){
      generators.assert.file([
        'api/responses/ok.js'
      ]);

      generators.assert.noFile([
        'api/responses/badRequest.js',
        //'api/responses/created.js',
        'api/responses/forbidden.js',
        //'api/responses/negotiate.js',
        'api/responses/notFound.js',
        'api/responses/serverError.js'
        //'api/responses/unauthorized.js'
      ]);

      generators.assert.fileContent('api/responses/ok.js', /response = \{ data: data \};/);
      generators.assert.noFileContent('api/responses/ok.js', /_\.get\(config, 'code', 'OK'\)/);
    });

    it('Should properly create test files', function(){
      generators.assert.file([
        'test/unit/responses/ok.test.js'
      ]);

      generators.assert.noFile([
        'test/unit/responses/badRequest.test.js',
        //'test/unit/responses/created.test.js',
        'test/unit/responses/forbidden.test.js',
        //'test/unit/responses/negotiate.test.js',
        'test/unit/responses/notFound.test.js',
        'test/unit/responses/serverError.test.js'
        //'test/unit/responses/unauthorized.test.js'
      ]);

      generators.assert.fileContent('test/unit/responses/ok.test.js', /var apiResponsesName/);
    });
  });

  describe('Should properly scaffold all the predefined responses', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../src/response'))
        .withOptions({
          'all': true
        })
        .on('end', done)
    });

    it('Should properly create api files', function(){
      generators.assert.file([
        'api/responses/badRequest.js',
        //'api/responses/created.js',
        'api/responses/forbidden.js',
        //'api/responses/negotiate.js',
        'api/responses/notFound.js',
        'api/responses/ok.js',
        'api/responses/serverError.js'
        //'api/responses/unauthorized.js'
      ]);

      generators.assert.fileContent('api/responses/ok.js', /res.ok\(\) :: Sending 200 \("OK"\) response/);
    });

    it('Should properly create test files',function(){
      generators.assert.file([
        'test/unit/responses/badRequest.test.js',
        //'test/unit/responses/created.test.js',
        'test/unit/responses/forbidden.test.js',
        //'test/unit/responses/negotiate.test.js',
        'test/unit/responses/notFound.test.js',
        'test/unit/responses/ok.test.js',
        'test/unit/responses/serverError.test.js'
        //'test/unit/responses/unauthorized.test.js'
      ]);

      generators.assert.fileContent('test/unit/responses/ok.test.js', /should response ok view/);
    });
  });

  describe('Should properly scaffold custom response', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../src/response'))
        .withArguments(['custom'])
        .on('end', done)
    });

    it('Should properly create api files', function(){
      generators.assert.file([
        'api/responses/custom.js'
      ]);

      generators.assert.noFile([
        'api/responses/badRequest.js',
        //'api/responses/created.js',
        'api/responses/forbidden.js',
        //'api/responses/negotiate.js',
        'api/responses/notFound.js',
        'api/responses/ok.js',
        'api/responses/serverError.js',
        //'api/responses/unauthorized.js'
      ]);

      generators.assert.fileContent('api/responses/custom.js', /response = \{ data: data \};/);
    });

    it('Should properly create test files', function(){
      generators.assert.file([
        'test/unit/responses/custom.test.js'
      ]);

      generators.assert.noFile([
        'test/unit/responses/badRequest.test.js',
        //'test/unit/responses/created.test.js',
        'test/unit/responses/forbidden.test.js',
        //'test/unit/responses/negotiate.test.js',
        'test/unit/responses/notFound.test.js',
        'test/unit/responses/ok.test.js',
        'test/unit/responses/serverError.test.js'
        //'test/unit/responses/unauthorized.test.js'
      ]);

      generators.assert.fileContent('test/unit/responses/custom.test.js', /var apiResponsesName/);
    });
  });
});
