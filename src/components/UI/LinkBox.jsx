import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/UI/Button'

function LinkBox(props) {
  
  return (
    <React.Fragment>
      <NavLink to={{pathname:props.link,categoryProps:{category:props.category}}} >
        <div className="LinkBox">
          <span>{props.emoji}</span>
          <h4 className="serif">{props.title}</h4>
          <p>{props.text}</p>

          {props.button && (
            <Button type={props.buttonType}>{props.buttonText}</Button>
          )}
        </div>
      </NavLink>
    </React.Fragment>
  )
}

export default LinkBox
