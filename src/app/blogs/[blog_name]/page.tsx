export async function getStaticProps({
  params,
}: {
  params: { category_name: string };
}) {
  const { category_name } = params; // Access the parameter
  // Your logic here
  return {
    props: {
      category_name,
    },
  };
}
