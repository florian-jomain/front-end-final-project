import React from "react";
import FormCreateProfileHelper from "../components/Forms/FormCreateProfileHelper";

const CreateProfileHelper = () => {
  return (
    <React.Fragment>
      <section className='signup__page'>
        <h2 className='serif centered'>Create your profile</h2>
        <p className='centered'>
          Let charities and other helpers know more about you
        </p>
        <div className='form'>
          <FormCreateProfileHelper />
        </div>
      </section>
    </React.Fragment>
  );
};

export default CreateProfileHelper;