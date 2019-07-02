import { Component } from 'react'
import copy from 'json-deep-copy'

export default class FormMaster extends Component {
  constructor (props) {
    super(props)
    this.state = copy(props.initState)
  }

  stringRender = (config, i) => {
    return i
  }

  renderConfig = (config, i) => {
    return this[config.type + 'Render'](config, i)
  }

  render () {
    let { configs, formPorps = {} } = this.props
    return (
      <div className='fm-form-wrap' {...formPorps}>
        {
          configs.map(this.renderConfig)
        }
      </div>
    )
  }
}
