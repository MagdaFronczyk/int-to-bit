import React, {
  Component
} from 'react';

class Number extends React.Component {
  render() {

    return (
      <div>
        <p>{(this.props.number >>> 0).toString(2)}</p>
      </div>
    )
  }
}
export default Number;