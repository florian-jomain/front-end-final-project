import React from "react";

function Tag(props) {
  return (
    <React.Fragment>
      <p className='Tag'>{props.tag}</p>
    </React.Fragment>
  );
}

export default Tag;
