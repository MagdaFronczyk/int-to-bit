import React, {
    Component
} from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handleOperationChoice} name={props.name} className={props.className}>{props.name}</button>
    )
}

export default Button;