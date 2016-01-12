/**
 * <%= name %>Hook
 * Hook that ...
 */

module.exports = function(sails){
  return {
    configure: function configure() {
      return true;
    },

    defaults: function defaults(config) {
      return config;
    },

    initialize: function initialize(cb) {
      return cb();
    },

    routes: {
      before: {},
      after: {}
    }
  };
};


