import React, {
  Component
} from 'react';
import './App.css';
import Number from '../number/Number';
import NumberChanged from '../numberChanged/NumberChanged';
import { CopyToClipboard } from 'react-copy-html-to-clipboard/lib/Component';

class App extends Component {

  state = {
    number: '',
    placeholder: 'enter your number',
    shiftNumber: '',
    operator: ''
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

  onNumberInsert = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleShiftChoice = (event) => {
    const { name } = event.target;

    this.setState({
      operator: name,
    })
  }

  render() {

    const { operator, shiftNumber, number } = this.state;

    const numberToBit = (
      number !== "" && parseInt(number).toString(2).split("").map((el, index) =>
        < Number number={el} key={index} />)
    );

    const numberChanged = (
      (number !== "" && operator !== "" && shiftNumber !== "") &&
      < NumberChanged number={number} operator={operator} shiftNumber={shiftNumber} />
    );

    return (
      <div className='main-container'>
        <label htmlFor='number' className='main-container_label'>Convert integer to binary</label>
        <input type="text" onChange={this.onInputChange} value={this.state.number} className='main-container_input'
          placeholder={this.state.placeholder} id='number' />
        <div className='main-container_number-wrapper'>
          {numberToBit}
        </div>
        <CopyToClipboard text={(this.state.number >>> 0).toString(2)}>
          <button className='main-container_copy-button'>Copy</button>
        </CopyToClipboard>
        <div>
          <button onClick={this.handleShiftChoice} name='>>'>{`>>`}</button>
          <button onClick={this.handleShiftChoice} name='>>>'>{`>>>`}</button>
          <button onClick={this.handleShiftChoice} name='<<'>{`<<`}</button>
          <input type="text" onChange={this.onNumberInsert} name='shiftNumber' />
          {numberChanged}
        </div>
      </div >
    )
  }
}

export default App;