import React from "react";
import { SectionHeader } from "../../";
import ExploreCard from "./ExploreCard";
import categories from "@/data/categoriesData";

const ExploreSection = () => {
  return (
    <section className="text-gray-300 body-font bg-black/90">
      <div className="container px-5 py-20 mx-auto ">
        <div className="items-center text-center pt-10 pb-20">
          <SectionHeader
            heading="Explore"
            tagline="Unravel the World of Data Structures and Algorithms – One Topic at a Time!"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <ExploreCard
              key={category.id}
              category={category.name}
              title={category.title}
              desc={category.description}
              btnText={category.btnText}
              btnLink={category.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
