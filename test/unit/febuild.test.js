var path = require('path');
var generators = require('yeoman-generator');

describe('sails-diy:febuild', function() {

  describe('Should properly scaffold default febuild tool', function () {
    before(function (done) {
      generators.test
        .run(path.join(__dirname, '../../src/febuild'))
        .withArguments(['Grunt'])
        .on('end', done)
    });

    it('Should properly create configuration files', function(){
      generators.assert.file([
        'Gruntfile.js',
        'tasks/config/clean.js',
        'tasks/config/copy.js',
        'tasks/config/less.js',
        'tasks/config/sync.js',
        'tasks/config/watch.js',
        'tasks/register/compileAssets.js',
        'tasks/register/default.js',
        'tasks/register/prod.js',
        'tasks/register/syncAssets.js',
        'tasks/pipeline.js',
        'tasks/README.md'
      ]);
    });
  });


  describe('Should properly scaffold default febuild tool', function () {
    before(function (done) {
      generators.test
        .run(path.join(__dirname, '../../src/febuild'))
        .withArguments(['Gulp'])
        .on('end', done);
    });

    it('Should properly create configuration files', function(){
      generators.assert.file([
        'gulpfile.js',
        'tasks/config/clean.js',
        'tasks/config/copy.js',
        'tasks/config/less.js',
        'tasks/config/watcher.js',
        'tasks/config/filerev.js',
        'tasks/config/replacerev.js',
        'tasks/register/compileAssets.js',
        'tasks/register/default.js',
        'tasks/register/prod.js',
        'tasks/register/syncAssets.js',
        'tasks/pipeline.js',
        'tasks/README.md'
      ]);
    });
  });
});
