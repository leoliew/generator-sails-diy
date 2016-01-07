/**
 * 404 (Not Found) Response
 *
 * The requested resource could not be found but may be available again in the future.
 * Subsequent requests by the client are permissible.
 * Used when the requested resource is not found, whether it doesn't exist.
 */

import _ from 'lodash';

export default function (data, config) {
  let response = _.assign({
    code: _.get(config, 'code', 'E_NOT_FOUND'),
    message: _.get(config, 'message', 'The requested resource could not be found but may be available again in the future'),
    data: data || {}
  }, _.get(config, 'root', {}));

  this.res.status(404);
  this.res.jsonx(response);
}
