import React from 'react'
import FormCreateProfileHelper from '../components/Forms/FormCreateProfileHelper'

const CreateProfileHelper = () => {
  return (
    <React.Fragment>
      <section className="signup__page">
        <h2 className="serif centered">Create your profile</h2>
        <p className="centered">
          Let charities and other helpers know more about you.
        </p>
        <p className="centered">
          Don't want to add this now?
          <a className="colored margin" href="/user-profile">
            Skip for now
          </a>
        </p>
        <div className="form">
          <FormCreateProfileHelper />
        </div>
      </section>
    </React.Fragment>
  )
}

export default CreateProfileHelper
