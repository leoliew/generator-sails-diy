/**
 * Created by leo on 16-1-5.
 */

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var path = require('path');
var _s = require('underscore.string');

module.exports = generators.Base.extend({

  initializing: function () {
    this.pkg = require('../package.json');
  },

  //prompting: function () {
  //
  //},

  writing: function(){


      var app_name = 'abc';

      mkdirp.sync(this.destinationPath( path.join( app_name, 'api' ) ));
      mkdirp.sync(this.destinationPath( path.join( app_name, 'api/controllers' ) ) );
      mkdirp.sync(this.destinationPath( path.join( app_name, 'api/models' ) ) );
      mkdirp.sync(this.destinationPath( path.join( app_name, 'api/policies' ) ) );
      mkdirp.sync(this.destinationPath( path.join( app_name, 'api/services' ) ) );
      mkdirp.sync(this.destinationPath( path.join( app_name, 'config' ) ) );

      this.fs.copy(
        this.templatePath('_lib/_app.js'),
        this.destinationPath(path.join(app_name, 'lib/app.js'))
      );

      this.fs.copy(
        this.templatePath('_lib/_sails/_loadControllers.js'),
        this.destinationPath(path.join(app_name, 'lib/sails/_loadControllers.js'))
      );

      this.fs.copy(
        this.templatePath('_lib/_sails/_loadPolicies.js'),
        this.destinationPath(path.join(app_name, 'lib/sails/_loadPolicies.js'))
      );

      this.fs.copyTpl(
        this.templatePath('_test/_basic.js'),
        this.destinationPath(path.join(app_name, 'test/basic.js')),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('_index.js'),
        this.destinationPath(path.join(app_name, 'index.js')),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath(path.join(app_name, 'package.json')),
        this.props
      );


  },

  install: function () {
    // Go to correct directory
    //process.chdir( app_name );
    this.installDependencies();
  }
});
