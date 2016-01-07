/**
 * 400 (Bad Request) Response
 *
 * The request cannot be fulfilled due to bad syntax.
 * General error when fulfilling the request would cause an invalid state.
 * Domain validation errors, missing data, etc.
 */

import _ from 'lodash';

export default function (data, config) {
  let response = _.assign({
    code: _.get(config, 'code', 'E_BAD_REQUEST'),
    message: _.get(config, 'message', 'The request cannot be fulfilled due to bad syntax'),
    data: data || {}
  }, _.get(config, 'root', {}));

  this.res.status(400);
  this.res.jsonx(response);
}
