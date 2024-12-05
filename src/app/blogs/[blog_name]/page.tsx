import { BlogPageComp } from "@/components";

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  return (
    <>
      <BlogPageComp slug={slug} />;
    </>
  );
};

export default BlogPage;
