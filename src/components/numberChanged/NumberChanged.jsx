import React, {
    Component
} from 'react';

import './NumberChanged.css'

class NumberChanged extends Component {
    state = {
        operand: '',
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

    handleOperationChoice = (event) => {
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
        const { operator, placeholder, operand } = this.state;
        const { number } = this.props;

        let numberAfterShift;

        if (operator === ">>") {
            numberAfterShift = (<p>{(parseInt(number) >> parseInt(operand)).toString(2)}</p>);
        } else if (operator === ">>>") {
            numberAfterShift = (<p>{(parseInt(number) >>> parseInt(operand)).toString(2)}</p>);
        } else if (operator === "&") {
            numberAfterShift = (<p>{(parseInt(number) & parseInt(operand)).toString(2)}</p>);
        } else if (operator === "|") {
            numberAfterShift = (<p>{(parseInt(number) | parseInt(operand)).toString(2)}</p>);
        } else if (operator === "^") {
            numberAfterShift = (<p>{(parseInt(number) ^ parseInt(operand)).toString(2)}</p>);
        } else {
            numberAfterShift = (<p>{(parseInt(number) << parseInt(operand)).toString(2)}</p>)
        }

        return (
            <div>
                <label htmlFor='number'>Shift</label>
                <input type="text" onChange={this.onNumberInsert} name='operand' value={this.state.operand} placeholder={placeholder} />
                <button onClick={this.handleOperationChoice} name='>>'>{`>>`}</button>
                <button onClick={this.handleOperationChoice} name='>>>'>{`>>>`}</button>
                <button onClick={this.handleOperationChoice} name='<<'>{`<<`}</button>
                <button onClick={this.handleOperationChoice} name='&'>{`&`}</button>
                <button onClick={this.handleOperationChoice} name='|'>{`|`}</button>
                <button onClick={this.handleOperationChoice} name='^'>{`^`}</button>
                {(operator !== "" && operand !== "" && number !== "") && numberAfterShift}
            </div>
        )
    }
}
export default NumberChanged;