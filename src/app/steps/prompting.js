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
  askApp: function() {
    askQuestions.call(this, 'Application', questions.app, this.async());
  },
  askConfig: function() {
    askQuestions.call(this, 'Configuration', questions.config, this.async());
  },

  askCron: function() {
    askQuestions.call(this, 'Cron', questions.cron, this.async());
  },

  askViewEngine: function() {
    askQuestions.call(this, 'Views', questions.views, this.async());
  },
  askGrunt: function() {
    askQuestions.call(this, 'Grunt', questions.grunt, this.async());
  }
  
};
