import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";
import UserContext from "./UserContext";

class UserProvider extends Component {
  state = {
    user: null,
    isLoggedIn: false,
    isLoading: true,
  };

  componentDidMount() {
    apiHandler
      .isLoggedIn()
      .then((data) => {
        this.setState({ user: data, isLoggedIn: true, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ user: null, isLoggedIn: false, isLoading: false });
      });
  }

  setUser = (user) => {
    this.setState({ user, isLoggedIn: true });
  };

  removeUser = () => {
    this.setState({ user: null, isLoggedIn: false });
  };

  render() {
    console.log(this.state.user);
    //  Setup all the values/functions you want to expose to anybody reading
    // from the AuthContext.
    const authValues = {
      user: this.state.user,
      setUser: this.setUser,
      removeUser: this.removeUser,
      isLoggedIn: this.state.isLoggedIn,
      isLoading: this.state.isLoading,
      // userType: this.state.user.userType,
    };

    return (
      <UserContext.Provider value={authValues}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
