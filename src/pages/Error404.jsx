import React from "react";
import { Link } from "react-router-dom";

const Error404 = (props) => {
  return (
    <div className='404'>
      <Link className='404__link' to='/'>
        <img className='404__image' src='media/404Gif.gif' alt='404'></img>
      </Link>
    </div>
  );
};

export default Error404;
