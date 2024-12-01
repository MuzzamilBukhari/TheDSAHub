import React from "react";

export default async function CategoryPage({
  params,
}: {
  params: { category_name: string };
}) {
  const { category_name } = params;
  console.log(category_name);

  return <div className="mt-32">{category_name} page</div>;
}
