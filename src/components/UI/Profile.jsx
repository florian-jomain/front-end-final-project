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
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
                alt=""
              />
              <Button type="secondary">Edit profile</Button>
            </div>
          </div>
          <h2>{context.user.name}</h2>
          <p>{context.user.username}</p>
        </div>
      </section>
    </React.Fragment>
  )
}

export default withUser(Profile)
