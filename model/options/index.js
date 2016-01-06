/**
 * Exports object that contains names of options as a key and their configuration objects as a value
 *
 * @example
 * module.exports = {
 *   optionName: {
 *     desc: 'Description for the option',
 *     alias: 'Short name for the option',
 *     type: Boolean || String || Number,
 *     defaults: 'Default value',
 *     hide: false
 *   }
 * };
 */


module.exports = {
  'rest': {
    desc: 'Exposes REST interface to this model',
    type: Boolean,
    defaults: true,
    hide: false
  }
};
