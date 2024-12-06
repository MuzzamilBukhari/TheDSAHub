"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import blogs from "@/data/blogsData";
import { Blog } from "@/data/blogsData";
import { useState } from "react";

const BlogPageComp = ({ slug }: { slug: string }) => {
  const [blog, setBlog] = useState<Blog | undefined>(undefined);

  useEffect(() => {
    setBlog(blogs.find((blog) => blog.slug === slug));
  }, [slug]);

  return blog ? (
    <section>
      <div className="max-w-4xl mx-auto p-6">
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
      </div>
    </section>
  ) : (
    <div>No blog found</div>
  );
};

export default BlogPageComp;
