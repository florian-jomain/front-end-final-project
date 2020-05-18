import React, { Component } from "react";
import ProjectCard from "../components/UI/ProjectCard";
import Filter from "../components/UI/Filter";
import axios from "axios";
import { Link } from "react-router-dom";
// import TextContainer from "../components/UI/TextContainer";

export class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/projects")
      .then((apiResponse) => {
        this.setState({ projects: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className='Projects'>
          {/* <TextContainer /> */}
          <Filter className='Projects__filter' />
          <div className='Projects__cards'>
            {this.state.projects.map((project, index) => (
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
