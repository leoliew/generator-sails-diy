/**
 * Exports array that contains questions for prompting.
 * The array with questions is an array of Inquirer prompt objects - https://github.com/SBoudrias/Inquirer.js#prompts-type
 *
 * @example
 * module.exports = [{
 *   type: 'input',
 *   name: 'inputName',
 *   message: 'Message for the input'
 * }];
 */

module.exports = [
  {
    type: 'confirm',
    name: 'pm2:enabled',
    message: 'Do you need pm2 as your production process manager?',
    default: false
  }
];
