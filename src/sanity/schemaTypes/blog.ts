export const blog = {
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "ID",
      title: "Blog ID",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "Image",
      type: "image",
    },
    {
      name: "content",
      title: "Content",
      type: "string",
    },
    {
      name: "featured",
      title: "Is this post featured?",
      type: "boolean",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
  ],
};
