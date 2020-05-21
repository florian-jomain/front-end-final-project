import React from "react";
import { Link } from "react-router-dom";

const Error404 = (props) => {
  return (
    <div>
      <Link to="/">
      <img className="404" src="media/404Gif.gif" alt="404"></img>
      </Link>
    </div>
  );
};

export default Error404;
