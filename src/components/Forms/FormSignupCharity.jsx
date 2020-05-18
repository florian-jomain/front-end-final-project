import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import Button from "../../components/UI/Button";

class FormSignupCharity extends Component {
  static contextType = UserContext;

  state = {
<<<<<<< HEAD
    email: '',
    password: '',
    username: '',
    name: '',
  }
=======
    email: "",
    password: "",
    username: "",
  };
>>>>>>> 2ee7679a06145c796e1e1b6caeed269a2d64ecb9

  handleChange = (event) => {
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
<<<<<<< HEAD
    event.preventDefault()
    console.log(this.state)
    apiHandler
      .signupCharity(this.state)
      .then((data) => {
        this.context.setUser(data)
        this.props.history.push('/charities/create/' + data._id)
=======
    event.preventDefault();

    apiHandler
      .signupCharity(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/charities/create/" + data._id);
>>>>>>> 2ee7679a06145c796e1e1b6caeed269a2d64ecb9
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className='form__group'>
            <label htmlFor='username'>Username</label>
            <input type='username' id='username' name='username' />
          </div>

          <div className='form__group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' />
          </div>

          <div className='form__group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' />
          </div>

          <Button type='primary'>Get started!</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(FormSignupCharity);
