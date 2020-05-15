import React, { Component } from 'react'
import Button from '../components/UI/Button'
import { NavLink } from 'react-router-dom'

class Funnel extends Component {
  state = {
    userType: null,
  }

  render() {
    return (
      <div>
        <NavLink to="/signup/helper">
          <Button type="tertiary">Sign up as helper</Button>
        </NavLink>

        <NavLink to="/signup/charity">
          <Button type="tertiary"> Sign up as non-profit</Button>
        </NavLink>
      </div>
    )
  }
}

export default Funnel
