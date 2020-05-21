import React from "react";
import Tag from "./Tag";

function HelperCard(props) {
  const { image, username, skills, bio } = props.helper;

  return (
    <React.Fragment>
      <div className='HelperCard'>
        <img className='HelperCard__image' src={image} alt={username} />
        <div className='HelperCard__text'>
          <h3>{username}</h3>
          <div className='HelperCard__tags'>
            {skills.map((tag, index) => (
              <Tag className='HelperCard__tag' key={index} tag={tag} />
            ))}
          </div>
          <p className='HelperCard__description'>{bio}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HelperCard;
