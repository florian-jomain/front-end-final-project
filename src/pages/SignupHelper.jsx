import React from "react";
import FormSignUpHelper from "../components/Forms/FormSignupHelper";

const SignupHelper = () => {
  return (
    <React.Fragment>
      <section className='signup__page'>
        <h2 className='serif centered'>Sign up as helper</h2>
        <p className='centered'>
          Get involved. Do something good for the society and meet passionate
          like-minded. Become a digital volunteer today.
        </p>
        <div className='form'>
          <FormSignUpHelper />
        </div>
      </section>
    </React.Fragment>
  );
};

export default SignupHelper;
