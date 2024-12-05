import React from "react";
import { SectionHeader, BlogCard } from "../";
import blogs from "@/data/blogsData";

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
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              slug={blog.slug}
              desc={blog.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
