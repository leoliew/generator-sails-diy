var path = require('path');
var generators = require('yeoman-generator');

describe('sails-diy:views', function() {
  describe('Should properly scaffold default configuration', function () {
    before(function (done) {
      generators.test
        .run(path.join(__dirname, '../../src/views'))
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
        .run(path.join(__dirname, '../../src/views'))
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
        'assets/robots.txt',
        'views/403.ejs',
        'views/404.ejs',
        'views/500.ejs',
        'views/homepage.ejs',
        'views/layout.ejs'
      ]);
      generators.assert.fileContent('config/views.js', /engine: 'ejs'/);
    });
  });


  describe('Should properly scaffold default jade view', function () {
    before(function (done) {
      generators.test
        .run(path.join(__dirname, '../../src/views'))
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
        'assets/robots.txt',
        'views/403.jade',
        'views/404.jade',
        'views/500.jade',
        'views/homepage.jade',
        'views/layout.jade'
      ]);
      generators.assert.fileContent('config/views.js', /engine: 'jade'/);
    });
  });
});

