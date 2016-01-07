/**
 * Step 1
 * Your initialization methods (checking current project state, getting configs, etc)
 */


var chalk = require('chalk');
var updateNotifier = require('update-notifier');
var printMessage = require('print-message');
var yosay = require('yosay');

var onUpdateNotifier = function(done, error, update) {
  if (update && update.type !== 'latest') {
    printMessage([
      'Update available: ' + chalk.green.bold(update.latest) + chalk.dim(' (current: ' + update.current + ')'),
      'Run ' + chalk.blue('npm update -g ' + update.name) + ' to update.'
    ],{
      printFn: this.log
    });
  }
  done();
};

module.exports = {

  loadPackageInfo: function loadPackageInfo() {
    this.pkg = require('../../../package.json');
  },

  sayHello: function sayHello() {
    this.log(yosay('Welcome to the laudable ' + chalk.red('Sails REST API') + ' generator!'));
  },

  checkUpdates: function checkUpdates() {
    if (!this.options['skip-update']) {
      this.log(chalk.yellow('Checking for updates...'));
      updateNotifier({
        pkg: this.pkg,
        callback: onUpdateNotifier.bind(this, this.async())
      });
    }
  }
};
