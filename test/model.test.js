/**
 * Created by leo on 16-1-5.
 */




var path = require('path');
var os = require('os');
var yeomanGenerator = require('yeoman-generator');

describe('sails-rest-api:model', function () {
  describe('Should properly scaffold model with REST interface', function () {
    before(function (done) {
      _yeomanGenerator.test.run(_path2['default'].join(__dirname, '../../src/model')).withArguments(['test']).withOptions({
        'rest': true
      }).on('end', done);
    });

    it('Should properly create api files', function () {
      _yeomanGenerator.assert.file(['api/controllers/TestController.js', 'api/models/Test.js']);
      _yeomanGenerator.assert.fileContent('api/controllers/TestController.js', /export default \{\}/);
      _yeomanGenerator.assert.fileContent('api/models/Test.js', /beforeUpdate:/);
    });
  });


});
