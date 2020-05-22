import React from "react";
import { Link } from "react-router-dom";

const Error404 = (props) => {
  return (
    <div class='error-page'>
      <img
        class='error-page__image'
        src='./media/404.svg'
        alt='cute evil cat'
      />
      <h1>We're sorry this happened.</h1>
      <p>Please try again.</p>
      <Link to='/'>
        <button className='error-page__button primaryButton'>
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default Error404;
