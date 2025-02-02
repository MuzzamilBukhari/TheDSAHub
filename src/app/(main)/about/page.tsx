import {
  CreatorAbout,
  HeroSection,
  OurMission,
  ThankyouSection,
} from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection
        title1="About "
        title2="DSA Hub"
        subtitle="A journey into the world of Data Structures and Algorithms."
        bgImg="/about-hero-bg1.webp"
      />
      <OurMission />
      <CreatorAbout />
      <ThankyouSection />
    </>
  );
};
export default page;
