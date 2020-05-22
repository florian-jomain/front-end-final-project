import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import ProjectCard from '../components/UI/ProjectCard'
import apiHandler from '../../api/apiHandler'
import Projects from './Projects'

// import InfoCard from '../components/UI/InfoCard'

export class PublicProfile extends Component {
  state = {
    user: null,
  }
  componentDidMount() {
    const id = this.props.match.params.id

    apiHandler
      .getOneHelper(id)
      .then((apiResponse) => {
        this.setState({ user: apiResponse })
      })
      .catch((apiError) => {
        console.log(apiError)
      })
  }

  render() {
    if (!this.state.user) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    } else {
      return (
        <React.Fragment>
          <section className="Profile">
            <div className="Profile__header">
              <div className="Profile__image">
                <div className="user__image round__image">
                  <img
                    src={this.state.user.image}
                    alt={this.state.user.username}
                  />
                </div>
              </div>
              <div className="Profile__info">
                <h2>{this.state.user.username}</h2>
                {this.state.user.location ? (
                  <div className="Profile__location">
                    <img src="../../media/location.svg" alt="" />
                    <p>{this.state.user.location}</p>
                  </div>
                ) : null}
                <div className="Profile__bio">
                  {this.state.user.bio ? (
                    <p>{this.state.user.bio}</p>
                  ) : (
                    <p>This user don't have a bio :(</p>
                  )}
                </div>
              </div>
            </div>
            <div className="Profile__content">
              <div className="Profile__side">
                {this.state.user.skills ? (
                  <div className="info__box">
                    <h5>Skills</h5>
                    {this.state.user.skills.length > 0 ? (
                      <ul>
                        {this.state.user.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No skills</p>
                    )}
                  </div>
                ) : null}

                {this.state.user.links ? (
                  <div className="info__box">
                    <h5>Links</h5>

                    {this.state.user.links.length > 0 ? (
                      <ul>
                        {this.state.user.links.map((link) => (
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
                      <p>No links</p>
                    )}
                  </div>
                ) : null}
              </div>
              <div className="Profile__projects">
                <div className="tabs">
                  <h3>{this.state.user.username}s projects</h3>
                </div>

                <Projects projects={this.state.user} />
              </div>
            </div>
          </section>
        </React.Fragment>
      )
    }
  }
}

export default withRouter(PublicProfile)
