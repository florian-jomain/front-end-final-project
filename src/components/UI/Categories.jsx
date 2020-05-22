import React from "react";
import LinkBox from "../../components/UI/LinkBox";
import apiHandler from "../../api/apiHandler";

export class Categories extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    apiHandler
      .getProjects()
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({ projects: apiResponse });
      })
      .catch((apiError) => console.log(apiError));
  }

  filterAnimals = () => {
    const animalsLength = this.state.projects.filter(
      (project) => project.category === "Animals"
    ).length;
    if (animalsLength < 2) {
      return animalsLength + " project";
    } else {
      return animalsLength + " projects";
    }
  };

  filterEquality = () => {
    const equalityLength = this.state.projects.filter(
      (project) => project.category === "Equality"
    ).length;
    if (equalityLength < 2) {
      return equalityLength + " project";
    } else {
      return equalityLength + " projects";
    }
  };

  filterPoverty = () => {
    const povertyLength = this.state.projects.filter(
      (project) => project.category === "Poverty"
    ).length;
    if (povertyLength < 2) {
      return povertyLength + " project";
    } else {
      return povertyLength + " projects";
    }
  };

  filterEnvironment = () => {
    const environmentLength = this.state.projects.filter(
      (project) => project.category === "Environment"
    ).length;
    if (environmentLength < 2) {
      return environmentLength + " project";
    } else {
      return environmentLength + " projects";
    }
  };

  filterArts = () => {
    const artsLength = this.state.projects.filter(
      (project) => project.category === "Arts"
    ).length;
    if (artsLength < 2) {
      return artsLength + " project";
    } else {
      return artsLength + " projects";
    }
  };

  filterEducation = () => {
    const educationLength = this.state.projects.filter(
      (project) => project.category === "Education"
    ).length;
    if (educationLength < 2) {
      return educationLength + " project";
    } else {
      return educationLength + " projects";
    }
  };

  filterCovid = () => {
    const covidLength = this.state.projects.filter(
      (project) => project.category === "Covid-19"
    ).length;
    if (covidLength < 2) {
      return covidLength + " project";
    } else {
      return covidLength + " projects";
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className='Categories'>
          <h2 className='serif centered'>Browse projects by category</h2>
          <div className='LinkBox__container'>
            <LinkBox
              emoji='🐯'
              title='Animals'
              text={this.filterAnimals()}
              link='/projects'
              category='Animals'
            />
            <LinkBox
              emoji='🤜🤛'
              title='Equality'
              text={this.filterEquality()}
              link='/projects'
              category='Equality'
            />
            <LinkBox
              emoji='💵'
              title='Poverty'
              text={this.filterPoverty()}
              link='/projects'
              category='Poverty'
            />
            <LinkBox
              emoji='🌱'
              title='Environment'
              text={this.filterEnvironment()}
              link='/projects'
              category='Environment'
            />
            <LinkBox
              emoji='🎨'
              title='Arts'
              text={this.filterArts()}
              link='/projects'
              category='Arts'
            />
            <LinkBox
              emoji='👩🏾‍🏫'
              title='Education'
              text={this.filterEducation()}
              link='/projects'
              category='Education'
            />
            <LinkBox
              emoji='🦠'
              title='Covid-19'
              text={this.filterCovid()}
              link='/projects'
              category='Covid19'
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Categories;
