import React from 'react'
import './Button.css';
const Button = (props) => {
  return (
    <div>
        {props.children}
      <button id='btn' onClick={props.incrementCount}>
        {props.text}
      </button>
    </div>
  )
}

export default Button
