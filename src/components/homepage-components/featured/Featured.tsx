import React from "react";
import { Button, SectionHeader, BlogCard } from "../../";
import Link from "next/link";
import blogs from "@/data/blogsData";

const FeatureSection = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured);
  return (
    <section className="text-gray-300 body-font bg-black/90">
      <div className="container px-5 py-20 mx-auto ">
        <div className="items-center text-center pt-10 pb-20">
          <SectionHeader
            heading="Featured Posts"
            tagline="Trending Now: Must-Read Posts for Every DSA Enthusiast!"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-0">
          {featuredBlogs.map((blog) => (
            <BlogCard
              title={blog.title}
              desc={blog.description}
              slug={blog.slug}
            />
          ))}
        </div>

        <div className="flex justify-center items-center  pt-16">
          <Link href="/blogs">
            <Button
              type={"button"}
              className="mt-4 bg-primary hover:scale-105 duration-200"
            >
              See all
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FeatureSection;
