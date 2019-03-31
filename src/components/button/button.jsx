import React, {
    Component
} from 'react';

import './button.css'

const Button = (props) => {
    return (
        <button onClick={props.onClick} name={props.name} className={props.className}>{props.name}</button>
    )
}

export default Button;