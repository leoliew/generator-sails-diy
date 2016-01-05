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

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('SailsPluginHook') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your Sails-Plugin-Hook\'s name',
      default: 'new-plugin'
    },
      {
        type: 'input',
        name: 'description',
        message: 'Your Sails-Plugin-Hook description',
        default: 'Sails-Plugin-Hook'
      }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.props.nameCamalize = _s.camelize(this.props.name);
      this.props.nameSlug = _s.slugify(this.props.name);
      this.props.sailsName = 'sails-hook-' + this.props.nameSlug;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      mkdirp.sync(this.destinationPath( path.join( this.props.sailsName, 'api' ) ));
      mkdirp.sync(this.destinationPath( path.join( this.props.sailsName, 'api/controllers' ) ) );
      mkdirp.sync(this.destinationPath( path.join( this.props.sailsName, 'api/models' ) ) );
      mkdirp.sync(this.destinationPath( path.join( this.props.sailsName, 'api/policies' ) ) );
      mkdirp.sync(this.destinationPath( path.join( this.props.sailsName, 'api/services' ) ) );
      mkdirp.sync(this.destinationPath( path.join( this.props.sailsName, 'config' ) ) );

      this.fs.copy(
        this.templatePath('_lib/_app.js'),
        this.destinationPath(path.join(this.props.sailsName, 'lib/app.js'))
      );

      this.fs.copy(
        this.templatePath('_lib/_sails/_loadControllers.js'),
        this.destinationPath(path.join(this.props.sailsName, 'lib/sails/_loadControllers.js'))
      );

      this.fs.copy(
        this.templatePath('_lib/_sails/_loadPolicies.js'),
        this.destinationPath(path.join(this.props.sailsName, 'lib/sails/_loadPolicies.js'))
      );

      this.fs.copyTpl(
        this.templatePath('_test/_basic.js'),
        this.destinationPath(path.join(this.props.sailsName, 'test/basic.js')),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('_index.js'),
        this.destinationPath(path.join(this.props.sailsName, 'index.js')),
        this.props
      );

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath(path.join(this.props.sailsName, 'package.json')),
        this.props
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath(path.join(this.props.sailsName, '.gitignore'))
      );
    }
  },

  install: function () {
    // Go to correct directory
    process.chdir( this.props.sailsName );
    this.installDependencies();
  }
});
