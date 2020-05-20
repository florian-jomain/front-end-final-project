import React from 'react'
import FormEditProfileHelper from '../components/Forms/FormEditProfileHelper'

const EditProfileHelper = () => {
  return (
    <React.Fragment>
      <section className="signup__page">
        <h2 className="serif centered">Edit your profile</h2>
        <p className="centered">
          Let charities and other helpers know more about you.
        </p>
        <p className="centered">
          Don't want to do this now?
          <a className="colored margin" href="/user-profile">
            Skip
          </a>
        </p>
        <div className="form">
          <FormEditProfileHelper />
        </div>
      </section>
    </React.Fragment>
  )
}

export default EditProfileHelper
