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

var app = require('./app');
var cron = require('./cron');
var config = require('./config');
var views = require('./views');
var febuild = require('./febuild');


module.exports = {
  app: app,
  cron: cron,
  config: config,
  views: views,
  febuild: febuild
};
