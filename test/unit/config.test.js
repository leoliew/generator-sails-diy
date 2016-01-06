var path = require('path');
var generators = require('yeoman-generator');

describe.only('sails-rest-api:config', function(){
  describe('Should properly scaffold default configuration', function(){
    before(function(done) {
      generators.test.run(path.join(__dirname, '../../config')).on('end', done)
    });

    it('Should properly create environment configuration files', function(){
      generators.assert.file([
        'config/env/development.js',
        'config/env/production.js',
        'config/env/unit_test.js'
      ]);
    });

    it('Should properly create configuration files', function(){
      generators.assert.file([
        'config/blueprints.js',
        'config/bootstrap.js',
        'config/connections.js',
        'config/cors.js',
        'config/errors.js',
        'config/globals.js',
        'config/http.js',
        'config/models.js',
        'config/routes.js'
      ]);

      generators.assert.fileContent('config/connections.js', /host: 'localhost'/g);
      generators.assert.fileContent('config/connections.js', /database: 'sails-rest-api'/g);
      generators.assert.fileContent('config/connections.js', /user: ''/g);
      generators.assert.fileContent('config/connections.js', /password: ''/g);
      generators.assert.fileContent('config/connections.js', /accessKeyId: ''/g);
      generators.assert.fileContent('config/connections.js', /secretAccessKey: ''/g);
      generators.assert.fileContent('config/connections.js', /region: 'us-west-1'/g);
      generators.assert.fileContent('config/cors.js', /allRoutes: false/g);
      generators.assert.fileContent('config/models.js', /connection: 'mongo'/);
    });
  });

  describe('Should properly scaffold custom configuration', function(){
    before(function(done){
      test
        .run(path.join(__dirname, '../../config'))
        .withOptions({
          'database-adapter': 'mysql',
          'database-host': '123.456.789.000',
          'database-name': 'db_name',
          'database-username': 'db_user',
          'database-password': 'db_pass',
          'dynamo-access-key-id': 'access_key_id',
          'dynamo-secret-access-key': 'secret_access_key',
          'dynamo-region': 'amazon_region',
          'cors': true
        })
        .on('end', done);
    });

    it('Should properly create environment configuration files', function(){
      assert.file([
        'config/env/development.js',
        'config/env/production.js',
        'config/env/unit_test.js'
      ]);
    });

    it('Should properly create configuration files', function() {
      assert.file([
        'config/blueprints.js',
        'config/bootstrap.js',
        'config/connections.js',
        'config/cors.js',
        'config/errors.js',
        'config/globals.js',
        'config/http.js',
        'config/models.js',
        'config/routes.js'
      ]);

      assert.fileContent('config/connections.js', /host: '123\.456\.789\.000'/g);
      assert.fileContent('config/connections.js', /database: 'db_name'/g);
      assert.fileContent('config/connections.js', /user: 'db_user'/g);
      assert.fileContent('config/connections.js', /password: 'db_pass'/g);
      assert.fileContent('config/connections.js', /accessKeyId: 'access_key_id'/g);
      assert.fileContent('config/connections.js', /secretAccessKey: 'secret_access_key'/g);
      assert.fileContent('config/connections.js', /region: 'amazon_region'/g);
      assert.fileContent('config/cors.js', /allRoutes: true/g);
      assert.fileContent('config/models.js', /connection: 'mysql'/);
    });
  });
});
