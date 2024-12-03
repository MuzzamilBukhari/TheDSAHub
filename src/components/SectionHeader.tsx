import React from "react";

const SectionHeader = ({
  heading,
  tagline,
  className,
}: {
  heading: string;
  tagline: string;
  className?: string;
}) => {
  return (
    <>
      <h1
        className={`title-font text-white text-5xl sm:text-6xl md:text-7xl font-extrabold ${className}`}
      >
        {heading}
      </h1>
      <p className="text-primary mt-2 lg:w-2/3 mx-auto leading-relaxed text-base">
        {tagline}
      </p>
    </>
  );
};

export default SectionHeader;
