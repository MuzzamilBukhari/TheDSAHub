import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../";

const BlogCard = ({
  title,
  desc,
  slug,
  imgUrl,
}: {
  title: string;
  desc: string;
  slug: string;
  imgUrl: string;
}) => {
  return (
    <div className=" p-4">
      <div className="h-full border-2 border-primary rounded-lg overflow-hidden">
        <Image
          className="w-full h-56 object-cover object-center"
          src={imgUrl}
          alt={title}
          width={700}
          height={300}
        />
        <div className="p-6 ">
          <div className="h-[210px] sm:h-[150px] md:h-[205px] lg:h-[230px] xl:h-[190px]">
            <h1 className="title-font text-lg font-semibold text-primary mb-3">
              {title}
            </h1>
            <p className="leading-relaxed mb-3">{desc}</p>
          </div>
          <div className="flex justify-center">
            <Link href={`/blogs/${slug}`}>
              <Button type="button" className="bg-primary">
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
