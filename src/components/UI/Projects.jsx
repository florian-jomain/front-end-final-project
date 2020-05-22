<<<<<<< HEAD
import React from 'react'
import { withUser } from '../Auth/withUser'
import Button from './Button'
import Tag from './Tag'
import { NavLink } from 'react-router-dom'
import apiHandler from '../../api/apiHandler'
import { Redirect } from 'react-router-dom'
=======
import React from "react";
import { withUser } from "../Auth/withUser";
import Button from "./Button";
import Tag from "./Tag";
import { NavLink } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
>>>>>>> b6530939cb51497b3099e6e274d31ff28e03d896

function Projects(props) {
  const { context } = props;

<<<<<<< HEAD
  function handleDelete(id) {
    console.log('deleting')
    apiHandler
      .deleteProject(id)
      .then((apiResponse) => {
        return window.location.reload(true)
=======
  const handleDelete = (id) => {
    apiHandler
      .deleteProject(id)
      .then((apiResponse) => {
        const newItemsData = this.state.itemsData.filter((item, index) => {
          return item._id !== id;
        });
        this.setState({ itemsData: newItemsData });
>>>>>>> b6530939cb51497b3099e6e274d31ff28e03d896
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  };

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

  if (!context.user)
    return (
      <div className='emptyStateProjects'>
        <img src='../../media/teammates-5.svg' alt='empty state' />
        <p>This user have no projects</p>
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
<<<<<<< HEAD
            <div className="ProjectCard" key={project.title}>
              <img
                className="ProjectCard__image"
                src={project.image}
                alt={project.title}
              />

              <NavLink to={'/projects/' + project._id}>
                <div className="ProjectCard__text">
=======
            <NavLink to={"/projects/" + project._id}>
              <div className='ProjectCard' key={project.title}>
                <img
                  className='ProjectCard__image'
                  src={project.image}
                  alt={project.title}
                />

                <div className='ProjectCard__text'>
>>>>>>> b6530939cb51497b3099e6e274d31ff28e03d896
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </NavLink>

<<<<<<< HEAD
              <div className="ProjectCard__tags">
                {project.skills.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
              <p>{project.description}</p>

              {props.context.user._id === project.id_owner ? (
                <div>
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

                  <button
                    type="delete"
                    onClick={() => handleDelete(project._id)}
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
=======
                <div className='ProjectCard__tags'>
                  {project.skills.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))}
                </div>
                <p>{project.description}</p>

                {props.context.user._id === project.id_owner ? (
                  <div>
                    <NavLink
                      to={{
                        pathname: "edit-project/" + project._id,
                        aboutProps: {
                          project: project,
                        },
                      }}
                    >
                      <Button type='primary'>Edit project</Button>
                    </NavLink>

                    <Button type='delete' onClick={handleDelete(project._id)}>
                      Delete project
                    </Button>
                  </div>
                ) : null}
              </div>
            </NavLink>
>>>>>>> b6530939cb51497b3099e6e274d31ff28e03d896
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default withUser(Projects);
