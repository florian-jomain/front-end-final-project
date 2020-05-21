import React from 'react'
import Charity from './Charity'
// import { NavLink } from 'react-router-dom'

function Projects(props) {
  console.log(props.projects)

  if (!props.projects) return null
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
              <div className="ProjectCard__text">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>

              <div className="ProjectCard__charity">
                <Charity
                  charityName={project.id_owner.username}
                  charityImage={project.id_owner.image}
                />
              </div>
              {/* <div className="ProjectCard__tags">
                {project.skills.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div> */}
              <p className="ProjectCard__description">{project.description}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default Projects