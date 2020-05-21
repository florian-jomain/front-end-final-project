import React, { Component } from "react";
// import Button from "../UI/Button";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";

export class ApplicationPopUp extends Component {
  static contextType = UserContext;

  state = {
    application: "",
    id_project: this.props.id,
    id_applicant: this.context.user._id,
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newTeamMembers = [...this.props.members].map((member) => member._id);
    newTeamMembers.push(this.state.id_applicant);

    apiHandler
      .createApplication(this.state.id_project, this.state)
      .then((apiResponse) => {
        this.props.togglePopup();
      })
      .catch((apiError) => {
        console.log(apiError);
      });

    apiHandler
      .editProject(
        this.state.id_project,
        { id_teamMembers: newTeamMembers },
        { new: true }
      )
      .then((apiResponse) => {
        console.log("Je suis l'API response", apiResponse);
        this.props.updateProject(apiResponse);
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  };

  render() {
    console.log("Le contexte", this.context);
    return (
      <div className='ApplicationPopUp'>
        <span onClick={this.props.togglePopup} class='ApplicationPopUp__close'>
          &times;
        </span>
        <h1 className='ApplicationPopUp__header serif'>
          Tell us all about yourself
        </h1>
        <p className='ApplicationPopUp__copy'>
          We'd love to hear about your motivations,your skills and expectations
          with this project in order to review your application.
        </p>
        <form
          className='ApplicationPopUp__form'
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <textarea
            className='ApplicationPopUp__textarea'
            rows='5'
            placeholder='I want to join the team because...'
            name='application'
          />
          <button className='primaryButton'>Send application</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ApplicationPopUp);
