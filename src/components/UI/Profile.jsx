import React from 'react'
import { withUser } from '../../components/Auth/withUser'
import Button from '../../components/UI/Button'
import { NavLink } from 'react-router-dom'

function Profile(props) {
  const { context } = props

  return (
    <React.Fragment>
      <section className="Profile">
        <div className="Profile__header">
          <div className="Profile__image">
            <div className="user__image round__image">
              <img src={context.user.image} alt={context.user.username} />
            </div>
            <NavLink to={'/helpers/edit/' + context.user.username}>
              <Button type="secondary">Edit profile</Button>
            </NavLink>
          </div>
          <div className="Profile__info">
            <h2>{context.user.username}</h2>
            {context.user.location ? (
              <div className="Profile__location">
                <img src="../../media/location.svg" alt="" />
                <p>{context.user.location}</p>
              </div>
            ) : null}
            <div className="Profile__bio">
              {context.user.bio ? (
                <p>{context.user.bio}</p>
              ) : (
                <p>Edit your profile to add a bio about yourself</p>
              )}
            </div>
          </div>
        </div>
        <div className="Profile__content">
          <div className="Profile__side">
            <div className="info__box">
              <h5>Skills</h5>
              {context.user.skills.length > 1 ? (
                <ul>
                  {context.user.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              ) : (
                <p>Edit your profile to add your skills</p>
              )}
            </div>
            <div className="info__box">
              <h5>Social</h5>

              {context.user.links.length > 1 ? (
                <ul>
                  {context.user.links.map((link) => (
                    <li key={link}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={'https://' + link}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Edit your profile to add links</p>
              )}
            </div>
          </div>
          <div className="Profile__projects">
            <div className="tabs">
              <h4>Active projects</h4>
              <h4>Inactive projects</h4>
            </div>
            <div className="project">rerwerw</div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default withUser(Profile)
