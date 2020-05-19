import React from "react";

const TeamMembersCard = (props) => {
  console.log(props);
  return (
    <div className='teamMembersCard'>
      <h5 className='teamMembersCard__header'>Team members</h5>
      <div className='teamMembersCard__images'>
        <div className='teamMembersCard__image'>
          <img src='' alt='' />
        </div>
      </div>
    </div>
  );
};

export default TeamMembersCard;
