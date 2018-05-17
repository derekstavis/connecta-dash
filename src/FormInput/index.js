import React, { PureComponent, Component } from 'react'
import {
  Input,
} from 'antd'

import './styles.css'

export default class FormInput extends Component {
  // shouldComponentUpdate(prevProp){
  //   console.log(prevProp.name !== this.props.name ||
  //     prevProp.value !== this.props.value)
  //   return prevProp.name !== this.props.name ||
  //   prevProp.value !== this.props.value
  // }

  render = () => {
    const {
      label,
      children,
      error,
      name,
      onChange,
      value,
    } = this.props

    const inputProps = { name, onChange, value };
    return (<div className="form-input">
      <div className='form-input-label'>
        <label className='input-label'>{label}</label>
      </div>
      {children ? React.cloneElement(children, inputProps) : <Input {...inputProps}/>}
      <div className="form-input-error">
        {error}
      </div>
    </div>)
  }
}