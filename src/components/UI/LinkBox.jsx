import React from 'react'
import { NavLink } from 'react-router-dom'

function LinkBox(props) {
  return (
    <div className="LinkBox">
      <span>{props.emoji}</span>
      <h4 className="serif">{props.title}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default LinkBox
