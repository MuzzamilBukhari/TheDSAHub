"use client";
import blogs, { Blog } from "@/data/blogsData";
import React, { useEffect, useState } from "react";
import BlogCard from "../blogs/BlogCard";
import SectionHeader from "../ui/SectionHeader";
import categories, { Category } from "@/data/categoriesData";

const CategoryComp = ({ slug }: { slug: string }) => {
  const [categoryBlogs, setCategoryBlogs] = useState<Blog[] | null>(null);
  const [category, setCategory] = useState<Category | undefined>();

  useEffect(() => {
    setCategory(categories.filter((category) => category.slug === slug)[0]);

    setCategoryBlogs(blogs.filter((blog) => blog.categorySlug == slug));
  }, [slug]);

  return category ? (
    <section className="text-gray-300 body-font bg-black/90">
      <div className="container px-5 py-20 mx-auto ">
        <div className="items-center text-center pt-10 pb-20">
          <SectionHeader
            heading={category.title}
            tagline={category.description}
          />
        </div>

        {/* Blogs */}
        {categoryBlogs?.length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-0">
            {categoryBlogs?.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                desc={blog.description}
                slug={blog.slug}
                imgUrl={blog.imgUrl}
              />
            ))}
          </div>
        ) : (
          <div className=" text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white my-20">
            No blogs for now
          </div>
        )}
      </div>
    </section>
  ) : (
    <div className="w-full h-screen flex justify-center items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
      No Category found
    </div>
  );
};

export default CategoryComp;
