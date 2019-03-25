import React, {
  Component
} from 'react';

import './Number.css'

class Number extends Component {

  render() {
    let color = "#" + ((1 << 24) * Math.random() | 0).toString(16);

    return (
      <p className='number-wrapper_number' style={{ color: `${color}` }}>{parseInt(this.props.number).toString(2)}</p>
    )
  }
}
export default Number;