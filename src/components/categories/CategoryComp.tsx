"use client";
import blogs, { Blog } from "@/data/blogsData";
import React, { useEffect, useState } from "react";
import BlogCard from "../blogs/blogCard";
import SectionHeader from "../SectionHeader";

const CategoryComp = ({ slug }: { slug: string }) => {
  const [categoryBlogs, setCategoryBlogs] = useState<Blog[] | undefined>(
    undefined
  );

  useEffect(() => {
    setCategoryBlogs(blogs.filter((blog) => blog.categorySlug == slug));
  }, [slug]);

  return (
    <section className="text-gray-300 body-font bg-black/90">
      <div className="container px-5 py-20 mx-auto ">
        <div className="items-center text-center pt-10 pb-20">
          <SectionHeader
            heading={slug.toUpperCase()}
            tagline="Explore in-depth guides, tips, and insights into Data Structures and Algorithms."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-0">
          {categoryBlogs?.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              desc={blog.description}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryComp;
