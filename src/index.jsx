import { Component } from 'react'
import copy from 'json-deep-copy'

export default class FormMaster extends Component {
  constructor (props) {
    super(props)
    this.state = copy(props.initState)
  }

  renderConfig = (config, i) => {
    return (
      <div className='fm-config'>
        {config.name}
      </div>
    )
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
