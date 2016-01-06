/**
 * Created by leo on 16-1-5.
 */

var generators = require('yeoman-generator');
var steps = require('./steps');


module.exports = generators.Base.extend({

  // note: arguments and options should be defined in the constructor.
  constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument(
      'model-name',
      {
        required: true,
        type: String
      }
    );
    this.option('rest');
    // And you can then access it later on this way; e.g.
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
