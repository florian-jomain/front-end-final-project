import React from "react";

const BackButton = (props) => {
  return (
    <React.Fragment>
      <a href='../projects'>
        <p className='backButton secondaryButton'>← Go back</p>
      </a>
    </React.Fragment>
  );
};

export default BackButton;
