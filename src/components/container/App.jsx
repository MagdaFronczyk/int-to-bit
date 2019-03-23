import React, {
  Component
} from 'react';
import './App.css';
import Number from '../number/Number'

class App extends Component {

  state = {
    number: '',
    placeholder: 'enter your number'
  }

  validateNumber = input => {
    const reg = /^\d+$/;
    return reg.test(input);
  };

  checkIfString = input => {
    const reg = /[^0-9]/;
    return reg.test(input);
  }

  onInputChange = (event) => {
    this.setState({
      number: this.validateNumber(event.target.value) ? event.target.value : '',
      placeholder: this.checkIfString(event.target.value) ? 'only numbers allowed' : "enter your number"
    })
  }

  render() {

    const number = (
      this.state.number !== "" && (this.state.number >>> 0).toString(2).split("").map((el, index) =>
        < Number number={el} key={index} />)
    )

    return (
      <div className='main-container'>
        <label htmlFor='number' className='main-container_label'>Convert integer to binary</label>
        <input type="text" onChange={this.onInputChange} value={this.state.number} className='main-container_input'
          placeholder={this.state.placeholder} id='number' />
        <div className='main-container_number-wrapper'>
          {number}
        </div>
      </div>
    )
  }
}


export default App;