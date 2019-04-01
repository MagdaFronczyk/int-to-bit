import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';

import './Number.css'

class Number extends Component {

  render() {
    return (
      <p className='number-wrapper_number'>{parseInt(this.props.number).toString(2)}</p>
    )
  }
}

Number.propTypes = {
  number: PropTypes.number
}

export default Number;