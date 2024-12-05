import { BlogPageComp } from "@/components";

const BlogPage = async ({ params }: { params: { blog_name: string } }) => {
  const slug = params.blog_name;
  return (
    <>
      <BlogPageComp slug={slug} />;
    </>
  );
};

export default BlogPage;
