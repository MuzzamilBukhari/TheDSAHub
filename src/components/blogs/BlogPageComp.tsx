"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import blogs from "@/data/blogsData";
import { Blog } from "@/data/blogsData";
import CommentSection from "../comments/CommentsSection";


const BlogPageComp = ({ slug }: { slug: string }) => {
  const [blog, setBlog] = useState<Blog | undefined>();
  useEffect(() => {
    setBlog(blogs.find((blog) => blog.slug === slug));
    console.log(blog);
  }, [slug, blog]);

  return blog ? (
    <section>
      <div className="max-w-4xl mx-auto p-6 pt-28 text-white">
        <div className="mb-8">
          <Image
            src={blog.imgUrl}
            alt={blog.title}
            width={600}
            height={288}
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg mb-6">{blog.description}</p>
          {/* Render HTML Content */}
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="text-base leading-relaxed space-y-4"
          />
        </div>

      
        <CommentSection />
      </div>
    </section>
  ) : (
    <div>No blog found</div>
  );
};

export default BlogPageComp;
