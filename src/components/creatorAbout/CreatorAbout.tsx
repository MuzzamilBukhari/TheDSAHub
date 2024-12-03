import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const CreatorAbout = () => {
  return (
    <section className="text-white bg-bg2 body-font">
      <div className="flex justify-center items-center gap-12 flex-col px-6 mt-20 py-24 md:mt-0 md:flex-row">
        <div className="w-[300px] rounded-xl">
          {/* Image */}
          <Image
            src="/creator-pic.jpg"
            alt={"profile"}
            className=" rounded-3xl"
            width={400}
            height={500}
          />
        </div>
        <div className=" flex justify-center items-center  md:items-start flex-col">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold title-font text-center">
            Meet <span className="text-primary underline">the creator</span>
          </h1>
          <p className="text-white text-lg leading-relaxed text-left mx-auto max-w-[600px] mt-5">
            Hi, I’m Muzzamil Bukhari, a passionate developer and tech enthusiast
            currently pursuing my second year at university. <br /> - With
            expertise in web development and a deep interest in algorithms, I
            created this platform to help others on their coding journey. <br />{" "}
            - I believe that learning Data Structures and Algorithms shouldn’t
            be intimidating—it should be exciting and approachable. <br /> My
            goal is to break down complex concepts into simple, digestible
            pieces, making them accessible to learners at all levels.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.linkedin.com/in/muzzamilbukhari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-cyan-700 rounded text-lg"
            >
              <FaLinkedin className="w-6 h-6 mr-2" />
              Linked
            </a>
            <a
              href="https://github.com/muzzamilbukhari"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center font-semibold text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg"
            >
              <FaGithub className="w-6 h-6 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorAbout;
