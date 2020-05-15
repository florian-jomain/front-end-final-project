import React from 'react'
import { NavLink } from 'react-router-dom'

function LinkBox(props) {
  return (
    <React.Fragment>
      <NavLink to={props.link}>
        <div className="LinkBox">
          <span>{props.emoji}</span>
          <h4 className="serif">{props.title}</h4>
          <p>{props.text}</p>
        </div>
      </NavLink>
    </React.Fragment>
  )
}

export default LinkBox
