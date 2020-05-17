import React from "react";
import FormCreateProfileCharity from "../components/Forms/FormCreateProfileCharity";

const CreateProfileHelper = () => {
  return (
    <React.Fragment>
      <section className='signup__page'>
        <h2 className='serif centered'>Create your profile</h2>
        <p className='centered'>
          Let helpers know more about you
        </p>
        <div className='form'>
          <FormCreateProfileCharity />
        </div>
      </section>
    </React.Fragment>
  );
};

export default CreateProfileHelper;