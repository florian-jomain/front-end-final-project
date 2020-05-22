import React from "react";

const Footer = () => {
  return (
    <div className='Footer'>
      <h4>About DEV4|3</h4>
      <p className='Footer__header'>This website was built with</p>
      <div className='Footer__logos'>
        <img
          className='Footer__react'
          src='../../media/React_logo.svg'
          alt='React'
        />
        <img src='../../media/HTML_logo.svg' alt='HTML' />
        <img src='../../media/CSS_logo.svg' alt='CSS' />
        <img src='../../media/JS_logo.svg' alt='JavaScript' />
        <img src='../../media/Node_logo.svg' alt='Node' />
      </div>
    </div>
  );
};

export default Footer;
