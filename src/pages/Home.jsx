import React from "react";
import Hero from "../components/UI/Hero";
import Categories from "../components/UI/Categories";
import InfoCard from "../components/UI/InfoCard";
import Articles from "../components/UI/Articles";
import Footer from "../components/UI/Footer";

const Home = () => {
  let HeroText =
    "We connect volunteer designers and developers with charities who need help achieving their digital transformation.";

  let InfoCardText =
    "Digital transformation can be challenging for charities. Today, more than half of them do not have a clear digital strategy, and access to digital tools is still limited for some. We think we can help.";

  let HeroImage = "../../media/teammates-1.svg";
  let InfoCardImage = "../../media/teammates-3.svg";

  return (
    <React.Fragment>
      <Hero
        title='Helping the helpers'
        text={HeroText}
        button={true}
        HeroWide={true}
        image={HeroImage}
        buttonType='primary'
        buttonLink='/signup'
        buttonText='Get started'
      />
      <Categories />
      <InfoCard
        title='We all need digital'
        text={InfoCardText}
        HeroWide={true}
        image={InfoCardImage}
        infoCardColor='paleYellow'
      />
      <Articles />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
