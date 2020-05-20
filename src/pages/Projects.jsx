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
    // this.props.location.categoryProps.category?(selectedCategories:[this.props.location.categoryProps.category]):[],
    selectedFrequencies: "All",
    selectedStatus: "All",
  };

  componentDidMount() {
    apiHandler
      .getProjects()
      .then((data) => {
        this.setState({
          projects: data,
        });
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

  handleChange = (event) => {
    let categorySelected = this.state.selectedCategories;

    if (event.target.type === "checkbox" && event.target.checked) {
      categorySelected.push(event.target.value);
    } else if (event.target.type === "checkbox" && !event.target.checked) {
      let index = categorySelected.indexOf(event.target.value);
      categorySelected.splice(index, 1);
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

  render() {
    console.log(this.state);
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
        <InfoCard
          title='In need of digital'
          text={InfoCardText}
          HeroWide={true}
          image={InfoCardImage}
          infoCardColor='paleGreen'
        />
        <div className='Projects'>
          {/* <TextContainer /> */}
          <div className={this.props.className}>
            <form
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              className='Projects__filter '
            >
              <div className='form__group'>
                <p> Category </p>
                <div>
                  <label htmlFor='Covid-19'> Covid - 19 </label>
                  <input type='checkbox' name='category' value='Covid-19' />
                </div>
                <div>
                  <label htmlFor='Education'> Education </label>
                  <input type='checkbox' name='category' value='Education' />
                </div>
                <div>
                  <label htmlFor='Arts'> Arts </label>
                  <input type='checkbox' name='category' value='Arts' />
                </div>
                <div>
                  <label htmlFor='Animals'> Animals </label>
                  <input type='checkbox' name='category' value='Animals' />
                </div>
                <div>
                  <label htmlFor='category'> Environment </label>
                  <input type='checkbox' name='category' value='Environment' />
                </div>
                <div>
                  <label htmlFor='category'> Poverty </label>
                  <input type='checkbox' name='category' value='Poverty' />
                </div>
                <div>
                  <label htmlFor='category'> Equality </label>
                  <input type='checkbox' name='category' value='Equality' />
                </div>
              </div>
              {/* <div className='form__group'>
                    <label htmlFor='skills'>Your skills</label>
                    <TagBox
                      tags={this.state.tags}
                      selected={this.state.selected}
                      onSelect={this.onSelect}
                      removeTag={this.remove}
                      backspaceDelete={true}
                    />
                  </div> */}
              <div className='form__group'>
                <label htmlFor='frequency'> Frequency </label>
                <select name='frequency'>
                  <option value='All'> All </option>
                  <option value='Regular'> Regular </option>
                  <option value='Temporary'> Temporary </option>
                </select>
              </div>
              <div className='form__group'>
                <label htmlFor='status'> Status </label>
                <select name='status'>
                  <option value='All'> All </option>
                  <option value='Full'> Full </option>
                  <option value='Open'> Open </option>
                  <option value='Completed'> Completed </option>
                </select>
              </div>
            </form>
          </div>
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
      </React.Fragment>
    );
  }
}

export default Projects;
