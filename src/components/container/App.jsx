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
    const { name, value } = event.target;
    this.setState({
      [name]: this.validateNumber(value) ? value : '',
      placeholder: this.checkIfString(value) ? 'only numbers allowed' : "enter your number"
    })
  }


  render() {

    const { number } = this.state;

    const numberToBit = (
      number !== "" && parseInt(number).toString(2).split("").map((el, index) =>
        < Number number={el} key={index} />)
    );

    return (
      <div className='main-container'>
        <label htmlFor='number' className='main-container_label'>Convert integer to binary</label>
        <input type="text" onChange={this.onInputChange} value={this.state.number} className='main-container_input'
          placeholder={this.state.placeholder} id='number' name='number' />
        <div className='main-container_number-wrapper'>
          {numberToBit}
        </div>
        <CopyToClipboard text={(this.state.number >>> 0).toString(2)}>
          <button className='main-container_button'>Copy</button>
        </CopyToClipboard>
        {/* <div className='main-container_changedNumber-wrapper'>
          <label htmlFor='number' className='main-container_label'>Shift</label>
          <input type="text" onChange={this.onNumberInsert} name='shiftNumber' value={this.state.shiftNumber} className='main-container_input' />
          <button onClick={this.handleShiftChoice} name='>>' className='main-container_button '>{`>>`}</button>
          <button onClick={this.handleShiftChoice} name='>>>' className='main-container_button'>{`>>>`}</button>
          <button onClick={this.handleShiftChoice} name='<<' className='main-container_button'>{`<<`}</button>
          {numberChanged}
        </div> */}
        <NumberChanged number={this.state.number} />
      </div >
    )
  }
}

export default App;