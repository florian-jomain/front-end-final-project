import React from "react";
import apiHandler from "../api/apiHandler";
import UserContext from "../components/Auth/UserContext";
import BackButton from "../components/UI/BackButton";
import SkillsCard from "../components/UI/SkillsCard";
import TeamMembersCard from "../components/UI/TeamMembersCard";
import Charity from "../components/UI/Charity";
import ApplicationPopUp from "../components/Forms/ApplicationPopUp";

export default class SingleProject extends React.Component {
  static contextType = UserContext;

  state = {
    project: null,
    showPopup: false,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    apiHandler
      .getOneProject(id)
      .then((data) => {
        console.log("C'est ma data get one project", data);
        this.setState({ project: data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  updateProject = (project) => {
    console.log("Je suis la fonction");
    this.setState({ project: project });
  };

  render() {
    console.log("Je suis le this.State", this.state.project);
    if (!this.context.user) {
      return null;
    }
    if (!this.state.project) {
      return (
        <div className='loading'>
          Loading...
          <span role='img' aria-label='zzz'>
            😴
          </span>
        </div>
      );
    } else {
      const {
        category,
        description,
        id_owner,
        id_teamMembers,
        image,
        skills,
        title,
      } = this.state.project;

      console.log(id_teamMembers);

      return (
        <div className='singleProject'>
          <div className='singleProject__leftColumn'>
            <BackButton />
            <h1>{title}</h1>
            <Charity
              className='singleProject__charity'
              charityName={id_owner.username}
              charityImage={id_owner.image}
            />
            <h5 className='singleProject__category'>{category}</h5>
            <p className='singleProject__charity-bio'>{description}</p>
            <img className='singleProject__image' src={image} alt={title} />
            <p className='singleProject__project-description'>{description}</p>
          </div>
          {this.context.isLoggedIn && (
            <div className='singleProject__rightColumn'>
              <TeamMembersCard members={id_teamMembers} />
              <SkillsCard skills={skills} />
              <button
                onClick={() => this.togglePopup()}
                className='primaryButton'
              >
                Apply to this project
              </button>
            </div>
          )}
          {!this.context.isLoggedIn && (
            <div className='singleProject__rightColumn'>
              <TeamMembersCard members={id_teamMembers} />
              <SkillsCard skills={skills} />
            </div>
          )}
          {this.state.showPopup ? (
            <ApplicationPopUp
              members={id_teamMembers}
              id={this.state.project._id}
              togglePopup={this.togglePopup}
              updateProject={this.updateProject}
            />
          ) : null}
        </div>
      );
    }
  }
}
