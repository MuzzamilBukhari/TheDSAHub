import React from "react";

const ThankyouSection = () => {
  return (
    <section className="body-font bg-black ">
      <div className="container px-5 py-24 mx-auto flex flex-col items-center text-center">
        <div className="w-full mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold title-font mb-6 ">
            Thank You{" "}
            <span className="text-primary underline"> For Visiting</span>
          </h1>
          <p className="lg:w-1/2 mx-auto leading-relaxed text-lg text-white">
            Your support inspires us to continue creating and sharing valuable
            content.
          </p>
        </div>
        <div className="w-full border-t border-white my-8 "></div>
        <div className="w-full bg-gradient-to-l from-primary to-txtcolor p-6 rounded-lg shadow-md">
          <p className="text-black italic text-2xl mb-4">
            “Code is like humor. When you have to explain it, it’s bad.”
          </p>
          <p className="text-black font-semibold text-lg">— Cory House</p>
        </div>
      </div>
    </section>
  );
};

export default ThankyouSection;
