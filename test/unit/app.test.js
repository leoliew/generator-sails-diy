var path = require('path');
var generators = require('yeoman-generator');

describe.only('sails-rest-api:app', function(){
  describe('Should properly scaffold with default configuration', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../app'))
        .withGenerators([
          [generators.test.createDummyGenerator(), 'sails-rest-api:adapter'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:authentication'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:blueprint'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:config'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:controller'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:cron'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:hook'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:logger'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:model'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:policy'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:response'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:service'],
          [generators.test.createDummyGenerator(), 'sails-rest-api:swagger']
        ])
        .on('end', done);
    });

    it('Should properly create root files', function(){
      generators.assert.file([
        'app.js',
        'Dockerfile',
        '.editorconfig',
        'esdoc.json',
        '.gitignore',
        'package.json',
        'README.md',
        '.sailsrc'
      ]);
    });
    //
    //it('Should properly create mocha.opts and bootstrap', function(){
    //  generators.assert.file([
    //    'test/bootstrap.js',
    //    'test/mocha.opts'
    //  ]);
    //});
  });

  //describe('Should properly scaffold with custom configuration', function(){
  //  before(function(done){
  //    generators.test
  //      .run(path.join(__dirname, '../../app'))
  //      .withGenerators([
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:adapter'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:authentication'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:blueprint'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:config'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:controller'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:cron'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:hook'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:logger'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:model'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:policy'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:response'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:service'],
  //        [generators.test.createDummyGenerator(), 'sails-rest-api:swagger']
  //      ])
  //      .withOptions({
  //        'skip-update': true
  //      })
  //      .withPrompts({
  //        'authentication:enabled': false,
  //        'blueprint:all': false,
  //        'cron:enabled': false,
  //        'swagger:enabled': false
  //      })
  //      .on('end', done);
  //  });
  //
  //  it('Should properly create root files', function(){
  //    generators.assert.file([
  //      'app.js',
  //      'Dockerfile',
  //      '.editorconfig',
  //      'esdoc.json',
  //      '.gitignore',
  //      'package.json',
  //      'README.md',
  //      '.sailsrc'
  //    ]);
  //  });
  //
  //  it('Should properly create mocha.opts and bootstrap', function(){
  //    generators.assert.file([
  //      'test/bootstrap.js',
  //      'test/mocha.opts'
  //    ]);
  //  });
  //});
});
