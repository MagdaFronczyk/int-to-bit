import React, {
    Component
} from 'react';

import './NumberChanged.css'

class NumberChanged extends Component {
    state = {
        shiftNumber: '',
        placeholder: 'enter your number',
        operator: ''
    }

    onNumberInsert = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: this.validateNumber(value) ? value : '',
            placeholder: this.checkIfString(value) ? 'letters not allowed' : 'enter your number',
        });
    }

    handleShiftChoice = (event) => {
        const { name } = event.target;
        this.setState({
            operator: name,
        })
    }

    validateNumber = input => {
        const reg = /^\d+$/;
        return reg.test(input);
    };

    checkIfString = input => {
        const reg = /[^0-9]/;
        return reg.test(input);
    }

    render() {
        const { operator, placeholder, shiftNumber } = this.state;
        const { number } = this.props;

        let numberAfterShift;

        if (operator === ">>") {
            numberAfterShift = (<p>{(parseInt(number) >> parseInt(shiftNumber)).toString(2)}</p>);
        } else if (operator === ">>>") {
            numberAfterShift = (<p>{(parseInt(number) >>> parseInt(shiftNumber)).toString(2)}</p>);
        } else {
            numberAfterShift = (<p>{(parseInt(number) << parseInt(shiftNumber)).toString(2)}</p>)
        }

        return (
            <div className='main-container_changedNumber-wrapper'>
                <label htmlFor='number' className='main-container_label'>Shift</label>
                <input type="text" onChange={this.onNumberInsert} name='shiftNumber' value={this.state.shiftNumber} className='main-container_input' placeholder={placeholder} />
                <button onClick={this.handleShiftChoice} name='>>' className='main-container_button '>{`>>`}</button>
                <button onClick={this.handleShiftChoice} name='>>>' className='main-container_button'>{`>>>`}</button>
                <button onClick={this.handleShiftChoice} name='<<' className='main-container_button'>{`<<`}</button>
                {(operator !== "" && shiftNumber !== "" && number !== "") && numberAfterShift}
            </div>
        )
    }
}
export default NumberChanged;