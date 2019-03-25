import React, {
    Component
} from 'react';

import './NumberChanged.css'

class NumberChanged extends Component {
    render() {
        let numberAfterShift;

        console.log(this.props.number, this.props.operator, this.props.shiftNumber)

        if (this.props.operator === ">>") {
            numberAfterShift = (<p>{(parseInt(this.props.number) >> parseInt(this.props.shiftNumber)).toString(2)}</p>);
        } else if (this.props.operator === ">>>") {
            numberAfterShift = (<p>{(parseInt(this.props.number) >>> parseInt(this.props.shiftNumber)).toString(2)}</p>);
        } else {
            numberAfterShift = (<p>{(parseInt(this.props.number) << parseInt(this.props.shiftNumber)).toString(2)}</p>)
        }

        return (
            <div>{numberAfterShift}</div>
        )
    }
}
export default NumberChanged;