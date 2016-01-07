var path = require('path');
var generators = require('yeoman-generator');

describe('sails-diy:policy', function(){
  describe('Should properly scaffold policy', function(){
    before(function(done){
      generators.test
        .run(path.join(__dirname, '../../src/policy'))
        .withArguments(['IsAdmin'])
        .on('end', done)
    });

    it('Should properly create api files', function(){
      generators.assert.file([
        'api/policies/isAdmin.js'
      ]);

      generators.assert.fileContent('api/policies/isAdmin.js', /module.exports = function\(req, res, next\)/);
    });

    it('Should properly create test files', function(){
      generators.assert.file([
        'test/unit/policies/isAdmin.test.js'
      ]);

      generators.assert.fileContent('test/unit/policies/isAdmin.test.js', /describe\('policies:isAdmin', function\(\)/);
    });
  });
});
