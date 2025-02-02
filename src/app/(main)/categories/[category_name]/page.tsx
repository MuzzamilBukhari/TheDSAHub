import { CategoryComp } from "@/components";

export default async function Page({
  params,
}: {
  params: Promise<{ category_name: string }>;
}) {
  const slug = (await params).category_name;
  return (
    <>
      <CategoryComp slug={slug} />
    </>
  );
}
