/**
 * PingController
 *
 * @description :: Server-side logic for managing banners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    res.ok(req.allParams(), { message: 'HTTP server is working' });
  }
};
