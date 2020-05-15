import React from 'react'
import Button from '../../components/UI/Button'
import { NavLink } from 'react-router-dom'

function Hero(props) {
  return (
    <React.Fragment>
      <div className="text__container">
        <h1 className="serif">{props.title}</h1>
        <p>{props.text}</p>
        {props.button && (
          <NavLink to={props.buttonLink}>
            <Button type={props.buttonType}>{props.buttonText}</Button>
          </NavLink>
        )}
      </div>
    </React.Fragment>
  )
}

export default Hero
