var path = require('path');
var generators = require('yeoman-generator');

describe('sails-diy:app', function(){
  describe('Should properly scaffold with default configuration', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../src/app'))
        .withGenerators([
          [generators.test.createDummyGenerator(), 'sails-diy:adapter'],
          [generators.test.createDummyGenerator(), 'sails-diy:authentication'],
          [generators.test.createDummyGenerator(), 'sails-diy:blueprint'],
          [generators.test.createDummyGenerator(), 'sails-diy:config'],
          [generators.test.createDummyGenerator(), 'sails-diy:controller'],
          [generators.test.createDummyGenerator(), 'sails-diy:cron'],
          [generators.test.createDummyGenerator(), 'sails-diy:grunt'],
          [generators.test.createDummyGenerator(), 'sails-diy:hook'],
          [generators.test.createDummyGenerator(), 'sails-diy:logger'],
          [generators.test.createDummyGenerator(), 'sails-diy:model'],
          [generators.test.createDummyGenerator(), 'sails-diy:policy'],
          [generators.test.createDummyGenerator(), 'sails-diy:response'],
          [generators.test.createDummyGenerator(), 'sails-diy:service'],
          [generators.test.createDummyGenerator(), 'sails-diy:swagger'],
          [generators.test.createDummyGenerator(), 'sails-diy:views']
        ])
        .on('end', done);
    });

    it('Should properly create root files', function(){
      generators.assert.file([
        'app.js',
        '.editorconfig',
        'esdoc.json',
        '.gitignore',
        'package.json',
        'README.md',
        '.sailsrc'
      ]);
    });

    it('Should properly create mocha.opts and bootstrap', function(){
      generators.assert.file([
        'test/bootstrap.js',
        'test/mocha.opts'
      ]);
    });

    it('Should properly create api structure', function(){
      generators.assert.file([
        'api/controllers/.gitkeep',
        'api/models/.gitkeep',
        'api/policies/sessionAuth.js',
        'api/services/.gitkeep'
      ]);
    });

    it('Should properly generate sailsrc file', function(){
      generators.assert.fileContent('.sailsrc', /"sockets": false/);
    });

    //TODO: add pm2 yo generatoer test
    it('Should properly could not create pm2 bin folder', function(){
      generators.assert.noFile([
        'bin/processes_beta.json',
        'bin/processes_server_a.json'
      ]);
    });

  });

  describe('Should properly scaffold with custom configuration', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../src/app'))
        .withGenerators([
          [generators.test.createDummyGenerator(), 'sails-diy:adapter'],
          [generators.test.createDummyGenerator(), 'sails-diy:authentication'],
          [generators.test.createDummyGenerator(), 'sails-diy:blueprint'],
          [generators.test.createDummyGenerator(), 'sails-diy:config'],
          [generators.test.createDummyGenerator(), 'sails-diy:controller'],
          [generators.test.createDummyGenerator(), 'sails-diy:cron'],
          [generators.test.createDummyGenerator(), 'sails-diy:grunt'],
          [generators.test.createDummyGenerator(), 'sails-diy:hook'],
          [generators.test.createDummyGenerator(), 'sails-diy:logger'],
          [generators.test.createDummyGenerator(), 'sails-diy:model'],
          [generators.test.createDummyGenerator(), 'sails-diy:policy'],
          [generators.test.createDummyGenerator(), 'sails-diy:response'],
          [generators.test.createDummyGenerator(), 'sails-diy:service'],
          [generators.test.createDummyGenerator(), 'sails-diy:swagger'],
          [generators.test.createDummyGenerator(), 'sails-diy:views']
        ])
        .withOptions({
          'skip-update': true
        })
        .withPrompts({
          'cron:enabled': false,
          'grunt:enabled': true,
          'views:chosen': 'Jade'
        })
        .on('end', done);
    });

    it('Should properly create root files', function(){
      generators.assert.file([
        'app.js',
        '.editorconfig',
        'esdoc.json',
        '.gitignore',
        'package.json',
        'README.md',
        '.sailsrc'
      ]);
    });

    it('Should properly create mocha.opts and bootstrap', function(){
      generators.assert.file([
        'test/bootstrap.js',
        'test/mocha.opts'
      ]);
    });

    it('Should properly create api structure', function(){
      generators.assert.file([
        'api/controllers/.gitkeep',
        'api/models/.gitkeep',
        'api/policies/sessionAuth.js',
        'api/services/.gitkeep'
      ]);
    });

    it('Should properly generate sailsrc file', function(){
      generators.assert.fileContent('.sailsrc', /"sockets": false/);
    });

    //TODO: add pm2 yo generatoer test
    //it('Should properly have pm2 bin folder', function(){
    //  generators.assert.file([
    //    'bin/processes_beta.json',
    //    'bin/processes_server_a.json'
    //  ]);
    //});

  });
});
