import React from "react";
import Button from "../UI/Button";

const ApplicationPopUp = () => {
  return (
    <div className='ApplicationPopUp'>
      <h1 className='ApplicationPopUp__header serif'>Tell us about yourself</h1>
      <p className='ApplicationPopUp__copy'>
        We'd love to hear about your motivations,your skills and expectations
        with this project in order to review your application.
      </p>
      <textarea
        className='ApplicationPopUp__textarea'
        rows='5'
        placeholder='I want to join the team because...'
      />
      <Button className='ApplicationPopUp__button' type='primary'>
        Send application
      </Button>
    </div>
  );
};

export default ApplicationPopUp;
