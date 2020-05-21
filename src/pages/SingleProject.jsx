import React from "react";
import apiHandler from "../api/apiHandler";
import UserContext from "../components/Auth/UserContext";
import BackButton from "../components/UI/BackButton";
import SkillsCard from "../components/UI/SkillsCard";
import TeamMembersCard from "../components/UI/TeamMembersCard";
import Charity from "../components/UI/Charity";
import ApplicationPopUp from "../components/Forms/ApplicationPopUp";
import { Link } from "react-router-dom";

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
    this.setState({ project: project });
  };

  render() {
    // if (!this.context.user) {
    //   return null;
    // }

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
      const teamMembers = this.state.project.id_teamMembers.map(
        (teamMember) => teamMember._id
      );
      const {
        category,
        description,
        id_owner,
        id_teamMembers,
        image,
        skills,
        title,
      } = this.state.project;

      return (
        <div className='singleProject'>
          <div className='singleProject__leftColumn'>
            <BackButton />
            <h1>{title}</h1>
            <Link to={"/user/" + this.state.project.id_owner._id}>
              <Charity
                className='singleProject__charity'
                charityName={id_owner.username}
                charityImage={id_owner.image}
              />
            </Link>
            <h5 className='singleProject__category'>{category}</h5>
            <p className='singleProject__project-description'>{description}</p>
            <img className='singleProject__image' src={image} alt={title} />
          </div>

          <div className='singleProject__rightColumn'>
            <TeamMembersCard members={id_teamMembers} />
            {this.state.project.skills[0] !== "" && (
              <SkillsCard skills={skills} />
            )}
            {this.context.isLoggedIn &&
              this.context.user.userType === "helper" &&
              !teamMembers.includes(this.context.user._id) && (
                <button
                  onClick={() => this.togglePopup()}
                  className='primaryButton'
                >
                  Apply to this project
                </button>
              )}
            {this.context.isLoggedIn &&
              this.context.user.userType === "charity" &&
              this.state.project.id_owner._id === this.context.user._id && (
                <button className='reviewButton'>
                  Review {this.state.project.id_teamMembers.length} applications
                </button>
              )}
          </div>

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
