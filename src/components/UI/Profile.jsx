import React from 'react'
import { withUser } from '../../components/Auth/withUser'

function Profile(props) {
  const { context } = props
  return <React.Fragment>{/* <h1>{context.user.image}</h1> */}</React.Fragment>
}

export default Profile
