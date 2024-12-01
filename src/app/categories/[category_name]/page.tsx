import React from "react";

const categoryPage = async ({
  params,
}: {
  params: { category_name: string };
}) => {
  const categoryName = params.category_name;
  console.log(categoryName);

  return <div className="mt-32">{categoryName} page</div>;
};

export default categoryPage;
