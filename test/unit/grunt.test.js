
var path = require('path');
var generators = require('yeoman-generator');

describe('sails-diy:grunt', function(){
  describe('Should properly scaffold empty grunt configuration file', function(){
    before(function(done){
      generators.test.run(path.join(__dirname, '../../src/grunt')).on('end', done)
    });

    it('Should properly create configuration files', function(){
      generators.assert.file([
        'Gruntfile.js',
        'tasks/config/clean.js',
        'tasks/config/coffee.js',
        'tasks/config/concat.js',
        'tasks/config/copy.js',
        'tasks/config/cssmin.js',
        'tasks/config/jst.js',
        'tasks/config/less.js',
        'tasks/config/sails-linker.js',
        'tasks/config/sync.js',
        'tasks/config/uglify.js',
        'tasks/config/watch.js',
        'tasks/register/build.js',
        'tasks/register/buildProd.js',
        'tasks/register/compileAssets.js',
        'tasks/register/default.js',
        'tasks/register/linkAssets.js',
        'tasks/register/linkAssetsBuild.js',
        'tasks/register/linkAssetsBuildProd.js',
        'tasks/register/prod.js',
        'tasks/register/syncAssets.js',
        'tasks/pipeline.js',
        'tasks/README.md'
      ]);
    });
  });


});
