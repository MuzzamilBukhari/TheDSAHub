import { CategoryComp } from "@/components";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  return <CategoryComp slug={slug} />;
};

export default CategoryPage;
