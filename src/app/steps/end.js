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
      chalk.yellow('1)') + ' Create a controller in your app:',
      chalk.blue('yo sails-diy:controller Test'),
      chalk.yellow('2)') + ' Create a model in your app:',
      chalk.blue('yo sails-diy:model Ticket --rest'),
      chalk.yellow('3)') + ' Create a cron in your app:',
      chalk.blue('yo sails-diy:cron cron1 cron2'),
      chalk.yellow('4)') + ' Create a service in your app:',
      chalk.blue('yo sails-diy:service ping'),
      chalk.yellow('5)') + ' Create a policy in your app:',
      chalk.blue('yo sails-diy:policy auth'),
      chalk.yellow('6)') + ' Compose your API and run:',
      chalk.blue('npm start'),
      chalk.yellow('7)') + ' Run unit test in your project:',
      chalk.blue('npm test')
    ],{
      printFn: this.log
    }
  );
};
