import React from "react";
import Hero from "../components/UI/Hero";
import UserFunnel from "../components/UI/UserFunnel";
import InfoCard from "../components/UI/InfoCard";

function Funnel() {
  let HeroText =
    "Are you a charity who needs help defining their digital strategy, developing a new website or creating up a newsletter? A designer or developer willing to give some of their time to causes they believe in?  ";

  let HeroImage = "../../media/teammates-2.svg";

  let InfoCardText =
    "All this digital gibberish can seem a bit daunting at times. If you know you need help but don’t know where to start, get in touch and a member of our team will help you find out exactly what you need.";
  let InfoCardImage = "../../media/teammates-3.svg";

  return (
    <div>
      <Hero
        title='This is where it starts'
        text={HeroText}
        button={false}
        HeroWide={false}
        image={HeroImage}
        buttonType='primary'
        buttonLink='/signup'
        buttonText='Create account'
      />

      <UserFunnel />
      <InfoCard
        title='JavaScript, Rails or C++?'
        text={InfoCardText}
        HeroWide={true}
        image={InfoCardImage}
        infoCardColor='palePink'
      />
    </div>
  );
}

export default Funnel;
