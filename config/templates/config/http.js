/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.http.html
 */

module.exports.http = {

  /****************************************************************************
   *                                                                           *
   * Express middleware to use for every Sails request. To add custom          *
   * middleware to the mix, add a function to the middleware config object and *
   * add its key to the "order" array. The $custom key is reserved for         *
   * backwards-compatibility with Sails v0.9.x apps that use the               *
   * `customMiddleware` config option.                                         *
   *                                                                           *
   ****************************************************************************/

  middleware: {

    /***************************************************************************
     *                                                                          *
     * The order in which middleware should be run for HTTP request. (the Sails *
     * router is invoked by the "router" middleware below.)                     *
     *                                                                          *
     ***************************************************************************/

    order: [
      'startRequestTimer',
      'cookieParser',
      'session',
      'myRequestLogger',
      'bodyParser',
      'handleBodyParserError',
      'compress',
      'methodOverride',
      'poweredBy',
      '$custom',
      'router',
      'www',
      'favicon',
      '404',
      '500'
    ],

    /****************************************************************************
     *                                                                           *
     * Example custom middleware; logs each request to the console.              *
     *                                                                           *
     ****************************************************************************/

    myRequestLogger: function (req, res, next) {
      req.on("end", function () {
        len = parseInt(res.getHeader('Content-Length'), 10);
        if (isNaN(len)) {
          len = -1;
        } else {
          len = require('bytes')(len);
        }
        line = req.headers['user-agent'] + '\" \"referer:' + (req.headers['referer'] || req.headers['referrer'] || '') + '\" \"' + (req.headers['x-forwarded-for'] || req.ip || (req.socket && req.socket.socket && req.socket.socket.remoteAddress) || req.socket.remoteAddress) + ' ' + req.method + ' ' + (req.originalUrl || req.url) + ' HTTP/' + req.httpVersionMajor + '.' + req.httpVersionMinor + ' ' + res.statusCode + '\" response size : ' + len + ' need time ' + (new Date() - req._startTime) + 'ms.';
        if (res.statusCode >= 500) {
          sails.log.error(line);
        } else if (res.statusCode >= 400) {
          sails.log.error(line);
        } else if (res.statusCode >= 300) {
          sails.log.info(line);
        } else {
          sails.log.info(line);
        }
      });
      return next();
    }


    /***************************************************************************
     *                                                                          *
     * The body parser that will handle incoming multipart HTTP requests. By    *
     * default as of v0.10, Sails uses                                          *
     * [skipper](http://github.com/balderdashy/skipper). See                    *
     * http://www.senchalabs.org/connect/multipart.html for other options.      *
     *                                                                          *
     ***************************************************************************/


    // bodyParser: require('skipper')

  },

  /***************************************************************************
   *                                                                          *
   * The number of seconds to cache flat files on disk being served by        *
   * Express static middleware (by default, these files are in `.tmp/public`) *
   *                                                                          *
   * The HTTP static cache is only active in a 'production' environment,      *
   * since that's the only time Express will cache flat-files.                *
   *                                                                          *
   ***************************************************************************/

  cache: 60*60*2
};
