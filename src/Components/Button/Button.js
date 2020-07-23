import React from 'react'
import cs from 'classnames'
import PropTypes from 'prop-types'
import classes from './Button.module.css'

const Button = ({ onClick, children, color = 'primary', disabled = false, className = '' }) => (
    <button
        onClick={onClick}
        className={cs({
            [classes.button]: true,
            [classes.primary]: color === 'primary',
            [classes.secondary]: color === 'secondary',
            [classes.selected]: color === 'selected',
            [classes.disabled]: disabled,
            [className]: true
        })}
        disabled={disabled}>
        {children}
    </button>
)

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    color: PropTypes.oneOf([ 'primary', 'secondary', 'selected' ]),
    disabled: PropTypes.bool
}

export default Button
