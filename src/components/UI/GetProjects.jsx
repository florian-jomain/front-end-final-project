import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";
import Projects from "./Projects";

export class GetProject extends Component {
  state = {
    projects: null,
  };

  componentDidMount() {
    // const id = this.props.match.params.id
    apiHandler
      .getOneHelper(this.props.id)
      .then((apiResponse) => {
        this.setState({ projects: apiResponse });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Projects projects={this.state.projects}></Projects>
      </React.Fragment>
    );
  }
}
export default GetProject;
