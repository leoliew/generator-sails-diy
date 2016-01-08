/**
 * response type Test and police Test Controller
 * @type {{badRequset: badRequset, forbidden: forbidden, notFound: notFound, ok: ok, serverError: serverError}}
 */

module.exports = {
  badRequset:function(req,res){
    res.badRequest();
  },
  forbidden:function(req,res){
    res.forbidden();
  },
  notFound:function(req,res){
    res.notFound();
  },
  ok:function(req,res){
    res.ok();
  },
  serverError:function(req,res){
    res.serverError({code:'E_VIEW_FAILED'});
  },

  /**
   * Overrides for the settings in `config/blueprints.js`
   */
  _config: {
    actions:true
  }

};
