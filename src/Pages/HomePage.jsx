import React from "react";
import Hero from "../components/Hero";
import Container from "../components/UI/Container";
import Heading from "../components/UI/Heading";
import enjoy from "/homepage/enjoyable-place-desktop@2x.jpg";
import locally from "/homepage/locally-sourced-desktop@2x.jpg";
import Card from "../components/UI/Card";
import Menus from "../components/Menus";
const HomePage = () => {
  return (
    <>
      <Hero
        h1Text="Exquisite dining since 1989"
        description="Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse."
      />

      <Container
        h1Text={`Enjoyable place for \n all the family`}
        description={
          "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
        }
        images={enjoy}
        sectionClasses="-mt-24"
      />
      <Container
        sectionClasses="mt-32 flex-row-reverse justify-between"
        h1Text={`The most locally \n sourced food`}
        description={
          "All our ingredients come directly from our farm or local fishery.So you can be sure that you’re eating the freshest, most sustainable food."
        }
        images={locally}
      />
      <Menus/>
    </>
  );
};

export default HomePage;
