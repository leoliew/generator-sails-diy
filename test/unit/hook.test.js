var path = require('path');
var generators = require('yeoman-generator');

describe('sails-diy:hook', function(){
  describe('Should properly scaffold without arguments and options', function(){
    before(function(done){
      generators.test.run(path.join(__dirname, '../../src/hook')).on('end', done)
    });

    it('Should properly create api files', function() {
      //generators.assert.file([
      //  'api/hooks/CountHook.js',
      //  'api/hooks/PluralizeHook.js'
      //]);

      generators.assert.noFile([
        'api/hooks/TestHook.js'
      ]);

      //generators.assert.fileContent('api/hooks/CountHook.js', /sails.on\('router:before'/);
      //generators.assert.fileContent('api/hooks/PluralizeHook.js', /sails.on\('router:before'/);
    });

    it('Should properly create test files', function(){
      //generators.assert.file([
      //  'test/unit/hooks/CountHook.test.js',
      //  'test/unit/hooks/PluralizeHook.test.js'
      //]);

      generators.assert.noFile([
        'test/unit/hooks/TestHook.test.js'
      ]);
    });
  });

  //describe('Should properly scaffold predefined hook', function(){
  //  before(function(done){
  //    generators.test
  //      .run(path.join(__dirname, '../../src/hook'))
  //      .withArguments(['pluralize'])
  //      .on('end', done)
  //  });
  //
  //  it('Should properly create api files', function(){
  //    generators.assert.file([
  //      'api/hooks/PluralizeHook.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'api/hooks/CountHook.js'
  //    ]);
  //
  //    generators.assert.fileContent('api/hooks/PluralizeHook.js', /sails.on\('router:before'/);
  //  });
  //
  //  it('Should properly create test files', function(){
  //    generators.assert.file([
  //      'test/unit/hooks/PluralizeHook.test.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'test/unit/hooks/CountHook.test.js'
  //    ]);
  //  });
  //});

  describe('Should properly scaffold overridden predefined hook', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../src/hook'))
        .withArguments(['pluralize'])
        .withOptions({
          'new': true
        })
        .on('end', done)
    });

    it('Should properly create api files', function(){
      generators.assert.file([
        'api/hooks/PluralizeHook.js'
      ]);

      generators.assert.noFile([
        'api/hooks/CountHook.js'
      ]);

      generators.assert.fileContent('api/hooks/PluralizeHook.js', /initialize: function initialize\(cb\)/);
      generators.assert.noFileContent('api/hooks/PluralizeHook.js', /sails.on\('router:before'/);
    });

    it('Should properly create test files', function(){
      generators.assert.file([
        'test/unit/hooks/PluralizeHook.test.js'
      ]);

      generators.assert.noFile([
        'test/unit/hooks/CountHook.test.js'
      ]);
    });
  });

  //describe('Should properly scaffold all predefined hooks at once', function(){
  //  before(function(done){
  //    generators.test
  //      .run(path.join(__dirname, '../../src/hook'))
  //      .withOptions({
  //        'all': true
  //      })
  //      .on('end', done)
  //  });
  //
  //  it('Should properly create api files', function(){
  //    generators.assert.file([
  //      'api/hooks/CountHook.js',
  //      'api/hooks/PluralizeHook.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'api/hooks/TestHook.js'
  //    ]);
  //
  //    generators.assert.fileContent('api/hooks/CountHook.js', /sails.on\('router:before'/);
  //    generators.assert.fileContent('api/hooks/PluralizeHook.js', /sails.on\('router:before'/);
  //  });
  //
  //  it('Should properly create test files', function(){
  //    generators.assert.file([
  //      'test/unit/hooks/CountHook.test.js',
  //      'test/unit/hooks/PluralizeHook.test.js'
  //    ]);
  //
  //    generators.assert.noFile([
  //      'test/unit/hooks/TestHook.test.js'
  //    ]);
  //  });
  //});

  describe('Should properly scaffold custom hook', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../src/hook'))
        .withArguments(['test'])
        .on('end', done)
    });

    it('Should properly create api files', function(){
      generators.assert.file([
        'api/hooks/TestHook.js'
      ]);

      generators.assert.noFile([
        'api/hooks/CountHook.js',
        'api/hooks/PluralizeHook.js'
      ]);

      generators.assert.fileContent('api/hooks/TestHook.js', /initialize: function initialize\(cb\)/);
    });

    it('Should properly create test files', function(){
      generators.assert.file([
        'test/unit/hooks/TestHook.test.js'
      ]);

      generators.assert.noFile([
        'test/unit/hooks/CountHook.test.js',
        'test/unit/hooks/PluralizeHook.test.js'
      ]);
    });
  });
});
