import React from 'react'
import FormSignin from '../components/Forms/FormSignin'

const Signin = (props) => {
  return (
    <React.Fragment>
      <section className="signup__page">
        <h2 className="serif centered">Welcome back</h2>
        <p className="centered">We’re happy to see you again.</p>
        <div className="form">
          <FormSignin />
        </div>
        <p className="centered">
          Not a member yet?
          <a className="colored margin" href="/signup">
            Sign up
          </a>
        </p>
      </section>
    </React.Fragment>
  )
}

export default Signin
