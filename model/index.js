/**
 * Created by leo on 16-1-5.
 */

var generators = require('yeoman-generator');
var yeoman_arguments = require('./arguments');
var yeoman_options = require('./options');
var steps = require('./steps');


module.exports = generators.Base.extend({
  // note: arguments and options should be defined in the constructor.
  constructor: function () {
    var constructor_method = this;
    generators.Base.apply(constructor_method, arguments);

    Object.keys(yeoman_arguments).forEach(function (key) {
      return constructor_method.argument(key, yeoman_arguments[key]);
    });

    Object.keys(yeoman_options).forEach(function (key) {
      return constructor_method.option(key, yeoman_options[key]);
    });

    constructor_method.description = 'Scaffolds a new model';
  },

  initializing: steps.initializing,

  prompting: steps.prompting,

  configuring: steps.configuring,

  default: steps.default,

  writing: steps.writing,

  conflicts: steps.conflicts,

  install: steps.install,

  end: steps.end

});
