import React from "react";

export default async function BlogPage({
  params,
}: {
  params: { blog_name: string };
}) {
  const { blog_name } = params;
  console.log(blog_name);

  return <div className="mt-32">{blog_name} page</div>;
}
