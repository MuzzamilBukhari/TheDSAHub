import React from "react";
import { SectionHeader } from "../../";
import ExploreCard from "./ExploreCard";

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
          <ExploreCard
            category="ARRAYS"
            title="The Foundation of Programming"
            desc="Start your DSA journey by mastering arrays and understanding their practical uses."
            btnText="Learn more"
          />
          <ExploreCard
            category="LINKED LIST"
            title="Dynamic Data at Its Best"
            desc="Explore how linked lists work and solve problems efficiently with pointers."
            btnText="Explore topic"
          />
          <ExploreCard
            category="STACKS & QUEUES"
            title="Manage Your Data"
            desc="Learn how to implement stacks and queues and their applications in problem-solving."
            btnText="Dive in"
          />
          <ExploreCard
            category="TREES"
            title="Hierarchical Data Simplified"
            desc="Understand tree structures, traversal methods, and their use cases."
            btnText="Explore more"
          />
          <ExploreCard
            category="GRAPHS"
            title="Connecting the Dots"
            desc="Decode graphs, algorithms, and their role in complex problem-solving."
            btnText="Learn Graphs"
          />
          <ExploreCard
            category="SORTING ALGOS"
            title="Organize Your Data"
            desc="Master sorting techniques like quicksort, mergesort, and more."
            btnText="Start learning"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
