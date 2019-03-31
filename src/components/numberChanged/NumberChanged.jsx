import React, {
    Component
} from 'react';

import Button from '../button/button'

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

    setNumberAfterOperation = () => {
        const { operator, operand } = this.state;
        const { number } = this.props;

        const OPERATIONS = {
            ">>": <p className="number-changed_number">{(parseInt(number) >> parseInt(operand)).toString(2)}</p>,
            ">>>": <p className="number-changed_number">{(parseInt(number) >>> parseInt(operand)).toString(2)}</p>,
            "&": <p className="number-changed_number">{(parseInt(number) & parseInt(operand)).toString(2)}</p>,
            "|": <p className="number-changed_number">{(parseInt(number) | parseInt(operand)).toString(2)}</p>,
            "^": <p className="number-changed_number">{(parseInt(number) ^ parseInt(operand)).toString(2)}</p>,
            "<<": <p className="number-changed_number">{(parseInt(number) << parseInt(operand)).toString(2)}</p>
        }

        return OPERATIONS[operator]
    }

    render() {
        const { operator, placeholder, operand } = this.state;
        const { number } = this.props;

        return (
            <div className="number-changed-container">
                <label htmlFor='number' className='number-changed_label'>Choose your operator and operand</label>
                <input type="text" onChange={this.onNumberInsert} name='operand' value={this.state.operand} placeholder={placeholder} className='number-changed_input' />
                <div className="number-changed_button-container">
                    <Button onClick={this.handleOperationChoice} name='>>' className='number-changed_button' disabled={!(operand !== "" && number !== "")} />
                    <Button onClick={this.handleOperationChoice} name='>>>' className='number-changed_button' disabled={!(operand !== "" && number !== "")} />
                    <Button onClick={this.handleOperationChoice} name='<<' className='number-changed_button' disabled={!(operand !== "" && number !== "")} />
                    <Button onClick={this.handleOperationChoice} name='&' className='number-changed_button' disabled={!(operand !== "" && number !== "")} />
                    <Button onClick={this.handleOperationChoice} name='|' className='number-changed_button' disabled={!(operand !== "" && number !== "")} />
                    <Button onClick={this.handleOperationChoice} name='^' className='number-changed_button' disabled={!(operand !== "" && number !== "")} />
                </div>
                <div className="number-changed_number-container">
                    {(operator !== "" && operand !== "" && number !== "") && this.setNumberAfterOperation(operator)}
                </div>
            </div>
        )
    }
}
export default NumberChanged;