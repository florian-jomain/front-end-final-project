import React from 'react'
import { NavLink } from 'react-router-dom'
import { withUser } from '../components/Auth/withUser'
import apiHandler from '../api/apiHandler'
import Button from '../components/UI/Button'
import Tippy from '../components/UI/Tippy'

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

  function DropdownContent({ hide }) {
    return (
      <React.Fragment>
        <div className="dropdown">
          <a href="/user-profile">Profile page</a>
          <p onClick={handleLogout}>Logout</p>
        </div>
      </React.Fragment>
    )
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
              <Tippy
                content={<DropdownContent />}
                appendTo="parent"
                animation="fade"
                interactive={true}
                delay={(null, 200)}
                hideOnClick={false}
              >
                <div className="user__menu">
                  <div className="user__image round__image navbar__image">
                    <img src={context.user.image} alt="" />
                  </div>

                  {context.user && context.user.name}
                  <div className="chevron">
                    <img src="../../media/chevron.svg" alt="" />
                  </div>
                </div>
              </Tippy>
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
