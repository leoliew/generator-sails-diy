/**
 * Created by leo on 16-1-4.
 */
var generators = require('yeoman-generator');
var chalk = require('chalk');
var _s = require('underscore.string');

module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();
    // Have Yeoman greet the user.
    this.log(chalk.yellow(
      'Welcome to the ' + chalk.red('sails-diy') + ' generator!'
    ));
    this.prompt({
        type    : 'input',
        name    : 'appname',
        message : 'Your project name',
        default : this.appname // Default to current folder name
    }, function (props) {
      this.props = props;
      done();
    }.bind(this));
  }
});
