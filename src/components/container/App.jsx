import React, {
  Component
} from 'react';
import './App.css';
import Number from '../number/Number';
import NumberChanged from '../numberChanged/NumberChanged';
import { CopyToClipboard } from 'react-copy-html-to-clipboard/lib/Component';
import validateNumber from '../utils/validateNumber';
import checkIfString from '../utils/checkIfString';

class App extends Component {

  state = {
    number: '',
    placeholder: 'enter your number',
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: validateNumber(value) ? value : '',
      placeholder: checkIfString(value) ? 'only numbers allowed' : "enter your number"
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
        <div className='number-to-bit-container'>
          <label htmlFor='number' className='number-to-bit_label'>Convert integer to binary</label>
          <input type="text" onChange={this.onInputChange} value={this.state.number} className='number-to-bit_input'
            placeholder={this.state.placeholder} id='number' name='number' />
          <div className='number-to-bit_number-wrapper'>
            {numberToBit}
          </div>
          <CopyToClipboard text={(this.state.number >>> 0).toString(2)}>
            <button className='number-to-bit_button'>Copy</button>
          </CopyToClipboard>
        </div>
        <NumberChanged number={this.state.number} />
      </div >
    )
  }
}

export default App;