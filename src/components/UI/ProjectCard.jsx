import React from "react";

function ProjectCard(props) {
  const { image, title, description, id_tags } = props.project;
  console.log(props.project);
  return (
    <React.Fragment>
      <div className='ProjectCard'>
        <img className='ProjectCard__image' src={image} alt={title} />
        <div className='ProjectCard__text'>
          <h3>{title}</h3>
          <div className='ProjectCard__charity'>
            <h5>{title}</h5>
          </div>
          <div className='ProjectCard__tags'>
            {id_tags.map((tag, index) => (
              <p key={index} className='ProjectCard__tag'>
                {tag.label}
              </p>
            ))}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectCard;
