/**
 * <%= name %>Controller
 *
 * @description :: Server-side logic for managing banners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
  index: function(req, res) {
    res.ok();
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to <%= name %>Controller)
   */
  _config: {
    rest: true,
    actions: true
  }
};
