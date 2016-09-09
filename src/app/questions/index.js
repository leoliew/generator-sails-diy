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
// var grunt = require('./grunt');
var pm2 = require('./pm2');
var febuild = require('./febuild');

module.exports = {
  app: app,
  cron: cron,
  config: config,
  views: views,
  grunt:grunt,
  pm2:pm2,
  febuild: febuild
};
