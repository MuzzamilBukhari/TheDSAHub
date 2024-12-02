import React from "react";
import Button from "../Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen text-white body-font pt-10 sm:pt-24 lg:pt-10 ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg1.png')",
          opacity: 0.65,
          zIndex: -1,
        }}
      />
      <div className="container mx-auto px-5 py-24 sm:pb-8">
        <div className="mt-20 lg:mt-28 md:pl-16 flex flex-col sm:items-center sm:text-center mb-16 sm:mb-0  items-center text-center ">
          <h1 className="title-font text-6xl sm:text-7xl font-bold ">
            Master Data Structures
            <br className="hidden lg:inline-block" />
            <span className="text-primary"> & Algorithms with Ease!</span>
          </h1>
          <p className="font-medium mt-4 leading-relaxed">
            Explore in-depth tutorials, practical examples, and interview tips
            <br />
            to sharpen your problem-solving skills.
          </p>
          <Link className="mt-3" href="/categories" rel="noopener noreferrer">
            <Button
              type={"button"}
              className="mt-4 bg-primary hover:scale-105 duration-200"
            >
              Explore now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
