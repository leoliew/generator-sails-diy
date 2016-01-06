/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

var chalk = require('chalk');
var printMessage = require('print-message');

module.exports = function(){
  printMessage(
    [
      'Enjoy your ' + chalk.red('Sails REST API') + ' project!',
      '---',
      'Next steps:',
      chalk.yellow('1)') + ' Create a model in your app:',
      chalk.blue('yo sails-rest-api:model Ticket'),
      chalk.yellow('2)') + ' Compose your API and run:',
      chalk.blue('npm start')
    ],{
      printFn: this.log
    }
  );
};
