import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import Button from "../../components/UI/Button";

class FormCreateProfileCharity extends Component {
  static contextType = UserContext;

  state = {
    name: "",
    image: "",
    links: [],
    bio: "",
    location: "",
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
    var formData = new FormData()
    formData.append("image",this.state.image)
    formData.append("links",this.state.links)
    formData.append("name",this.state.name)
    formData.append("bio",this.state.bio)
    formData.append("location",this.state.location)

    apiHandler
      .createProfileCharity(formData)
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
            <div className='form__group'>
              <label htmlFor='username'>Name</label>
              <input type='text' id='name' name='name' />
            </div>
            <div className='form__group'>
              <label htmlFor='image'>Profile Picture</label>
              <input type='file' id='image' name='image' />
            </div>
            <div className='form__group'>
              <label htmlFor='bio'>Your bio</label>
              <input type='text' id='bio' name='bio' />
            </div>
            <div className='form__group'>
              <label htmlFor='location'>Location</label>
              <input type='text' id='location' name='location' />
            </div>
            <div className='form__group'>
              <label htmlFor='links'>Links</label>
              <input type='text' id='links' name='links' />
            </div>
            <Button type='primary'>Create your profile!</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(FormCreateProfileCharity);
