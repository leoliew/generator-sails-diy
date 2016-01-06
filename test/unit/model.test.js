/**
 * Created by leo on 16-1-5.
 */

var path = require('path');
var generators = require('yeoman-generator');

describe('sails-rest-api:model', function () {
  describe('Should properly scaffold model with REST interface', function () {
    before(function (done) {
      generators.test.run(path.join(__dirname, '../../model')).withArguments(['test']).withOptions({
        'rest': true
      }).on('end', done);
    });

    it('Should properly create api files', function () {
      generators.assert.file(['api/controllers/TestController.js', 'api/models/Test.js']);
      generators.assert.fileContent('api/controllers/TestController.js', /module.exports/);
      generators.assert.fileContent('api/models/Test.js', /beforeUpdate:/);
    });

    it('Should properly create test files', function () {
      generators.assert.file(['test/unit/controllers/TestController.test.js', 'test/unit/models/Test.test.js']);
      generators.assert.fileContent('test/unit/controllers/TestController.test.js', /controllers:TestController/);
      generators.assert.fileContent('test/unit/models/Test.test.js', /models:Test/);
    });

    it('Should properly create fixtures files', function () {
      generators.assert.file(['test/fixtures/Test.js']);
      generators.assert.fileContent('test/fixtures/Test.js', /fixture objects/);
    });
  });

  describe('Should properly scaffold model without REST interface', function () {
    before(function (done) {
      generators.test.run(path.join(__dirname, '../../model')).withArguments(['anotherModel']).withOptions({
        'rest': false
      }).on('end', done);
    });

    it('Should properly create api files', function () {
      generators.assert.file(['api/models/Another.js']);
      generators.assert.noFile(['api/controllers/AnotherController.js']);
      generators.assert.fileContent('api/models/Another.js', /beforeUpdate:/);
    });

    it('Should properly create test files', function () {
      generators.assert.file(['test/unit/models/Another.test.js']);
      generators.assert.noFile(['test/unit/controllers/AnotherController.test.js']);
      generators.assert.fileContent('test/unit/models/Another.test.js',  /models:Another/);
    });

    it('Should properly create fixtures files', function () {
      generators.assert.file(['test/fixtures/Another.js']);
      generators.assert.fileContent('test/fixtures/Another.js', /fixture objects/);
    });
  });


});
