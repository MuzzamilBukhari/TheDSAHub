export type Category = {
  id: number;
  name: string;
  slug: string;
  title: string;
  description: string;
  btnText: string;
};

const categories = [
  {
    id: 1,
    name: "ARRAY",
    slug: "arrays",
    title: "The Foundation of Programming",
    description:
      "Start your DSA journey by mastering arrays and understanding their practical uses.",
    btnText: "Learn more",
  },
  {
    id: 2,
    name: "LINKED LIST",
    slug: "linked-list",
    title: "Dynamic Data at Its Best",
    description:
      "Explore how linked lists work and solve problems efficiently with pointers.",
    btnText: "Explore topic",
  },
  {
    id: 3,
    name: "STACK & QUEUES",
    slug: "stack-and-queues",
    title: "Manage Your Data",
    description:
      "Learn how to implement stacks and queues and their applications in problem-solving.",
    btnText: "Dive in",
  },
  {
    id: 4,
    name: "TREES",
    slug: "trees",
    title: "Hierarchical Data Simplified",
    description:
      "Understand tree structures, traversal methods, and their use cases.",
    btnText: "Explore more",
  },
  {
    id: 5,
    name: "GRAPHS",
    slug: "graphs",
    title: "Connecting the Dots",
    description:
      "Decode graphs, algorithms, and their role in complex problem-solving.",
    btnText: "Learn Graphs",
  },
  {
    id: 6,
    name: "SORTING ALGOS",
    slug: "sorting-algos",
    title: "Organize Your Data",
    description:
      "Master sorting techniques like quicksort, mergesort, and more.",
    btnText: "Start learning",
  },
];

export default categories;
