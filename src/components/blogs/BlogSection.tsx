import Link from "next/link";
import React from "react";
import Button from "../Button";
import { SectionHeader, BlogCard } from "../";

const BlogSection = () => {
  return (
    <section className="text-gray-300 body-font bg-black/90">
      <div className="container px-5 py-20 mx-auto ">
        <div className="items-center text-center pt-10 pb-20">
          <SectionHeader
            heading="All Blogs"
            tagline="Explore in-depth guides, tips, and insights into Data Structures and Algorithms."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-0">
          <BlogCard
            title="Mastering Recursion: Breaking Down Complex Problems"
            desc="Learn how recursion simplifies code and solves intricate problems with elegance."
          />
          <BlogCard
            title="Graphs 101: Connecting Data Efficiently"
            desc="Dive into the world of graphs—representations, traversals, and how they power modern algorithms."
          />
          <BlogCard
            title="Arrays: The Cornerstone of Problem-Solving"
            desc="Learn why arrays are essential for every programmer. Discover their operations, common pitfalls, and optimization techniques."
          />
          <BlogCard
            title="Mastering Recursion: Breaking Down Complex Problems"
            desc="Learn how recursion simplifies code and solves intricate problems with elegance."
          />
          <BlogCard
            title="Graphs 101: Connecting Data Efficiently"
            desc="Dive into the world of graphs—representations, traversals, and how they power modern algorithms."
          />
          <BlogCard
            title="Arrays: The Cornerstone of Problem-Solving"
            desc="Learn why arrays are essential for every programmer. Discover their operations, common pitfalls, and optimization techniques."
          />
          <BlogCard
            title="Mastering Recursion: Breaking Down Complex Problems"
            desc="Learn how recursion simplifies code and solves intricate problems with elegance."
          />
          <BlogCard
            title="Graphs 101: Connecting Data Efficiently"
            desc="Dive into the world of graphs—representations, traversals, and how they power modern algorithms."
          />
          <BlogCard
            title="Arrays: The Cornerstone of Problem-Solving"
            desc="Learn why arrays are essential for every programmer. Discover their operations, common pitfalls, and optimization techniques."
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
