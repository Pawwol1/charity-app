import React from "react";
import HomeAboutUs from "./HomeAboutUs/HomeAboutUs";
import HomeContact from "./HomeContact/HomeContact";
import HomeCTA from "./HomeCTA/HomeCTA";
import HomeSteps from "./HomeSteps/HomeSteps";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import HomeWhoWeHelp from "./HomeWhoWeHelp/HomeWhoWeHelp";
import MainMenu from "./MainMenu/MainMenu";

export default function Home() {
  return (
    <>
      <MainMenu />
      <HomeCTA />
      <HomeThreeColumns />
      <HomeSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
    </>
  );
}
