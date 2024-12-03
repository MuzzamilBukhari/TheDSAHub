import React from "react";
import { Button } from "../";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";

const ExploreCard = ({
  category,
  title,
  desc,
  btnText,
}: {
  category: string;
  title: string;
  desc: string;
  btnText: string;
}) => {
  return (
    <div className="p-4 ">
      <div className="h-full bg-primary bg-opacity-90  px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative">
        <div className="h-[190px]  md:h-40">
          <h2 className=" text-xs title-font font-medium text-gray-200 mb-1">
            {category}
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{desc}</p>
        </div>
        <Button type="button" className="border-2 border-gray-300">
          <a className=" inline-flex items-center">
            {btnText}
            <HiOutlineArrowSmRight className="w-5 h-5 mr-1" />
          </a>
        </Button>
        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <span className="text-gray-200 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <IoEyeSharp className="w-4 h-4 mr-1" />
            1.2K
          </span>
          <span className="text-gray-200 inline-flex items-center leading-none text-sm">
            <FaRegCommentDots className="w-4 h-4 mr-1" />6
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
