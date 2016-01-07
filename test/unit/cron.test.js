
var path = require('path');
var generators = require('yeoman-generator');

describe('sails-diy:cron', function(){
  describe('Should properly scaffold empty cron configuration file', function(){
    before(function(done){
      generators.test.run(path.join(__dirname, '../../cron')).on('end', done)
    });

    it('Should properly create configuration files', function(){
      generators.assert.file([
        'config/cron.js'
      ]);

      generators.assert.noFileContent('config/cron.js', /testJob:/);
    });
  });

  describe('Should properly scaffold cron configuration file with predefined jobs', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../cron'))
        .withArguments(['testJob', 'anotherJob'])
        .on('end', done)
    });

    it('Should properly create configuration files', function(){
      generators.assert.file([
        'config/cron.js'
      ]);

      generators.assert.fileContent('config/cron.js', /'testJob':/);
      generators.assert.fileContent('config/cron.js', /'anotherJob':/);
    });
  });
});
