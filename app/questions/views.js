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
    type: 'list',
    name: 'views:chosen',
    message: 'Choose which view engine you want to configure',
    default: 'Ejs',
    choices: [
      'Ejs',
      'Jade'
    ]
  }
];
