import React, {
  Component
} from 'react';
import './App.css';
import Number from './Number'

class App extends Component {

  state = {
    number: '',
  }

  validateNumber = input => {
    const reg = /^\d+$/;
    return reg.test(input)

  };

  onInputChange = (event) => {
    this.setState({
      number: this.validateNumber(event.target.value) ? event.target.value : '',
    })
  }

  render() {
    const integerToBit = (this.state.number >>> 0).toString(2);

    return (
      <div>
        <input type="text" onChange={this.onInputChange} value={this.state.number} />
        {integerToBit.split("").map(el => < Number number={el} />)}
      </div>
    )
  }
}


export default App;