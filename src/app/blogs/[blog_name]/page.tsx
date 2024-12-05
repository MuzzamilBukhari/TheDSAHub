const BlogPage = async ({ params }: { params: { blog_name: string } }) => {
  const slug = params.blog_name;
  console.log(slug);
  return <div className="mt-32">{slug}: this is blog</div>;
};

export default BlogPage;
