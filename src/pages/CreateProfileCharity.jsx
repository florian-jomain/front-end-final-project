import React from 'react'
import FormCreateProfileCharity from '../components/Forms/FormCreateProfileCharity'

const CreateProfileHelper = () => {
  return (
    <React.Fragment>
      <section className="signup__page">
        <h2 className="serif centered">Update your profile</h2>
        <p className="centered">Let helpers know more about you.</p>
        <p className="centered">
          Don't want to add this now?
          <a className="colored margin" href="/user-profile">
            Skip for now
          </a>
        </p>

        <div className="form">
          <FormCreateProfileCharity />
        </div>
      </section>
    </React.Fragment>
  )
}

export default CreateProfileHelper
