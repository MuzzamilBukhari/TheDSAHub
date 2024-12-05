import { BlogPageComp } from "@/components";

const BlogPage = async ({ params }: { params: { blog_name: string } }) => {
  const { blog_name } = params;
  return (
    <>
      <h1>{blog_name}</h1>
      {/* <BlogPageComp slug={blog_name} />; */}
    </>
  );
};

export default BlogPage;
