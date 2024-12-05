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

  return (
    blog && (
      <section>
        <div>
          <Image src={blog.imgUrl} alt={blog.title} width={700} height={700} />
        </div>
        <div>
          <h1>{blog.title}</h1>
          <h2>{blog.description}</h2>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: blog.content }}
          className="text-base leading-relaxed space-y-4"
        />
      </section>
    )
  );
};

export default BlogPageComp;
