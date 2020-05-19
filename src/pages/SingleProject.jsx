import React from "react";
import axios from "axios";
import BackButton from "../components/UI/BackButton";
import SkillsCard from "../components/UI/SkillsCard";
import TeamMembersCard from "../components/UI/TeamMembersCard";
import Charity from "../components/UI/Charity";
import ApplicationPopUp from "../components/UI/ApplicationPopUp";

export default class SingleProject extends React.Component {
  state = {
    project: null,
    showPopup: false,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://localhost:4000/api/projects/" + id)
      .then((apiResponse) => {
        this.setState({ project: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
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
          {this.state.showPopup ? (
            <ApplicationPopUp togglePopup={this.togglePopup} />
          ) : null}
        </div>
      );
    }
  }
}
