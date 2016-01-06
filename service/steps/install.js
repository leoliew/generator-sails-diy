/**
 * Step 7
 * Where installation are run (npm, bower)
 */

var DEPENDENCIES = {
  cipher: ['sails-service-cipher'],
  hash: ['sails-service-hash'],
  image: ['sails-service-image'],
  location: ['sails-service-location'],
  mailer: ['sails-service-mailer'],
  payment: ['sails-service-payment'],
  pusher: ['sails-service-pusher'],
  sms: ['sails-service-sms'],
  social: ['sails-service-social'],
  storage: ['sails-service-storage']
};

module.exports = function(){
  var name = this['service-name'].replace(/Service/, '').toLowerCase();
  var isNew = this.options['new'];
  var isAll = !name || this.options['all'];

  if (isNew) return;

  if (isAll) {
    return this.npmInstall(Object.keys(DEPENDENCIES).reduce(function (dependencies, service) {
      return dependencies.concat(DEPENDENCIES[service]);
    }, []), { save: true });
  } else {
    return DEPENDENCIES[name] ? this.npmInstall(DEPENDENCIES[name], { save: true }) : true;
  }
};
