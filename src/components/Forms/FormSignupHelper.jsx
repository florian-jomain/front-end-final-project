import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
// import Button from '../../components/UI/Button'
import ErrorMessageHandler from "./ErrorMessageHandler";

class FormSignUpHelper extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
    username: "",
    userType: "helper",
  };

  handleChange = (event) => {
    const key = event.target.name;
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let errors = { is: false, messages: [] };

    if (!this.state.password || this.state.password.length < 3) {
      errors.is = true;
      errors.messages.push("Password needs to be at least 3 characters");
    }

    if (errors.is) {
      this.setState({ errors: errors.messages });
    } else {
      apiHandler
        .signupHelper(this.state)
        .then((data) => {
          this.context.setUser(data);
          this.props.history.push("/helpers/edit/" + data.username);
        })
        .catch((error) => {
          errors.is = true;
          errors.messages.push(error.response.data.message);
          this.setState({ errors: errors.messages });
        });
    }
  };

  render() {
    return (
      <div>
        {this.state.errors && (
          <ErrorMessageHandler messages={this.state.errors} />
        )}
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className='form__group'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' name='username' />
          </div>
          <div className='form__group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' />
          </div>
          <div className='form__group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' />
          </div>
          <button className='primaryButton'>Get started!</button>
        </form>
      </div>
    );
  }
}

export default withRouter(FormSignUpHelper);
