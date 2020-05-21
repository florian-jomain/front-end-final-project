import React from 'react'
import FormEditProject from '../components/Forms/FormEditProject'
import { Redirect } from 'react-router-dom'

const EditProject = (props) => {
  if (!props.location.aboutProps) {
    return <Redirect to="/user-profile" />
  } else {
    return (
      <React.Fragment>
        <section className="signup__page">
          <h2 className="serif centered">Edit your project</h2>
          <p className="centered"></p>
          <div className="form">
            <FormEditProject project={props.location.aboutProps.project} />
          </div>
        </section>
      </React.Fragment>
    )
  }
}
export default EditProject
