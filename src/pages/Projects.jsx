import React, { Component } from "react";
import ProjectCard from "../components/UI/ProjectCard";
import Filter from "../components/UI/Filter";
import axios from "axios";
import { Link } from "react-router-dom";
import InfoCard from "../components/UI/InfoCard";

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
    let InfoCardText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi qui alias a eligendi voluptatum accusantium inventore quis reiciendis officiis corrupti possimus repudiandae, labore harum facere nihil incidunt deleniti et illum magnam? Magni dignissimos ea, voluptas et facere porro odio, hic eos voluptatibus iste, optio totam illum pariatur ullam incidunt.";

    let InfoCardImage = "../../media/teammates-3.svg";

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
