import React, { Component } from "react";
import ProjectCard from "../components/UI/ProjectCard";
// import Filter from "../components/UI/Filter";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import InfoCard from "../components/UI/InfoCard";

export class Projects extends Component {
  state = {
    projects: [],
    selectedProjects: [],
    category: [
      "Equality",
      "Poverty",
      "Environment",
      "Animals",
      "Arts",
      "Education",
      "Covid-19",
    ],
    frequency: ["Regular", "Temporary"],
    status: ["Full", "Open", "Completed"],
    selectedCategories: [],
    selectedFrequencies: "All",
    selectedStatus: "All",
    Equality: false,
    Poverty: false,
    Environment: false,
    Animals: false,
    Arts: false,
    Education: false,
    Covid19: false,
    categoryClicked: false,
    // tags: options,
    // selected: [],
    // skills: [],
  };

  componentDidMount() {
    apiHandler
      .getProjects()
      .then((apiResponse) => {
        this.setState({
          projects: apiResponse,
        });
        if (!this.props.location.categoryProps) {
          return null;
        }
        if (this.props.location.categoryProps.category) {
          if (this.props.location.categoryProps.category === "Covid19") {
            this.setState({ selectedCategories: ["Covid-19"] });
          } else {
            this.setState({
              selectedCategories: [this.props.location.categoryProps.category],
            });
          }
          this.setState({ [this.props.location.categoryProps.category]: true });
        }
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  filterCategory = (project) => {
    if (this.state.selectedCategories.length) {
      return this.state.selectedCategories.includes(project.category);
    }
    return true;
  };

  filterStatus = (project) => {
    if (this.state.selectedStatus === "All") {
      return true;
    }
    return this.state.selectedStatus.includes(project.status);
  };

  filterFrequency = (project) => {
    if (this.state.selectedFrequencies === "All") {
      return true;
    }
    return this.state.selectedFrequencies.includes(project.frequency);
  };

  // filterSkills = (project) => {
  //   if (project.skills.length === 0) {
  //     return true;
  //   }else if (this.state.skills.includes(project.skills[0])){
  //     return this.state.skills.includes(project.skills[0]);
  //   }else{
  //     return true
  //   }

  // else {let condition = ""
  //   for (let i=0; i<project.skills.length; i++){
  //     condition +=  `${this.state.skills.includes(project.skills[i])}&& `
  //   }
  //   // condition = condition.split(" ").splice(condition.length-2,1).join("")
  //   console.log(condition)
  //   if(condition){
  //     return condition
  //     console.log("here")
  //   }

  // }
  // return this.state.skills.includes(project.skills[0]);
  // let condition = ""
  //   for (let i=0; i<project.skills.length; i++){
  //     condition +=  `${this.state.skills.includes(project.skills[i])}&& `
  //   }
  //   // condition = condition.split(" ").splice(condition.length-2,1).join("")
  //   console.log(condition)
  //   return condition

  handleChange = (event) => {
    let categorySelected = this.state.selectedCategories;

    if (event.target.type === "checkbox" && event.target.checked) {
      categorySelected.push(event.target.value);
      let value = event.target.id;
      this.setState({ [event.target.id]: !this.state[value] });
    } else if (event.target.type === "checkbox" && !event.target.checked) {
      let index = categorySelected.indexOf(event.target.value);
      categorySelected.splice(index, 1);
      let value = event.target.id;
      this.setState({ [event.target.id]: !this.state[value] });
    }
    const value =
      event.target.type === "checkbox" ? categorySelected : event.target.value;

    const key =
      event.target.name === "category"
        ? "selectedCategories"
        : event.target.name === "frequency"
        ? "selectedFrequencies"
        : event.target.name === "status"
        ? "selectedStatus"
        : event.target.name;

    this.setState({
      [key]: value,
    });
  };

  toggleColor = () => {
    this.setState({ categoryClicked: !this.state.categoryClicked });
  };

  render() {
    let InfoCardText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi qui alias a eligendi voluptatum accusantium inventore quis reiciendis officiis corrupti possimus repudiandae, labore harum facere nihil incidunt deleniti et illum magnam? Magni dignissimos ea, voluptas et facere porro odio, hic eos voluptatibus iste, optio totam illum pariatur ullam incidunt.";

    let InfoCardImage = "/media/teammates-3.svg";

    if (!this.state.projects) {
      return null;
    }

    let filteredProjects = this.state.projects
      .filter(this.filterCategory)
      .filter(this.filterFrequency)
      .filter(this.filterStatus);

    return (
      <React.Fragment>
        <div className='Projects'>
          <div className='Projects__infoCard'>
            <InfoCard
              title='In need of digital'
              text={InfoCardText}
              HeroWide={true}
              image={InfoCardImage}
              infoCardColor='paleGreen'
            />
          </div>
          {/* <div className={this.props.className}> */}
          <form
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            className='Projects__filter '
          >
            <h3 className='Filter__header'>Filters</h3>
            <div className='Filter__block'>
              <h5 className='Filter__blockHeader'>Categories</h5>
              <div className='Filter__categoryGroupWrapper'>
                <div className='Filter__categoryGroup'>
                  <label
                    onClick={() => this.changeColor()}
                    className={`Filter_categoryLabel ${this.state.categoryClicked}`}
                    htmlFor='Covid19'
                  >
                    Covid-19
                  </label>
                  <input
                    type='checkbox'
                    name='category'
                    value='Covid-19'
                    id='Covid19'
                    checked={this.state.Covid19}
                  />
                </div>
                <div className='Filter__categoryGroup'>
                  <label
                    onClick={this.changeColor}
                    className='Filter_categoryLabel'
                    htmlFor='Education'
                  >
                    Education
                  </label>
                  <input
                    type='checkbox'
                    name='category'
                    value='Education'
                    id='Education'
                    checked={this.state.Education}
                  />
                </div>
                <div className='Filter__categoryGroup'>
                  <label
                    onClick={this.changeColor}
                    className='Filter_categoryLabel'
                    htmlFor='Arts'
                  >
                    Arts
                  </label>
                  <input
                    type='checkbox'
                    name='category'
                    value='Arts'
                    id='Arts'
                    checked={this.state.Arts}
                  />
                </div>
                <div className='Filter__categoryGroup'>
                  <label
                    onClick={this.changeColor}
                    className='Filter_categoryLabel'
                    htmlFor='Animals'
                  >
                    Animals
                  </label>
                  <input
                    type='checkbox'
                    name='category'
                    value='Animals'
                    id='Animals'
                    checked={this.state.Animals}
                  />
                </div>
                <div className='Filter__categoryGroup'>
                  <label
                    onClick={this.changeColor}
                    className='Filter_categoryLabel'
                    htmlFor='Environment'
                  >
                    Environment
                  </label>
                  <input
                    type='checkbox'
                    name='category'
                    value='Environment'
                    id='Environment'
                    checked={this.state.Environment}
                  />
                </div>
                <div className='Filter__categoryGroup'>
                  <label
                    onClick={this.changeColor}
                    className='Filter_categoryLabel'
                    htmlFor='Poverty'
                  >
                    Poverty
                  </label>
                  <input
                    type='checkbox'
                    name='category'
                    value='Poverty'
                    id='Poverty'
                    checked={this.state.Poverty}
                  />
                </div>
                <div className='Filter__categoryGroup'>
                  <label
                    onClick={this.changeColor}
                    className='Filter_categoryLabel'
                    htmlFor='Equality'
                  >
                    Equality
                  </label>
                  <input
                    type='checkbox'
                    name='category'
                    value='Equality'
                    id='Equality'
                    checked={this.state.Equality}
                  />
                </div>
              </div>
            </div>

            <div className='Filter__block'>
              <h5>
                <label className='Filter__blockHeader' htmlFor='frequency'>
                  Frequency
                </label>
              </h5>
              <select
                className='Filter__select'
                name='frequency'
                id='frequency'
              >
                <option value='All'> All </option>
                <option value='Regular'> Regular </option>
                <option value='Temporary'> Temporary </option>
              </select>
            </div>

            <div className='Filter__block'>
              <h5>
                <label className='Filter__blockHeader' htmlFor='status'>
                  Status
                </label>
              </h5>
              <select className='Filter__select' name='status' id='status'>
                <option value='All'> All </option>
                <option value='Full'> Full </option>
                <option value='Open'> Open </option>
                <option value='Completed'> Completed </option>
              </select>
            </div>
          </form>
          <div className='Projects__cards'>
            {filteredProjects.map((project, index) => (
              <Link
                className='Projects__links'
                key={index}
                to={`/projects/${this.state.projects[index]._id}`}
              >
                <ProjectCard key={index} index={index} project={project} />
              </Link>
            ))}
          </div>
        </div>

        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default Projects;
