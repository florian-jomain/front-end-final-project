import React from 'react'
import Button from '../../components/UI/Button'
import { NavLink } from 'react-router-dom'

function TextContainer(props) {
  return (
    <React.Fragment>
      <div className="text__container">
        <h1 className="serif">{props.content.title}</h1>
        <p>{props.content.text}</p>
        {props.content.button && (
          <NavLink to={props.content.buttonLink}>
            <Button type={props.content.buttonType}>
              {props.content.buttonText}
            </Button>
          </NavLink>
        )}
      </div>
    </React.Fragment>
  )
}

export default TextContainer
