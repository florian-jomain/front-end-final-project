import React, { Component } from "react";
// import apiHandler from "../api/apiHandler";
import SingleProject from "./SingleProject";
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
    return (
      <div>
        <h1>Test</h1>
        {this.state.projects.map((project, index) => (
          <SingleProject key={index} index={index} project={project} />
        ))}
      </div>
    );
  }
}

export default Projects;
