import React from 'react'
import FormSignupCharity from '../components/Forms/FormSignupCharity'

const SignupCharity = () => {
  return (
    <React.Fragment>
      <section className="signup__page">
        <h2 className="serif centered">Sign up as non-profit</h2>
        <p className="centered">
          Bring your project idea to life. Draw power from digital volunteers to
          do good.
        </p>
        <div className="form">
          <FormSignupCharity />
        </div>
        <p className="centered">
          Already have an account?
          <a className="colored margin" href="/signin">
            Log in
          </a>
        </p>
      </section>
    </React.Fragment>
  )
}

export default SignupCharity
