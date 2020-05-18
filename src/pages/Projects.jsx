import React, { Component } from "react";
import ProjectCard from "../components/UI/ProjectCard";
import axios from "axios";
import { Link } from "react-router-dom";

export class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/projects")
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({ projects: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <div className='filter'></div>
        {this.state.projects.map((project, index) => (
          <Link
            exact
            className='links'
            key={index}
            to={`/projects/${this.state.projects[index]._id}`}
          >
            <ProjectCard key={index} index={index} project={project} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Projects;
