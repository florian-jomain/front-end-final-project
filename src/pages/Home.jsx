import React from "react";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import ButtonSecondary from "../components/UI/ButtonSecondary";

const Home = (props) => {
  return (
    <div>
      <h1>Home Page ∆</h1>
      <ButtonPrimary text="Primary"></ButtonPrimary>
      <ButtonSecondary text="Secondary"></ButtonSecondary>
    </div>
  );
};

export default Home;
