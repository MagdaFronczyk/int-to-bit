import React from 'react';
import PropTypes from 'prop-types';
import './button.css'

const Button = (props) => {
    return (
        <button onClick={props.onClick} name={props.name} className={props.className} disabled={props.disabled}>{props.name}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool
}

export default Button;