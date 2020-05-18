import React from 'react'
import { NavLink } from 'react-router-dom'
import { withUser } from '../components/Auth/withUser'
import apiHandler from '../api/apiHandler'
import Button from '../components/UI/Button'

import '../App.scss'

const NavMain = (props) => {
  const { context } = props

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <h3 className="logo">dev43</h3>
      </NavLink>

      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/ui">UI</NavLink>
            </li>

            <li>
              <NavLink to="/projects">Browse project</NavLink>
            </li>

            <li>
              <img src={context.user.image} alt="" />
              <NavLink to="/user-profile">
                {context.user && context.user.name}
              </NavLink>
            </li>
            <li>
              <p onClick={handleLogout}>Logout</p>
            </li>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/ui">UI</NavLink>
            </li>

            <li>
              <NavLink to="/signup">Sign up</NavLink>
            </li>

            <li>
              <NavLink to="/projects">Browse project</NavLink>
            </li>

            <li>
              <NavLink to="/signin">
                <Button type="secondary">Log in</Button>
              </NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  )
}

export default withUser(NavMain)
