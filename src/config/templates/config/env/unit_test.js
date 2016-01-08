/**
 * Test environment settings
 * @description :: This section overrides all other config values ONLY in test environment
 */

module.exports = {

  /***************************************************************************
  * Set the default database connection for models in the development       *
  * environment (see config/connections.js and config/models.js )           *
  ***************************************************************************/

  models: {
    connection: 'memory',
    migrate: 'drop'
  },

  //pass all policies
  policies: {
    '*': true
  },

  port: 8012,

  globals:{
    sails:true
  },

  log: {
    level: 'error'
  }

};
