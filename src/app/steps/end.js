/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

var chalk = require('chalk');
var printMessage = require('print-message');

module.exports = function(){
  printMessage(
    [
      'Enjoy your ' + chalk.red('Sails DIY') + ' project!',
      '---',
      'Next steps:',
      chalk.yellow('1)') + ' Create a model in your app:',
      chalk.blue('yo sails-diy:model Ticket'),
      chalk.yellow('2)') + ' Compose your API and run:',
      chalk.blue('npm start')
    ],{
      printFn: this.log
    }
  );
};
