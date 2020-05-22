import React from "react";

export default function Articles() {
  return (
    <div className='articles__container'>
      <div>
        <img
          className='articles__image'
          src='../../media/heart.png'
          alt='icon'
        />
        <h3 className='articles__header serif'>Give</h3>
        <p>
          Dear non-profits. You may not know much about the ins and outs of
          creating a website but don't worry. Our members do and can guide you
          through the process and find out exactly what you need.
        </p>
      </div>
      <div>
        <img
          className='articles__image'
          src='../../media/laptop.png'
          alt='icon'
        />
        <h3 className='articles__header serif'>Learn</h3>
        <p>
          Dear helpers. For each project, you will be part of a team of
          generous, talented, like-minded digital folks, from which you can
          learn skills, tools and the latest hyped-up language.
        </p>
      </div>
      <div>
        <img
          className='articles__image'
          src='../../media/rainbow.png'
          alt='icon'
        />
        <h3 className='articles__header serif'>Care</h3>
        <p>
          Our members care just as much as you do, and they are truly here to
          help. No tip expected. We're like that. We all just want to help the
          best we can with the time we have.
        </p>
      </div>
    </div>
  );
}
