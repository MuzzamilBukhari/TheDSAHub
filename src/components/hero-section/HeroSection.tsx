import React from "react";
import Button from "../Button";
import Link from "next/link";

const HeroSection = ({
  title1,
  title2,
  subtitle,
  btnText,
  btnLink,
  bgImg,
  className,
}: {
  title1: string;
  title2?: string;
  subtitle: string;
  btnText?: string;
  btnLink?: URL;
  bgImg: string;
  className?: string;
}) => {
  return (
    <section
      className={`relative bg-cover bg-center h-screen text-white body-font pt-0 sm:pt-24 lg:pt-10 ${className} `}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImg})`,
          opacity: 0.25,
          zIndex: -1,
        }}
      />
      <div className="container mx-auto px-5 py-24 sm:pb-8">
        <div className="mt-20 lg:mt-16 md:pl-16 flex flex-col sm:items-center sm:text-center mb-16 sm:mb-0  items-center text-center ">
          <h1 className="title-font text-5xl sm:text-6xl md:text-7xl font-extrabold lg:w-3/4 ">
            {title1}
            <br />
            <span className="text-primary">{title2}</span>
          </h1>
          <p className="font-medium mt-4 leading-relaxed lg:w-2/5">
            {subtitle}
          </p>
          {btnText && btnLink && (
            <Link className="mt-3" href={btnLink}>
              <Button
                type="button"
                className="mt-4 bg-primary hover:scale-105 duration-200"
              >
                {btnText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
