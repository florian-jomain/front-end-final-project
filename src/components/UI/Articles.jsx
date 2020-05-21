import React from "react";

export default function Articles() {
  return (
    <div className='articles__container'>
      <div>
        <img
          className='articles__image'
          src='../../media/avatar.png'
          alt='icon'
        />
        <h3 className='articles__header serif'>Friendly</h3>
        <p>
          You may not know much about the ins and outs of creating a website but
          don't worry, if you don't our members do and can guide you through the
          process and find out exactly what you need.
        </p>
      </div>
      <div>
        <img
          className='articles__image'
          src='../../media/avatar.png'
          alt='icon'
        />
        <h3 className='articles__header serif'>Fast</h3>
        <p>
          You may be hoping to have your website ready in a short amount of
          time, that is why we have created a "team" feature, where several
          people can come together to create your project.
        </p>
      </div>
      <div>
        <img
          className='articles__image'
          src='../../media/avatar.png'
          alt='icon'
        />
        <h3 className='articles__header serif'>Free</h3>
        <p>
          Our members care just as much as you do, and no remuneration will be
          expected. Everyone here just wants to help as best as they can with
          the time they can spare.
        </p>
      </div>
    </div>
  );
}
