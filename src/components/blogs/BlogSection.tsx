"use client";

import React from "react";
import { SectionHeader, BlogCard } from "../";
import blogs from "@/data/blogsData";

const BlogSection = () => {
  // const { blogsData } = useBlogs();
  return (
    <section className="text-gray-300 body-font bg-black/90">
      <div className="container px-6 py-20 mx-auto ">
        <div className="items-center text-center pt-10 pb-20">
          <SectionHeader
            heading="All Blogs"
            tagline="Explore in-depth guides, tips, and insights into Data Structures and Algorithms."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
          {blogs?.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              slug={blog.slug}
              desc={blog.description}
              imgUrl={blog.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
