import React from 'react'
import { withUser } from '../../components/Auth/withUser'
import Button from '../../components/UI/Button'
import { NavLink } from 'react-router-dom'

function Profile(props) {
  const { context } = props

  if (!context.user) {
    return <p>Loading...</p>
  } else {
    return (
      <React.Fragment>
        <section className="Profile">
          <div className="Profile__header">
            <div className="Profile__image">
              <div className="user__image round__image">
                <img src={context.user.image} alt={context.user.username} />
              </div>

              {context.user.userType === 'charity' ? (
                <NavLink to={'/charities/edit/' + context.user.username}>
                  <Button type="secondary">Edit profile</Button>
                </NavLink>
              ) : null}

              {context.user.userType === 'helper' ? (
                <NavLink to={'/helpers/edit/' + context.user.username}>
                  <Button type="secondary">Edit profile</Button>
                </NavLink>
              ) : null}
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
              {context.user.skills ? (
                <div className="info__box">
                  <h5>Skills</h5>
                  {context.user.skills.length > 0 ? (
                    <ul>
                      {context.user.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>Edit your profile to add your skills</p>
                  )}
                </div>
              ) : null}

              {context.user.links ? (
                <div className="info__box">
                  <h5>Links</h5>

                  {context.user.links.length > 0 ? (
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
              ) : null}
            </div>
            <div className="Profile__projects">
              <div className="tabs">
                <h4> Active projects </h4> <h4> Inactive projects </h4>
              </div>
              <div className="project"> rerwerw </div>{' '}
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default withUser(Profile)
