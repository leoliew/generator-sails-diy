var sailsPluginHook = require('./lib/app.js');

module.exports = function (sails) {
		sailsPluginHook.adaptSails(sails);

    return {
	    defaults: {
	    	<%= nameCamalize %>: {

	    	}
	    },

      initialize: function(cb) {
      	sailsPluginHook.init(sails);

        return cb();
      }      
    };
};