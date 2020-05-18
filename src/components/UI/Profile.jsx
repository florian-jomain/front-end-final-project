import React from 'react'
import { withUser } from '../../components/Auth/withUser'
import Button from '../../components/UI/Button'

function Profile(props) {
  const { context } = props
  console.log(props)
  return (
    <React.Fragment>
      <section className="Profile">
        <div className="Profile__header">
          <div className="Profile__image">
            <div className="user__image round__image">
              <img src={context.user.image} alt={context.user.name} />
            </div>
            <Button type="secondary">Edit profile</Button>
          </div>
          <div className="Profile__info">
            <h2>{context.user.username}</h2>
            <div className="Profile__location">
              <img src="../../media/location.svg" alt="" />
              <p>{context.user.username}</p>
            </div>

            <div className="Profile__bio">
              <p>
                Adipisicing cillum ex eu officia. Incididunt ad voluptate
                occaecat ullamco adipisicing et et deserunt. Ad exercitation
                aute sit deserunt duis nostrud reprehenderit excepteur labore
                exercitation eiusmod excepteur aute.
              </p>
            </div>
          </div>
        </div>
        <div className="Profile__content">
          <div className="Profile__side">
            <div className="info__box">
              <h5>Skills</h5>bla bla
            </div>
            <div className="info__box">
              <h5>Social</h5>bla bla 2
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
