import React from "react";
import blogsData from "@/data/blogsData";
import parse from "html-react-parser";

const page = () => {
  return (
    <>
      <div className="flex justify-center  mt-32 flex-col">
        {parse(blogsData[0].content)}
      </div>
    </>
  );
};

export default page;
