import React, { Component } from "react";
// import apiHandler from "../api/apiHandler";
import ProjectCard from "../components/UI/ProjectCard";
import axios from "axios";

export class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios
      .get("/api/projects")
      .then((apiResponse) => {
        this.setState({ projects: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    console.log(this.state.projects);
    return (
      <div>
        <h1>Test</h1>
        {this.state.projects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    );
  }
}

export default Projects;
