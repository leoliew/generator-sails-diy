/**
 * Step 4
 * Default priority in run loop
 */

module.exports = function(){

  this.composeWith('sails-diy:config', {
    args: [],
    options: {
      'database-adapter': this.answers['config:database-adapter'],
      'database-host': this.answers['config:database-host'],
      'database-name': this.answers['config:database-name'],
      'database-username': this.answers['config:database-username'],
      'database-password': this.answers['config:database-password'],
      'dynamo-access-key-id': this.answers['config:dynamo-access-key-id'],
      'dynamo-secret-access-key': this.answers['config:dynamo-secret-access-key'],
      'dynamo-region': this.answers['config:dynamo-region'],
      'cors': this.answers['config:cors']
    }
  });

  if (this.answers['cron:enabled']) {
    this.composeWith('sails-diy:cron', {
      args: [],
      options: {}
    });
  }


  this.composeWith('sails-diy:febuild', {
    args: [this.answers['febuild:chosen']],
    options: {}
  });

  this.composeWith('sails-diy:response', {
    args: [],
    options: {
      'all': true
    }
  });
  this.composeWith('sails-diy:views', {
    args: [this.answers['views:chosen']],
    options: {}
  });

};
