import React from 'react'
import Hero from '../components/UI/Hero'
import Categories from '../components/UI/Categories'

const Home = () => {
  let HeroText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat turpis sapien at nascetur sed vestibulum aenean et.'

  let HeroImage = '../../media/teammates-1.svg'

  return (
    <React.Fragment>
      <Hero
        title="Lorem ipsum"
        text={HeroText}
        button={true}
        HeroWide={true}
        image={HeroImage}
        buttonType="primary"
        buttonLink="/signup"
        buttonText="Create account"
      />
      <Categories />
    </React.Fragment>
  )
}

export default Home
