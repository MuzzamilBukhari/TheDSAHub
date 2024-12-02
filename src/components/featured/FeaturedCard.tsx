import React from "react";
import Image from "next/image";
import Button from "../Button";

const FeaturedCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="p-4">
      <div className="h-full border-2 border-secondary rounded-lg overflow-hidden">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="/images/bg.jpg"
          alt="blog"
          width={721}
          height={401}
        />
        <div className="p-6 ">
          <div className="h-40 sm:h-48">
            <h1 className="title-font text-lg font-medium text-secondary mb-3">
              {title}
            </h1>
            <p className="leading-relaxed mb-3">{desc}</p>
          </div>
          <div className="flex justify-center">
            <Button type="button" className="bg-primary">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
