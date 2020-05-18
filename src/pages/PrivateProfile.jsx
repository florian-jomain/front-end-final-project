import React from 'react'
import Profile from '../components/UI/Profile'

const PrivateProfile = (props) => {
  return (
    <div>
      <h1>Protected profile</h1>
      <Profile />
    </div>
  )
}

export default PrivateProfile
