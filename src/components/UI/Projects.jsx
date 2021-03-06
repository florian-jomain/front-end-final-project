import React from 'react'
import { withUser } from '../Auth/withUser'
import Button from './Button'
import Tag from './Tag'
import { NavLink } from 'react-router-dom'
import apiHandler from '../../api/apiHandler'

function Projects(props) {
  const { context } = props

  function handleDelete(id) {
    console.log('deleting')
    apiHandler
      .deleteProject(id)
      .then((apiResponse) => {
        return window.location.reload(true)
      })
      .catch((apiError) => {
        console.log(apiError)
      })
  }

  if (!props.projects) return null
  if (
    props.projects.id_projects.length === 0 &&
    context.user &&
    context.user.userType === 'helper'
  )
    return (
      <div className="emptyStateProjects">
        <img src="../../media/teammates-5.svg" alt="empty state" />
        <p>You have no projects</p>
        <NavLink to={'/projects'}>
          <Button type="tertiary">Browse projects to join</Button>
          <p></p>
        </NavLink>
      </div>
    )
  if (
    props.projects.id_projects.length === 0 &&
    context.user &&
    context.user.userType === 'charity'
  )
    return (
      <div className="emptyStateProjects">
        <img src="../../media/teammates-5.svg" alt="empty state" />
        <p>You have no projects</p>
        <NavLink to={'/create-project'}>
          <Button type="tertiary">Create a project</Button>
        </NavLink>
      </div>
    )

  if (!context.user)
    return (
      <div className="emptyStateProjects">
        <img src="../../media/teammates-5.svg" alt="empty state" />
        <p>This user has no projects</p>
      </div>
    )

  if (props.projects.id_projects.length === 0)
    return (
      <div className="emptyStateProjects">
        <img src="../../media/teammates-5.svg" alt="empty state" />
        <p>You have no projects</p>
      </div>
    )
  else {
    return (
      <React.Fragment>
        <div className="project">
          {props.projects.id_projects.map((project) => (
            <div className="ProjectCard" key={project.title}>
              <img
                className="ProjectCard__image"
                src={project.image}
                alt={project.title}
              />

              <NavLink to={'/projects/' + project._id}>
                <div className="ProjectCard__text">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </NavLink>

              <div className="ProjectCard__tags">
                {project.skills.length > 0 &&
                  project.skills[0] !== '' &&
                  project.skills.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))}
              </div>
              <p className="desc">{project.description}</p>

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
                    className="deleteButton margin"
                    onClick={() => handleDelete(project._id)}
                  >
                    Delete
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default withUser(Projects)
