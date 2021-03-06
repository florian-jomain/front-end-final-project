import React from "react";

const Footer = () => {
  return (
    <div className='Footer'>
      <h4 className='Footer__header'>This website was built by</h4>
      <div className='Footer__names'>
        <ul className='Footer__list'>
          <a href='https://github.com/rebeccanoren'>
            <li>
              <img
                className='Footer__github-logo'
                src='../../media/github_logo.svg'
                alt='Github logo'
              />
              Rebecca
            </li>
          </a>
          <a href='https://github.com/guiohm432'>
            <li>
              <img
                className='Footer__github-logo'
                src='../../media/github_logo.svg'
                alt='Github logo'
              />
              Guillaume
            </li>
          </a>
          <a href='https://github.com/lalib19'>
            <li>
              <img
                className='Footer__github-logo'
                src='../../media/github_logo.svg'
                alt='Github logo'
              />
              Louis
            </li>
          </a>
          <a href='https://github.com/florian-jomain'>
            <li>
              <img
                className='Footer__github-logo'
                src='../../media/github_logo.svg'
                alt='Github logo'
              />
              Florian
            </li>
          </a>
        </ul>
      </div>
      <h4 className='Footer__header'>using</h4>
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
