import React from "react";
import Image from "next/image";

const OurMission = () => {
  return (
    <section className="text-white bg-black/70 body-font">
      <div className="container mx-auto flex px-8 sm:px-20 py-32  md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center">
          <h1 className="title-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 font-bold ">
            Our <span className="underline text-primary">Mission</span>
          </h1>

          <p className="my-8 leading-relaxed text-xl">
            - At <span className="font-semibold text-primary">the DSA Hub</span>{" "}
            , our mission is to make complex topics in Data Structures and
            Algorithms accessible, engaging, and practical for learners of all
            levels. <br /> - Whether you're preparing for interviews or
            enhancing your coding skills, we've got you covered.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-xl"
            alt="hero"
            src="/our-mission.webp"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
