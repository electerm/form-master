/**
 * default config
 */

export default {
  // required
  name: 'config with all options',

  // optional
  desc: 'config desc',

  // optional, if omitted, it equals with name
  key: 'configWithAllOptions',

  // optional, default is string, must be one of
  /*
  [
    'string', 'number', 'hotkey', 'select', 'switch', 'mixed', 'pathChooser'
  ]
  */
  type: 'string',

  // required, default value
  default: '',

  // can reset or not, by default can be reset
  canReset: true,

  // optional props pass to Input or other antd form Element
  optionalProps: {},

  // optional, label render
  labelRender: (conf) => conf.name,

  // optional, title render for label
  labelTitleRender: (conf) => conf.desc || conf.name,

  // optional, callback after value changed, default is null
  onValueChange: (changedValue, state, props) => {

  },

  // optional, appended doms, default is null
  appendRender: (state, props) => {

  },

  // optional, prepend doms, default is null
  prependRender: (state, props) => {

  }
}
