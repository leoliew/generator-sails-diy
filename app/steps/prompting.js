/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */


var chalk = require('chalk');
var questions = require('../questions/index');

var askQuestions = function (title, questions, done) {
  var _this = this;
  this.log(chalk.yellow('\n' + title + ' questions:'));
  this.prompt(questions, function (answers) {
    _this.answers = Object.assign(_this.answers || {}, answers);
    done();
  });
};


module.exports = {
  askApp: function askApp() {
    askQuestions.call(this, 'Application', questions.app, this.async());
  }

  //askConfig: function askConfig() {
  //  askQuestions.call(this, 'Configuration', questions.config, this.async());
  //},
  //
  //askLogger: function askLogger() {
  //  askQuestions.call(this, 'Logger', questions.logger, this.async());
  //},
  //
  //askBlueprint: function askBlueprint() {
  //  askQuestions.call(this, 'Blueprint', questions.blueprint, this.async());
  //},
  //
  //askController: function askController() {
  //  askQuestions.call(this, 'Controller', questions.controller, this.async());
  //},
  //
  //askHook: function askHook() {
  //  askQuestions.call(this, 'Hook', questions.hook, this.async());
  //},
  //
  //askCron: function askCron() {
  //  askQuestions.call(this, 'Cron', questions.cron, this.async());
  //},
  //
  //askSwagger: function askSwagger() {
  //  askQuestions.call(this, 'Swagger', questions.swagger, this.async());
  //},
  //
  //askAuthentication: function askAuthentication() {
  //  askQuestions.call(this, 'Authentication', questions.authentication, this.async());
  //},
  //
  //askService: function askService() {
  //  askQuestions.call(this, 'Service', questions.service, this.async());
  //}
};