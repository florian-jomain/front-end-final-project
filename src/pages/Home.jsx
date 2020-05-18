import React from 'react'
import Hero from '../components/UI/Hero'
import Categories from '../components/UI/Categories'
import InfoCard from '../components/UI/InfoCard'

const Home = () => {
  let HeroText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat turpis sapien at nascetur sed vestibulum aenean et.'

  let InfoCardText =
    'Digital transformation can be challenging for charities. Today, more than half of them do not have a clear digital strategy, and access to digital tools is still limited for some. We’re here to help.'

  let HeroImage = '../../media/teammates-1.svg'
  let InfoCardImage = '../../media/teammates-3.svg'

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
      <InfoCard
        title="In need of digital"
        text={InfoCardText}
        HeroWide={true}
        image={InfoCardImage}
        infoCardColor="paleYellow"
      />
    </React.Fragment>
  )
}

export default Home
