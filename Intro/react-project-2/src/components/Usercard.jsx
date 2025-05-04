import React from 'react'
import './usercard.css'
const Usercard = (props) => {
  return (
    <div className='usercard'>
      <p id='title'>{props.name}</p>
      <img id='user-img' src={props.image} alt="reelstalker" />
      <p id='desc'>{props.desc}</p>
    </div>
  )
}

export default Usercard
