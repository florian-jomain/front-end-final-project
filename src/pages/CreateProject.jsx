import React from "react";
import FormCreateProject from "../components/Forms/FormCreateProject";

const CreateProject = () => {
  return (
    <React.Fragment>
      <section className='signup__page'>
        <h2 className='serif centered'>Create a project</h2>
        <p className='centered'>
          
        </p>
        <div className='form'>
          <FormCreateProject />
        </div>
      </section>
    </React.Fragment>
  );
};

export default CreateProject;