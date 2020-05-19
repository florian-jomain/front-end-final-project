import React from "react";

function Charity(props) {
  return (
    <div className='Charity'>
      <div className='Charity__rounded-div'>
        <img
          className='Charity__image'
          src={props.charityImage}
          alt={props.charityName}
        />
      </div>
      <p className='Charity__text'>{props.charityName}</p>
    </div>
  );
}

export default Charity;
