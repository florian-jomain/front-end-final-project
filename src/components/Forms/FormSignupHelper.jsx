import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import Button from "../../components/UI/Button";
import TagBox from "../UI/TagBox";

class FormSignUpHelper extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
    tags: [],
    selected: [],
  };

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
    event.preventDefault();

    apiHandler
      .signupHelper(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
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
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' />
          </div>
          <div className='form__group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' />
          </div>
          <div className='form__group'>
            <label htmlFor='tags'>Skills</label>
            <TagBox />
          </div>
          <Button type='primary'>Get started!</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(FormSignUpHelper);