import { BlogPageComp } from "@/components";

const BlogPage = async ({ params }: { params: { blog_name: string } }) => {
  const { blog_name } = params;
  return (
    <>
      <BlogPageComp slug={blog_name} />;
    </>
  );
};

export default BlogPage;
