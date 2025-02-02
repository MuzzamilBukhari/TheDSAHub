import { HeroSection, ContactSection } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection
        title1="Get in Touch"
        title2="with Us"
        subtitle="Have questions, suggestions, or just want to say hello? We'd love to hear from you!"
        bgImg="/contact-hero-bg.webp"
      />
      <ContactSection />
    </>
  );
};

export default page;
