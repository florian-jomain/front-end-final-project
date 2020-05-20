import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import Button from "../components/UI/Button";
import Tippy from "../components/UI/Tippy";

import "../App.scss";

const NavMain = (props) => {
  const [isHoverd, setIsHovered] = React.useState(false);
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
        props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function DropdownContent() {
    return (
      <React.Fragment>
        <div
          className='dropdown'
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseLeave}
        >
          <div className='user__menu'>
            <div className='user__image round__image navbar__image'>
              <img src={context.user.image} alt='' />
            </div>
            <div>
              <span>{context.user.name}</span>
              <span>@{context.user.username}</span>
            </div>
          </div>
          <ul>
            <li>
              <span>
                <a href='/user-profile'>Profile page</a>
              </span>
            </li>
            <li>
              <span onClick={handleLogout}>Logout</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }

  function handleMouseHover() {
    setTimeout(() => {
      setIsHovered(true);
    }, 0);
  }

  function handleMouseLeave() {
    setTimeout(() => {
      setIsHovered(false);
    }, 4000);
  }

  return (
    <nav className='NavMain'>
      <NavLink exact to='/'>
        <h3 className='logo'>dev43</h3>
      </NavLink>

      <ul className='nav-list'>
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to='/ui'>UI</NavLink>
            </li>

            <li>
              <NavLink to='/projects'>Browse projects</NavLink>
            </li>

            <li>
              <Tippy
                content={<DropdownContent />}
                appendTo='parent'
                animation='fade'
                interactive={true}
                delay={(null, 200)}
                hideOnClick={false}
                // trigger="click"
              >
                <div
                  className='user__menu'
                  onMouseEnter={handleMouseHover}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className='user__image round__image navbar__image'>
                    <img src={context.user.image} alt='' />
                  </div>

                  {/* {context.user && context.user.name} */}

                  <div className={`chevron ${isHoverd ? "rotate" : ""}`}>
                    <img src='../../media/chevron.svg' alt='' />
                  </div>
                </div>
              </Tippy>
            </li>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to='/ui'>UI</NavLink>
            </li>

            <li>
              <NavLink to='/projects'>Browse projects</NavLink>
            </li>

            <li>
              <NavLink to='/signup'>Sign up</NavLink>
            </li>

            <li>
              <NavLink className='notActive' to='/signin'>
                <Button type='secondary'>Log in</Button>
              </NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);
