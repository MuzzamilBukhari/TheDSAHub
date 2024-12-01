import React from "react";
import blogsData from "@/data/blogsData";
import parse from "html-react-parser";

const page = () => {
  const blogContent = blogsData[0].content;

  return (
    <>
      {/* <div className="prose lg:prose-xl">{parse(blogContent)}</div> */}
      <div dangerouslySetInnerHTML={{ __html: blogContent }} />
    </>
  );
};

export default page;
