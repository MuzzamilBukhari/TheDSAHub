export type Blog = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imgUrl: string;
  content: string;
  featured: boolean;
  author: string;
  category: string;
  categorySlug: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Mastering Arrays: The Foundation of DSA",
    slug: "Mastering-Arrays-The-Foundation-of-DSA",
    description:
      "Learn the basics of arrays, including their structure, memory allocation, and how they form the backbone of many algorithms in computer science.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: true,
    author: "Muzzamil Bukhari",
    category: "ARRAY",
    categorySlug: "arrays",
  },
  {
    id: 2,
    title: "Two Pointer Technique: A Game-Changer for Array Problems",
    slug: "Two-Pointer-Technique-A-Game-Changer-for-Array-Problems",
    description:
      "Explore the two-pointer technique with examples like pair-sum, container-with-most-water, and more to efficiently solve array-related problems.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
           facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "ARRAY",
    categorySlug: "arrays",
  },
  {
    id: 3,
    title: "Sliding Window Approach: Optimize Your Array Solutions",
    slug: "Sliding-Window Approach-Optimize-Your-Array-Solutions",
    description:
      "Dive into the sliding window technique to solve problems like maximum subarray sums and dynamic window calculations with ease.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "ARRAY",
    categorySlug: "arrays",
  },
  {
    id: 4,
    title: "Understanding Linked Lists: Concepts and Implementations",
    slug: "Understanding-Linked-Lists-Concepts-and-Implementations",
    description:
      "Discover the basics of singly and doubly linked lists, their operations, and practical use cases.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: true,
    author: "Muzzamil Bukhari",
    category: "LINKED LIST",
    categorySlug: "linked-list",
  },
  {
    id: 5,
    title: "Reversing a Linked List: Iterative vs. Recursive",
    slug: "Reversing-a-Linked-List-Iterative-vs-Recursive",
    description:
      "Compare iterative and recursive approaches to reversing a linked list, complete with step-by-step explanations.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "LINKED LIST",
    categorySlug: "linked-list",
  },
  {
    id: 6,
    title: "Introduction to Stacks: LIFO in Action",
    slug: "Introduction-to-Stacks-LIFO-in-Action",
    description:
      "Understand the stack data structure, its operations, and applications like undo operations in text editors.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "STACK & QUEUES",
    categorySlug: "stack-and-queues",
  },
  {
    id: 7,
    title: "Queues and Their Variants: FIFO Demystified",
    slug: "Queues-and-Their-Variants-FIFO-Demystified",
    description:
      "Dive into queues, circular queues, and priority queues, and see how they are used in scheduling and buffering.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: true,
    author: "Muzzamil Bukhari",
    category: "STACK & QUEUES",
    categorySlug: "stack-and-queues",
  },
  {
    id: 8,
    title: "Implementing Stack and Queue with Linked Lists",
    slug: "Implementing-Stack-and-Queue-with-Linked-Lists",
    description:
      "Explore how stacks and queues can be implemented using linked lists for dynamic sizing.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "STACK & QUEUES",
    categorySlug: "stack-and-queues",
  },
  {
    id: 9,
    title: "Real-World Applications of Stacks and Queues",
    slug: "Real-World-Applications-of-Stacks-and-Queues",
    description:
      "dive into how these structures are used in practical scenarios, solving everyday computational challenges.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "STACK & QUEUES",
    categorySlug: "stack-and-queues",
  },
  {
    id: 10,
    title: "Binary Trees Simplified: Traversals and Applications",
    slug: "Binary-Trees-Simplified-Traversals-and-Applications",
    description:
      "Learn the basics of binary trees, including in-order, pre-order, and post-order traversals, with real-world use cases.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "TREES",
    categorySlug: "trees",
  },
  {
    id: 11,
    title: "Binary Search Trees: Searching and Insertion Made Easy",
    slug: "Binary-Search-Trees-Searching-and-Insertion-Made-Easy",
    description:
      "Understand the properties of binary search trees and how they optimize searching and sorting operations.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "TREES",
    categorySlug: "trees",
  },
  {
    id: 12,
    title: "Balancing Trees: The Power of AVL ",
    slug: "Balancing Trees: The Power of AVL ",
    description:
      "Discover self-balancing binary trees and why they are essential for maintaining efficiency in dynamic datasets.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "TREES",
    categorySlug: "trees",
  },
  {
    id: 13,
    title: "Graphs 101: Representation and Traversal Techniques",
    slug: "Graphs-101-Representation-and-Traversal-Techniques",
    description:
      "Explore adjacency lists and matrices, and learn graph traversal methods like BFS and DFS with practical examples.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "GRAPHS",
    categorySlug: "graphs",
  },
  {
    id: 14,
    title: "Graph Algorithms: Prim's and Kruskal's MST",
    slug: "Graph Algorithms: Prim's and Kruskal's MST",
    description:
      "Delves into two popular MST algorithms: Prim's Algorithm and Kruskal's Algorithm, breaking down their processes, implementations, and applications.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "GRAPHS",
    categorySlug: "graphs",
  },
  {
    id: 15,
    title: "Detecting Cycles in Graphs: Using DFS",
    slug: "Detecting-Cycles-in-Graphs-Using-DFS",
    description:
      "Master techniques for detecting cycles in directed and undirected graphs with hands-on examples.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "GRAPHS",
    categorySlug: "graphs",
  },
  {
    id: 16,
    title: "Sorting Basics: Bubble, Selection, and Insertion Sort",
    slug: "Sorting Basics: Bubble, Selection, and Insertion Sort",
    description:
      "Get familiar with simple sorting techniques, their workings, and where they are most effective.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "SORTING ALGOS",
    categorySlug: "sorting-algos",
  },
  {
    id: 17,
    title: "QuickSort and MergeSort: Divide and Conquer in Action",
    slug: "QuickSort and MergeSort: Divide and Conquer in Action",
    description:
      "Understand how QuickSort and MergeSort use the divide-and-conquer technique to achieve efficient sorting.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat maxime laborum hic ea eum eligendi, repudiandae, culpa amet optio enim consectetur consequuntur sint voluptate. Quibusdam deleniti veritatis harum consequuntur ducimus delectus ullam ipsam quae cum numquam temporibus laudantium reiciendis eos at praesentium placeat, nesciunt nulla? Recusandae non quidem natus. Dignissimos eligendi ducimus qui facere quos architecto, error quia expedita ipsum officia veritatis minima doloremque vel corporis quisquam quo, quam quis enim voluptatibus voluptas hic illum aliquam. Magni enim iste exercitationem minus, dolores a voluptas similique recusandae alias quisquam impedit pariatur ab quae aliquam asperiores placeat at dicta expedita explicabo ex. Dolorum quisquam rem harum perspiciatis numquam, ipsam provident dolores ipsum doloribus maiores adipisci cupiditate suscipit corrupti illo laudantium eum velit libero vitae quia blanditiis accusamus. Expedita natus officia numquam tenetur asperiores, laboriosam suscipit similique tempore inventore delectus, dolorum, modi facere sunt. Sequi culpa architecto laboriosam explicabo, excepturi delectus reprehenderit provident velit expedita accusamus numquam ab ratione rerum eveniet! Praesentium accusamus excepturi, dicta facere officia a necessitatibus eligendi cum voluptatum ipsum reiciendis corporis delectus possimus dolor deserunt aut similique, dolorum, porro nobis ut harum distinctio reprehenderit rem nihil! A, esse? Quo neque cum repudiandae quaerat maxime voluptate, veniam similique dignissimos sed autem, odit rerum delectus magni eius! Fuga cumque veritatis odit consectetur sapiente accusamus odio id inventore placeat tempora incidunt eum consequuntur aliquam dignissimos dicta, libero voluptatum. Nulla incidunt nemo praesentium, explicabo in eos consequuntur sit. Illum sint quae veritatis ad consequuntur est non facilis, tenetur iure ratione eius quaerat fugiat, reprehenderit reiciendis sequi inventore rem beatae ipsum porro doloribus excepturi placeat. At magnam possimus, rerum cupiditate consequatur enim corporis ex recusandae ipsam officia quia eos, quae repellendus temporibus accusamus nisi mollitia fugit dolore odit officiis. Inventore repudiandae alias quibusdam quod tenetur dolore illo odit ut maxime cum. Fugit numquam ipsam voluptatibus, quae facere, sed deleniti consequatur ipsum inventore, minus illum? Quaerat omnis quae similique fuga aliquid, odit ex, id suscipit, quisquam quidem perferendis. Autem eligendi distinctio, explicabo perferendis vero suscipit, quaerat quis nostrum illum natus ipsum repudiandae dolor voluptatibus sunt doloribus officiis facilis delectus!`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "SORTING ALGOS",
    categorySlug: "sorting-algos",
  },
];

export default blogs;
