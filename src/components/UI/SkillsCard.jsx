import React from "react";
import Tag from "./Tag";

const SkillsCard = (props) => {
  return (
    <div className='skillsCard'>
      <h5 className='skillsCard__header'>Required skills</h5>
      <div className='skillsCard__tags'>
        {props.skills.map((skill, index) => (
          <Tag key={index} tag={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
