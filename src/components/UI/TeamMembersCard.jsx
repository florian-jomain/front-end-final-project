import React from "react";

const TeamMembersCard = (props) => {
  console.log("Dans la card", props.members);

  return (
    <div className='teamMembersCard'>
      <h5 className='teamMembersCard__header'>Team members</h5>
      <div className='teamMembersCard__images'>
        {props.members.map((member, index) => (
          <div key={index} className='teamMembersCard__rounded-div'>
            <img
              key={index}
              className='teamMembersCard__image'
              src={member.image}
              alt={member.username}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersCard;
