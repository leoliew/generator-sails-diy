var path = require('path');
var generators = require('yeoman-generator');

describe.only('sails-diy:views', function() {
  describe('Should properly scaffold default configuration', function () {
    before(function (done) {
      generators.test
        .run(path.join(__dirname, '../../views'))
        .on('end', done)
    });

    it('Should properly create configuration files', function(){
      generators.assert.file([
        'config/views.js',
        'assets/images/.gitkeep',
        'assets/js/dependencies/sails.io.js',
        'assets/styles/importer.less',
        'assets/templates/.gitkeep',
        'assets/favicon.ico',
        'assets/robots.txt'
      ]);
    });
  });

  describe('Should properly scaffold default ejs view', function () {
    before(function (done) {
      generators.test
        .run(path.join(__dirname, '../../views'))
        .withArguments(['Ejs'])
        .on('end', done)
    });

    it('Should properly create configuration files', function(){
      generators.assert.file([
        'config/views.js',
        'assets/images/.gitkeep',
        'assets/js/dependencies/sails.io.js',
        'assets/styles/importer.less',
        'assets/templates/.gitkeep',
        'assets/favicon.ico',
        'assets/robots.txt'
      ]);
      generators.assert.fileContent('config/views.js', /engine: 'ejs'/);
    });
  });


  describe('Should properly scaffold default jade view', function () {
    before(function (done) {
      generators.test
        .run(path.join(__dirname, '../../views'))
        .withArguments(['Jade'])
        .on('end', done);
    });

    it('Should properly create configuration files', function(){
      generators.assert.file([
        'config/views.js',
        'assets/images/.gitkeep',
        'assets/js/dependencies/sails.io.js',
        'assets/styles/importer.less',
        'assets/templates/.gitkeep',
        'assets/favicon.ico',
        'assets/robots.txt'
      ]);
      generators.assert.fileContent('config/views.js', /engine: 'jade'/);
    });
  });
});

