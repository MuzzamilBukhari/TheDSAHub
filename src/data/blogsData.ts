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
    

    <main style=" padding: 14px; border-radius: 8px;">
        <section style="margin-bottom: 32px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
            <p>Arrays are the backbone of many algorithms and data structures in computer science. Their ability to store elements in contiguous memory locations allows quick access and manipulation of data. This blog delves into the essentials of arrays, ensuring you understand their structure, operations, and significance.</p>
        </section>

        <section style="margin-bottom: 32px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">What Are Arrays?</h2>
            <p>Arrays are a linear data structure that stores elements of the same type in a contiguous block of memory. Each element is accessed using an index, starting from 0 in most programming languages. For example:</p>
            <pre style="background-color: black; border: 2px solid #ffa31a; padding: 10px; margin-top: 16px; margin-bottom:16px; border-radius: 5px; overflow-x: auto;">
int arr[5] = {10, 20, 30, 40, 50};
</pre>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Indexing:</strong> Access elements using indices like <code>arr[0]</code> for the first element.</li>
                <li><strong>Fixed Size:</strong> In static arrays, the size is defined at the time of declaration.</li>
            </ul>
        </section>

        <section style="margin-bottom: 32px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Why Are Arrays Important?</h2>
            <ol style="margin-left: 20px;">
                <li><strong>Efficient Data Access:</strong> Direct access to elements via indices.</li>
                <li><strong>Foundation for Algorithms:</strong> Used in sorting, searching, and dynamic programming.</li>
                <li><strong>Versatility:</strong> Applicable in nearly every field, from gaming to database management.</li>
            </ol>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Key Operations</h2>
            <h3 style="color: #808080;">1. Traversal</h3>
            <p>Visit each element to perform operations like printing or summing values:</p>
            <pre style="background-color: black; border: 2px solid #ffa31a; padding: 10px; margin-top: 16px; margin-bottom:16px; border-radius: 5px; overflow-x: auto;">
arr = [10, 20, 30, 40, 50]
for element in arr:
    print(element)
</pre>

            <h3 style="color: #808080;">2. Insertion</h3>
            <p>Add an element at a specific position (in dynamic arrays):</p>
            <pre style="background-color: black; border: 2px solid #ffa31a; padding: 10px; margin-top: 16px; margin-bottom:16px; border-radius: 5px; overflow-x: auto;">
let arr = [1, 2, 4, 5];
arr.splice(2, 0, 3); // Insert 3 at index 2
console.log(arr); // [1, 2, 3, 4, 5]
</pre>

            <h3 style="color: #808080;">3. Deletion</h3>
            <p>Remove an element, which may require shifting:</p>
            <pre style="background-color: black; border: 2px solid #ffa31a; padding: 10px; margin-top: 16px; margin-bottom:16px; border-radius: 5px; overflow-x: auto;">
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // Remove element at index 2
console.log(arr); // [1, 2, 4, 5]
</pre>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Common Use Cases</h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Data Storage:</strong> Store and retrieve large datasets.</li>
                <li><strong>Matrix Operations:</strong> Representing 2D or 3D data like images and graphs.</li>
                <li><strong>Algorithm Inputs:</strong> Provide input for algorithms like sorting and searching.</li>
            </ul>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Challenges with Arrays</h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Fixed Size:</strong> Static arrays can’t grow dynamically.</li>
                <li><strong>Inefficient Insert/Delete:</strong> These operations may require shifting elements.</li>
                <li><strong>Memory Allocation:</strong> Contiguous allocation may lead to memory issues in large arrays.</li>
            </ul>
        </section>

        <section>
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
            <p>Arrays are a simple yet powerful data structure that forms the foundation of problem-solving in programming. Mastering arrays will pave the way for understanding more complex data structures like linked lists, stacks, and trees.</p>
        </section>
    </main>
           `,
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
    slug: "Sliding-Window-Approach-Optimize-Your-Array-Solutions",
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
    slug: "Balancing-Trees-The-Power-of-AVL ",
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
    slug: "Graph-Algorithms-Prim's-and-Kruskal's-MST",
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
    slug: "Sorting-Basics-Bubble-Selection-and-Insertion-Sort",
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
    slug: "QuickSort-and-MergeSort-Divide-and-Conquer-in-Action",
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
