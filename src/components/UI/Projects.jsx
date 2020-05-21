import React from "react";
import { withUser } from "../Auth/withUser";
import Button from "./Button";
import Tag from "./Tag";
import { NavLink } from "react-router-dom";

function Projects(props) {
  const { context } = props;

  if (!props.projects) return null;
  if (
    props.projects.id_projects.length === 0 &&
    context.user &&
    context.user.userType === "helper"
  )
    return (
      <div className='emptyStateProjects'>
        <img src='../../media/teammates-5.svg' alt='empty state' />
        <p>You have no projects</p>
        <NavLink to={"/projects"}>
          <Button type='tertiary'>Browse projects to join</Button>
          <p></p>
        </NavLink>
      </div>
    );
  if (
    props.projects.id_projects.length === 0 &&
    context.user &&
    context.user.userType === "charity"
  )
    return (
      <div className='emptyStateProjects'>
        <img src='../../media/teammates-5.svg' alt='empty state' />
        <p>You have no projects</p>
        <NavLink to={"/create-project"}>
          <Button type='tertiary'>Create a project</Button>
        </NavLink>
      </div>
    );

  if (props.projects.id_projects.length === 0)
    return (
      <div className='emptyStateProjects'>
        <img src='../../media/teammates-5.svg' alt='empty state' />
        <p>You have no projects</p>
      </div>
    );
  else {
    return (
      <React.Fragment>
        <div className='project'>
          {props.projects.id_projects.map((project) => (
            <NavLink to={"/projects/" + project._id}>
              <div className='ProjectCard' key={project.title}>
                <img
                  className='ProjectCard__image'
                  src={project.image}
                  alt={project.title}
                />
                <div className='ProjectCard__text'>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>

                <div className='ProjectCard__tags'>
                  {project.skills.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))}
                </div>
                <p>{project.description}</p>

                <NavLink
                  to={{
                    pathname: 'edit-project/' + project._id,
                    aboutProps: {
                      project: project,
                    },
                  }}
                >
                  <Button type="primary">Edit project</Button>
                </NavLink>
              </div>
            </NavLink>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default withUser(Projects);
