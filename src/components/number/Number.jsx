import React, {
  Component
} from 'react';

import './Number.css'

class Number extends Component {

  render() {
    return (
      <p className='number-wrapper_number'>{parseInt(this.props.number).toString(2)}</p>
    )
  }
}
export default Number;