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
    imgUrl: "/blog/blog1.webp",
    content: `
    

    <main style=" padding: 14px; border-radius: 8px;">
        <section style="margin-bottom: 32px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
            <p>Arrays are the backbone of many algorithms and data structures in computer science. Their ability to store elements in contiguous memory locations allows quick access and manipulation of data. This blog delves into the essentials of arrays, ensuring you understand their structure, operations, and significance.</p>
        </section>

        <section style="margin-bottom: 32px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">What Are Arrays?</h2>
            <p>Arrays are a linear data structure that stores elements of the same type in a contiguous block of memory. Each element is accessed using an index, starting from 0 in most programming languages. For example:</p>
         
<img src="/blog/code1.png" alt="code" />
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
           <img src="/blog/code2.png" alt="code" />

            <h3 style="color: #808080;">2. Insertion</h3>
            <p>Add an element at a specific position (in dynamic arrays):</p>
           <img src="/blog/code3.png" alt="code" />

            <h3 style="color: #808080;">3. Deletion</h3>
            <p>Remove an element, which may require shifting:</p>
            <img src="/blog/code4.png" alt="code" />
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
    imgUrl: "/blog/blog2.webp",
    content: `
      
    <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
            <p>The Two Pointer technique is a versatile approach to solve array-related problems efficiently. It involves using two pointers to scan and process the array from different directions or at varying speeds. This blog explores its implementation and examples, helping you optimize your solutions.</p>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">What is the Two Pointer Technique?</h2>
            <p>Two pointers are used to traverse the array in a coordinated manner:</p>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Same Direction:</strong> Both pointers start from the beginning and move forward at varying speeds.</li>
                <li><strong>Opposite Direction:</strong> One pointer starts from the beginning and the other from the end, converging toward each other.</li>
            </ul>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Advantages of Two Pointers</h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Reduces the time complexity of problems, often from <code>O(n²)</code> to <code>O(n)</code>.</li>
                <li>Simplifies the logic for problems involving pairs or subarrays.</li>
            </ul>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Example Problems</h2>

            <h3 style="color: white;">1. Finding Pair with Target Sum</h3>
            <p>Given a sorted array and a target sum, find two numbers that add up to the target:</p>
            <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
def two_sum(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        curr_sum = nums[left] + nums[right]
        if curr_sum == target:
            return [nums[left], nums[right]]
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    return []
</pre>

            <h3 style="color: white;">2. Container with Most Water</h3>
            <p>Maximize the water a container can hold, defined by heights of lines at array indices:</p>
            <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
function maxArea(height) {
    let left = 0, right = height.length - 1, max = 0;
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) left++;
        else right--;
    }
    return max;
}
</pre>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Applications of Two Pointer Technique</h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Sorting Problems:</strong> Merging sorted arrays, finding triplets, or rearranging elements.</li>
                <li><strong>String Matching:</strong> Checking palindromes, substring searches.</li>
                <li><strong>Sliding Window Enhancements:</strong> Optimizing subarray problems with added conditions.</li>
            </ul>
        </section>

        <section>
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
            <p>The Two Pointer technique is a must-have tool in your problem-solving arsenal. By learning its variations and applications, you can tackle a wide range of DSA challenges efficiently.</p>
        </section>
    </main>

`,
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
    imgUrl: "/blog/blog3.webp",
    content: `
         

    <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
            <p>The Sliding Window technique is an elegant and efficient approach for solving problems involving arrays or strings. It involves creating a "window" that slides through the dataset to analyze or calculate specific properties. In this blog, we'll explore how it works and its practical applications.</p>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">What is the Sliding Window Approach?</h2>
            <p>The Sliding Window approach uses a range (or "window") defined by two pointers to process a subset of the array or string at a time. The window size can either be:</p>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Fixed:</strong> The size remains constant throughout.</li>
                <li><strong>Dynamic:</strong> The size adjusts based on problem constraints.</li>
            </ul>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Advantages of the Sliding Window Technique</h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Reduces nested loops, often optimizing <code>O(n²)</code> algorithms to <code>O(n)</code>.</li>
                <li>Simplifies logic for problems involving sums, counts, or conditions over subarrays or substrings.</li>
            </ul>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Example Problems</h2>

            <h3 style="color: white;">1. Maximum Sum of a Subarray (Fixed Window)</h3>
            <p>Find the maximum sum of a subarray of size <code>k</code>:</p>
            <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
def max_sum_subarray(arr, k):
    max_sum, window_sum = 0, sum(arr[:k])
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum
</pre>

            <h3 style="color: white;">2. Smallest Subarray with Sum ≥ Target (Dynamic Window)</h3>
            <p>Given an array, find the smallest subarray whose sum is greater than or equal to the target:</p>
            <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
function minSubArrayLen(target, nums) {
    let left = 0, sum = 0, minLength = Infinity;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left++];
        }
    }
    return minLength === Infinity ? 0 : minLength;
}
</pre>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Applications of Sliding Window</h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Maximum or Minimum Values:</strong> Largest/smallest sums or counts in subarrays.</li>
                <li><strong>String Matching:</strong> Finding substrings or character frequency counts.</li>
                <li><strong>Dynamic Conditions:</strong> Adapting window size based on constraints like target values or unique elements.</li>
            </ul>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Tips for Using Sliding Window</h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li>Identify if the problem involves analyzing subarrays or substrings.</li>
                <li>Decide if the window size is fixed or dynamic.</li>
                <li>Use one or two pointers to expand and contract the window efficiently.</li>
            </ul>
        </section>

        <section>
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
            <p>The Sliding Window technique is a versatile and powerful method for solving array and string problems. Mastering this approach will improve your ability to tackle competitive programming challenges and optimize algorithms.</p>
        </section>
    </main>
`,
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
    imgUrl: "/blog/blog4.webp",
    content: `
          
    <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
            <p>Linked Lists are one of the most fundamental yet dynamic data structures in computer science. Unlike arrays, they offer flexible memory allocation and efficient insertions and deletions. This blog introduces you to the concept, structure, and importance of linked lists.</p>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">What is a Linked List?</h2>
            <p>A linked list is a collection of nodes where each node contains:</p>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Data:</strong> The value stored in the node.</li>
                <li><strong>Next:</strong> A pointer or reference to the next node in the sequence.</li>
            </ul>
            <p>The linked list structure can grow or shrink dynamically, as nodes are not stored in contiguous memory locations.</p>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Types of Linked Lists</h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Singly Linked List:</strong> Nodes are linked in one direction.</li>
                <li><strong>Doubly Linked List:</strong> Each node has pointers to both the previous and next nodes.</li>
                <li><strong>Circular Linked List:</strong> The last node points back to the head, forming a circle.</li>
            </ul>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Advantages of Linked Lists</h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Dynamic Memory Allocation:</strong> No need to declare size at initialization.</li>
                <li><strong>Efficient Insertions/Deletions:</strong> Operations do not require shifting elements like in arrays.</li>
                <li><strong>Memory Utilization:</strong> Utilizes available memory as nodes are created on demand.</li>
            </ul>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Key Operations</h2>
            <h3 style="color: #808080;">Traversal</h3>
            <p>Iterate through all nodes to process data:</p>
            <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
def traverse(head):
    current = head
    while current:
        print(current.data)
        current = current.next
</pre>

            <h3 style="color: #808080;">Insertion</h3>
            <p>Insert a node at the beginning, end, or a specific position:</p>
            <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function insertAtEnd(head, value) {
    let newNode = new Node(value);
    if (!head) return newNode;
    let current = head;
    while (current.next) current = current.next;
    current.next = newNode;
    return head;
}
</pre>

            <h3 style="color: #808080;">Deletion</h3>
            <p>Remove a node by updating references:</p>
            <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
void deleteNode(Node** head_ref, int key) {
    Node* temp = *head_ref, *prev = NULL;
    if (temp != NULL && temp->data == key) {
        *head_ref = temp->next;
        free(temp);
        return;
    }
    while (temp != NULL && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }
    if (temp == NULL) return;
    prev->next = temp->next;
    free(temp);
}
</pre>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Challenges with Linked Lists</h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Sequential Access:</strong> No direct access like arrays; traversal is required.</li>
                <li><strong>Memory Overhead:</strong> Each node requires additional memory for the pointer.</li>
                <li><strong>Debugging Complexity:</strong> Mistakes in pointer manipulation can lead to segmentation faults.</li>
            </ul>
        </section>

        <section style="margin-bottom: 20px;">
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Applications of Linked Lists</h2>
            <ul style="list-style-type: disc; margin-left: 20px;">
                <li><strong>Dynamic Memory Management:</strong> Used in queues, stacks, and heaps.</li>
                <li><strong>File Systems:</strong> To store and retrieve hierarchical data structures.</li>
                <li><strong>Real-Time Applications:</strong> Navigation systems and undo functionality in editors.</li>
            </ul>
        </section>

        <section>
            <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
            <p>Linked lists are a powerful tool for scenarios requiring dynamic memory allocation and flexibility in operations. Understanding their structure and uses is crucial for mastering advanced data structures.</p>
        </section>
    </main>
`,
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
    imgUrl: "/blog/blog5.webp",
    content: `
           <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
        <p>Reversing a linked list is one of the most common and foundational problems in data structures. It provides insight into how linked lists work and requires a solid understanding of pointer manipulation. In this blog, we’ll explore different approaches to reverse a linked list and their implementations.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Why Reverse a Linked List?</h2>
        <p>Reversing a linked list is often required to meet specific problem constraints, such as:</p>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Reversing traversal order for a single-pass operation.</li>
            <li>Simplifying operations like palindrome detection or merging.</li>
            <li>Efficiently restructuring data for further processing.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Approaches to Reverse a Linked List</h2>
        <h3 style="color: #808080;">Iterative Method</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def reverse_list(head):
    prev = None
    current = head
    while current:
        next_node = current.next  # Save next node
        current.next = prev       # Reverse pointer
        prev = current            # Move prev to current
        current = next_node       # Move to the next node
    return prev  # New head of the reversed list
        </pre>

        <h3 style="color: #808080;">Recursive Method</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
function reverseListRecursive(head) {
    if (!head || !head.next) return head;
    let newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}
        </pre>

        <h3 style="color: #808080;">Using Stack</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
void reverseUsingStack(Node** head_ref) {
    stack<Node*> nodeStack;
    Node* temp = *head_ref;
    while (temp != NULL) {
        nodeStack.push(temp);
        temp = temp->next;
    }
    *head_ref = nodeStack.top();
    temp = *head_ref;
    nodeStack.pop();
    while (!nodeStack.empty()) {
        temp->next = nodeStack.top();
        nodeStack.pop();
        temp = temp->next;
    }
    temp->next = NULL;
}
        </pre>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Applications of Reversing a Linked List</h2>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li><strong>Undo Operations:</strong> Maintaining a reversible history in text editors or games.</li>
            <li><strong>Palindrome Check:</strong> Comparing a linked list with its reversed version.</li>
            <li><strong>Data Reorganization:</strong> Adjusting traversal order for specific algorithms.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Complexity Analysis</h2>
        <p><strong>Iterative Method:</strong></p>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Time Complexity: O(n)</li>
            <li>Space Complexity: O(1)</li>
        </ul>
        <p><strong>Recursive Method:</strong></p>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Time Complexity: O(n)</li>
            <li>Space Complexity: O(n)</li>
        </ul>
        <p><strong>Stack Method:</strong></p>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Time Complexity: O(n)</li>
            <li>Space Complexity: O(n)</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Challenges and Debugging Tips</h2>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Be cautious with pointer manipulation to avoid segmentation faults or infinite loops.</li>
            <li>Always test edge cases, such as an empty list or a single-node list.</li>
            <li>In recursive solutions, ensure base cases are clearly defined.</li>
        </ul>
    </section>

    <section>
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
        <p>Reversing a linked list is a fundamental problem that teaches critical pointer manipulation and problem-solving techniques. Mastering this concept prepares you for tackling more complex linked list problems.</p>
    </section>
</main>
`,
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
    imgUrl: "/blog/blog6.webp",
    content: `
           <div style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px;">
  <h1 style="color: #ffa31a; text-align: center;">Understanding Stacks: LIFO at Its Best</h1>

  <p style="font-size: 16px; color: white;">
    Stacks are an essential data structure in computer science, embodying the 
    <strong>"Last In, First Out" (LIFO)</strong> principle. They are widely used in algorithm design, memory 
    management, and more. This blog will explore the concept of stacks, their operations, and practical use cases.
  </p>

  <h2 style="color: #ffa31a;">What is a Stack?</h2>
  <p style="font-size: 16px; color: white;">
    A stack is a collection of elements that follows the LIFO principle, meaning the last item added is the first 
    to be removed. Imagine a stack of plates: the plate added last is removed first.
  </p>

  <h3 style="color: #ffa31a;">Key Operations:</h3>
  <ul style="list-style-type: square; margin-left: 20px; color: white;">
    <li><strong>Push:</strong> Add an element to the top.</li>
    <li><strong>Pop:</strong> Remove the top element.</li>
    <li><strong>Peek/Top:</strong> View the top element without removing it.</li>
    <li><strong>isEmpty:</strong> Check if the stack is empty.</li>
  </ul>

  <h2 style="color: #ffa31a;">Implementation of Stacks</h2>
  <h3 style="color: #ffa31a;">Using Arrays:</h3>
  <pre style="background-color: black; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
<code style="color: white; font-family: Consolas, monospace;">
class Stack:
    def __init__(self):
        self.stack = []

    def push(self, value):
        self.stack.append(value)

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
        return "Stack is empty"

    def peek(self):
        if not self.is_empty():
            return self.stack[-1]
        return "Stack is empty"

    def is_empty(self):
        return len(self.stack) == 0
</code>
  </pre>

  <h3 style="color: #ffa31a;">Using Linked Lists:</h3>
  <pre style="background-color: black; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
<code style="color: white; font-family: Consolas, monospace;">
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }
    pop() {
        if (this.top === null) return "Stack is empty";
        const poppedValue = this.top.value;
        this.top = this.top.next;
        return poppedValue;
    }
    peek() {
        return this.top ? this.top.value : "Stack is empty";
    }
}
</code>
  </pre>

  <h2 style="color: #ffa31a;">Applications of Stacks</h2>
  <ul style="list-style-type: square; margin-left: 20px; color: white;">
    <li><strong>Function Call Stack:</strong> Tracks active function calls in programming.</li>
    <li><strong>Expression Evaluation:</strong> Used in infix-to-postfix conversions and evaluating postfix expressions.</li>
    <li><strong>Undo/Redo Operations:</strong> Helps implement undo functionality in text editors.</li>
    <li><strong>Backtracking:</strong> Used in algorithms like maze solving and DFS.</li>
  </ul>

  <h2 style="color: #ffa31a;">Common Problems Involving Stacks</h2>
  <h3 style="color: #ffa31a;">Balanced Parentheses:</h3>
  <pre style="background-color: black; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
<code style="color: white; font-family: Consolas, monospace;">
def is_balanced(expression):
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    for char in expression:
        if char in "({[":
            stack.append(char)
        elif char in ")}]":
            if not stack or stack[-1] != pairs[char]:
                return False
            stack.pop()
    return len(stack) == 0
</code>
  </pre>

  <h3 style="color: #ffa31a;">Reverse a Stack:</h3>
  <p style="font-size: 16px; color: white;">
    Rearrange elements of a stack without using additional data structures.
  </p>

  <h2 style="color: #ffa31a;">Challenges and Debugging Tips</h2>
  <ul style="list-style-type: square; margin-left: 20px; color: white;">
    <li>Ensure you handle stack underflow and overflow conditions appropriately.</li>
    <li>For linked list implementations, carefully manage memory and pointers.</li>
    <li>Always validate edge cases like empty or single-element stacks.</li>
  </ul>

  <h2 style="color: #ffa31a; text-align: center;">Conclusion</h2>
  <p style="font-size: 16px; color: white;">
    Stacks are versatile and widely applicable, making them a must-learn data structure. Mastering stacks enables 
    you to tackle diverse problems, from algorithm design to real-world applications.
  </p>
</div>
`,
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
    imgUrl: "/blog/blog7.webp",
    content: `
           <div style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px;">
  <h1 style="color: #ffa31a; text-align: center;">Queue: The FIFO Champion</h1>

  <p style="font-size: 16px; color: white;">
    Queues are a fundamental data structure in computer science, implementing the 
    <strong>"First In, First Out" (FIFO)</strong> principle. From operating systems to networking, queues are 
    indispensable. This blog will delve into the workings of queues, their implementations, and use cases.
  </p>

  <h2 style="color: #ffa31a;">What is a Queue?</h2>
  <p style="font-size: 16px; color: white;">
    A queue is a linear data structure where the first element added is the first one removed, similar to a line 
    of people waiting for their turn.
  </p>

  <h3 style="color: #ffa31a;">Key Operations:</h3>
  <ul style="list-style-type: square; margin-left: 20px; color: white;">
    <li><strong>Enqueue:</strong> Add an element to the rear of the queue.</li>
    <li><strong>Dequeue:</strong> Remove an element from the front.</li>
    <li><strong>Peek/Front:</strong> View the front element without removing it.</li>
    <li><strong>isEmpty:</strong> Check if the queue is empty.</li>
  </ul>

  <h2 style="color: #ffa31a;">Implementation of Queues</h2>
  <h3 style="color: #ffa31a;">Using Arrays:</h3>
  <pre style="background-color: black; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
<code style="color: white; font-family: Consolas, monospace;">
class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        if not self.is_empty():
            return self.queue.pop(0)
        return "Queue is empty"

    def peek(self):
        if not self.is_empty():
            return self.queue[0]
        return "Queue is empty"

    def is_empty(self):
        return len(self.queue) == 0
</code>
  </pre>

  <h3 style="color: #ffa31a;">Using Linked Lists:</h3>
  <pre style="background-color: black; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
<code style="color: white; font-family: Consolas, monospace;">
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    dequeue() {
        if (!this.front) return "Queue is empty";
        const dequeuedValue = this.front.value;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        return dequeuedValue;
    }
    peek() {
        return this.front ? this.front.value : "Queue is empty";
    }
}
</code>
  </pre>

  <h2 style="color: #ffa31a;">Applications of Queues</h2>
  <ul style="list-style-type: square; margin-left: 20px; color: white;">
    <li><strong>CPU Scheduling:</strong> Round-robin scheduling uses queues to allocate CPU time slices.</li>
    <li><strong>Print Queue:</strong> Manages print jobs in a printer.</li>
    <li><strong>Breadth-First Search (BFS):</strong> Essential for traversing graphs or trees.</li>
    <li><strong>Network Data Handling:</strong> Used to manage data packets in routers.</li>
  </ul>

  <h2 style="color: #ffa31a;">Common Problems Involving Queues</h2>
  <h3 style="color: #ffa31a;">Implement a Circular Queue:</h3>
  <pre style="background-color: black; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
<code style="color: white; font-family: Consolas, monospace;">
class CircularQueue:
    def __init__(self, size):
        self.queue = [None] * size
        self.size = size
        self.front = self.rear = -1

    def enqueue(self, value):
        if (self.rear + 1) % self.size == self.front:
            return "Queue is full"
        elif self.front == -1:
            self.front = self.rear = 0
        else:
            self.rear = (self.rear + 1) % self.size
        self.queue[self.rear] = value

    def dequeue(self):
        if self.front == -1:
            return "Queue is empty"
        data = self.queue[self.front]
        if self.front == self.rear:
            self.front = self.rear = -1
        else:
            self.front = (self.front + 1) % self.size
        return data
</code>
  </pre>

  <h3 style="color: #ffa31a;">Generate Binary Numbers:</h3>
  <p style="font-size: 16px; color: white;">
    Use a queue to generate binary numbers from 1 to <em>n</em>.
  </p>

  <h2 style="color: #ffa31a;">Challenges and Debugging Tips</h2>
  <ul style="list-style-type: square; margin-left: 20px; color: white;">
    <li>For circular queues, be careful with pointer arithmetic to avoid overwriting data.</li>
    <li>Always test edge cases like empty queues and full queues for array implementations.</li>
    <li>Ensure proper memory management for linked list-based queues.</li>
  </ul>

  <h2 style="color: #ffa31a; text-align: center;">Conclusion</h2>
  <p style="font-size: 16px; color: white;">
    Queues form the backbone of many real-world systems. From managing data flow to implementing algorithms, 
    queues are invaluable. Understanding their operations and applications prepares you for advanced data 
    structure challenges.
  </p>
</div>
`,
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
    imgUrl: "/blog/blog8.webp",
    content: `
       <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
        <p style="color: white;">Linked lists are a versatile data structure, enabling dynamic memory allocation and flexible operations. They can effectively implement stacks and queues. This blog explores how linked lists provide the backbone for these two fundamental data structures.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Implementing a Stack Using Linked List</h2>
        <p style="color: white;">In a stack, the topmost node holds the most recent element added. A linked list can efficiently represent a stack by inserting and removing elements at the head.</p>
        <h3 style="color: #808080;">Operations</h3>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Push:</strong> Insert an element at the head of the list.</li>
            <li><strong>Pop:</strong> Remove the head element.</li>
            <li><strong>Peek:</strong> Return the value of the head element without removal.</li>
        </ul>
        <h3 style="color: #808080;">Code Implementation (Python)</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: white;">
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, data):
        new_node = Node(data)
        new_node.next = self.top
        self.top = new_node

    def pop(self):
        if not self.top:
            return "Stack is empty"
        popped = self.top.data
        self.top = self.top.next
        return popped

    def peek(self):
        if not self.top:
            return "Stack is empty"
        return self.top.data
        </pre>
        <h3 style="color: #808080;">Advantages</h3>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li>Efficient insertion and deletion operations (<strong>O(1)</strong>).</li>
            <li>Dynamic size adjustment without wasted memory.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Implementing a Queue Using Linked List</h2>
        <p style="color: white;">A queue with linked lists has two pointers:</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Front:</strong> Points to the first element.</li>
            <li><strong>Rear:</strong> Points to the last element.</li>
        </ul>
        <h3 style="color: #808080;">Operations</h3>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Enqueue:</strong> Insert an element at the rear.</li>
            <li><strong>Dequeue:</strong> Remove an element from the front.</li>
            <li><strong>Peek:</strong> Return the value at the front without removal.</li>
        </ul>
        <h3 style="color: #808080;">Code Implementation (JavaScript)</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: white;">
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        if (!this.front) return "Queue is empty";
        const dequeuedValue = this.front.value;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        return dequeuedValue;
    }

    peek() {
        return this.front ? this.front.value : "Queue is empty";
    }
}
        </pre>
        <h3 style="color: #808080;">Advantages</h3>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li>No fixed size constraint as in arrays.</li>
            <li>Efficient memory utilization.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Applications of Stack and Queue with Linked Lists</h2>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Stack:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Undo/Redo functionality in editors.</li>
                    <li>Backtracking problems like solving mazes or puzzles.</li>
                </ul>
            </li>
            <li><strong>Queue:</strong>
                <ul style="list-style-type: circle; margin-left: 20px;">
                    <li>Task scheduling systems like Round-Robin CPU scheduling.</li>
                    <li>Breadth-First Search (BFS) in graphs.</li>
                </ul>
            </li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Challenges and Debugging Tips</h2>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li>Ensure proper management of the <strong>next</strong> pointer to avoid memory leaks or unintended data overwrites.</li>
            <li>Test edge cases such as single-node stacks/queues or operations on empty structures.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
        <p style="color: white;">By combining stacks and queues with linked lists, you achieve robust and efficient implementations. These structures form the building blocks for solving many complex problems, making them a must-know for developers.</p>
    </section>
</main>


`,
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
    imgUrl: "/blog/blog9.webp",
    content: `
    
   <main style="background-color: #121212; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25); margin-top: 20px; max-width: 800px; margin-left: auto; margin-right: auto; font-family: Arial, sans-serif; color: #e0e0e0;">
    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
        <p>Stacks and queues are not just theoretical concepts; they power many real-world applications, solving everyday computational challenges efficiently. This blog explores their practical uses in detail.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Applications of Stacks</h2>
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
            <li><strong>Undo/Redo Functionality:</strong> Text editors and coding IDEs use stacks to handle operation sequences, enabling "undo" by popping the last action and "redo" by pushing it back.</li>
            <li><strong>Syntax Parsing:</strong> Compilers utilize stacks to ensure balanced parentheses and process nested structures like XML/HTML tags or mathematical expressions.</li>
            <li><strong>Function Call Management:</strong> The call stack in programming manages function calls, storing local variables and return addresses, especially for recursion.</li>
            <li><strong>Backtracking Algorithms:</strong> Solving puzzles, mazes, or games like the Knight's Tour often relies on stacks for exploring paths and backtracking when needed.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Applications of Queues</h2>
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
            <li><strong>Task Scheduling:</strong> Operating systems leverage queues for CPU task management, especially in round-robin scheduling.</li>
            <li><strong>Breadth-First Search (BFS):</strong> BFS algorithms in graph and tree traversal utilize queues to explore nodes level by level.</li>
            <li><strong>Print Queue Management:</strong> Printers use queues to ensure jobs are processed in the order they are received (FIFO).</li>
            <li><strong>Data Packet Management in Networking:</strong> Routers use queues to manage data packets efficiently, prioritizing based on network conditions.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">How They Work Together</h2>
        <p>Stacks and queues often complement each other in algorithm design:</p>
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
            <li><strong>Algorithm Design:</strong> A stack can be implemented using two queues and vice versa, showcasing their versatility.</li>
            <li><strong>Web Browser:</strong> Browsers use stacks for "back" functionality and queues for managing tab sequences.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Code Example: Balancing Parentheses Using a Stack</h2>
        <pre style="background-color: #1e1e1e; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: #ffffff; font-family: 'Courier New', Courier, monospace; line-height: 1.6;">
def is_balanced(expression):
    stack = []
    for char in expression:
        if char in "({[":
            stack.append(char)
        elif char in ")}]":
            if not stack:
                return False
            top = stack.pop()
            if (top == '(' and char != ')') or \
               (top == '{' and char != '}') or \
               (top == '[' and char != ']'):
                return False
    return not stack

# Example Usage
print(is_balanced("{[()]}"))  # Output: True
print(is_balanced("{[(])}"))  # Output: False
        </pre>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Challenges and Considerations</h2>
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
            <li><strong>Performance:</strong> Stacks and queues are efficient, but memory overhead in linked list-based implementations can impact performance.</li>
            <li><strong>Scalability:</strong> Dynamic resizing of array-based implementations needs careful management for optimal resource use.</li>
        </ul>
    </section>

    <section>
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
        <p>From compilers to network systems, stacks and queues are indispensable tools for managing data efficiently. Mastery of these structures equips you to tackle complex computational problems with confidence.</p>
    </section>
</main>


`,
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
    imgUrl: "/blog/blog10.webp",
    content: `
         <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
        <p>Binary trees are a foundational concept in computer science and programming. With each node having at most two children, binary trees provide an intuitive way to represent hierarchical data. This blog will break down the basics of binary trees, their structure, and why they’re essential.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">What is a Binary Tree?</h2>
        <p>A binary tree is a tree data structure in which each node has at most two children:</p>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Left child</li>
            <li>Right child</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Key Terminology</h2>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li><strong>Root:</strong> The topmost node of the tree.</li>
            <li><strong>Leaf:</strong> A node with no children.</li>
            <li><strong>Parent and Child:</strong> A parent node points to its children.</li>
            <li><strong>Subtree:</strong> A tree formed by a node and its descendants.</li>
            <li><strong>Height of a Tree:</strong> The length of the longest path from the root to a leaf.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Types of Binary Trees</h2>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li><strong>Full Binary Tree:</strong> Every node has either 0 or 2 children.</li>
            <li><strong>Complete Binary Tree:</strong> All levels are fully filled except possibly the last, which is filled from left to right.</li>
            <li><strong>Perfect Binary Tree:</strong> All interior nodes have two children, and all leaves are at the same level.</li>
            <li><strong>Binary Search Tree (BST):</strong> A binary tree where the left child contains values less than the parent, and the right child contains values greater.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Basic Operations in a Binary Tree</h2>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li><strong>Insertion:</strong> Add a node in the tree while maintaining its structure.</li>
            <li><strong>Traversal:</strong> Visit nodes in a specific order.</li>
        </ul>
        <h3 style="color: #808080;">Example: Inorder Traversal (Python)</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def inorder_traversal(node):
    if node:
        inorder_traversal(node.left)
        print(node.value, end=" ")
        inorder_traversal(node.right)

# Create a sample tree
root = Node(10)
root.left = Node(5)
root.right = Node(15)
root.left.left = Node(3)
root.left.right = Node(7)

# Output: 3 5 7 10 15
inorder_traversal(root)
        </pre>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Applications of Binary Trees</h2>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li><strong>Hierarchical Data Representation:</strong> File systems (folders and subfolders).</li>
            <li><strong>Search Optimization:</strong> Binary Search Trees (BSTs) reduce search complexity to O(log n).</li>
            <li><strong>Expression Evaluation:</strong> Abstract syntax trees in compilers represent arithmetic expressions.</li>
            <li><strong>Data Compression:</strong> Huffman coding uses binary trees for efficient encoding.</li>
        </ul>
    </section>

    <section>
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
        <p>Binary trees simplify complex problems by offering an organized, hierarchical structure. Their applications in search, storage, and compression make them indispensable for programmers and engineers alike.</p>
    </section>
</main>

`,
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
    imgUrl: "/blog/blog11.webp",
    content: `
           <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
        <p style="color: #ffffff;">Binary Search Trees (BSTs) are a specialized type of binary tree that provides efficient ways to store, retrieve, and manipulate data. With their structured organization, they allow for quick searches, making them a cornerstone of computer science.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">What is a Binary Search Tree?</h2>
        <p style="color: #ffffff;">A Binary Search Tree is a binary tree with the following properties:</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: #ffffff;">
            <li>The value of every node in the left subtree is less than the value of its parent.</li>
            <li>The value of every node in the right subtree is greater than the value of its parent.</li>
            <li>Both subtrees are also binary search trees.</li>
        </ul>
        <p style="color: #ffffff;">Tree Structure:</p>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: #ffffff;">
       8
      / \
     3   10
    / \    \
   1   6    14
      / \   /
     4   7 13
        </pre>
        <p style="color: #ffffff;">Characteristics:</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: #ffffff;">
            <li>Left subtree of 8: All values (1, 3, 4, 6, 7) are less than 8.</li>
            <li>Right subtree of 8: All values (10, 13, 14) are greater than 8.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Operations in a Binary Search Tree</h2>
        <h3 style="color: #808080;">1. Search</h3>
        <p style="color: #ffffff;">The BST property allows for fast search operations. At each step, you eliminate half the remaining nodes by deciding whether to go left or right.</p>
        <p style="color: #ffffff;">Time Complexity:</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: #ffffff;">
            <li>Average: <code>O(logn)</code></li>
            <li>Worst Case (unbalanced tree): <code>O(n)</code></li>
        </ul>
        <p style="color: #ffffff;">Example (Python):</p>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: #ffffff;">
def search_bst(node, key):
    if not node or node.value == key:
        return node
    if key < node.value:
        return search_bst(node.left, key)
    return search_bst(node.right)
        </pre>
        <h3 style="color: #808080;">2. Insertion</h3>
        <p style="color: #ffffff;">To insert a new value, traverse the tree to find the correct spot while maintaining the BST property.</p>
        <p style="color: #ffffff;">Example (Python):</p>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: #ffffff;">
def insert_bst(node, key):
    if not node:
        return Node(key)
    if key < node.value:
        node.left = insert_bst(node.left, key)
    else:
        node.right = insert_bst(node.right, key)
    return node
        </pre>
        <h3 style="color: #808080;">3. Deletion</h3>
        <p style="color: #ffffff;">Deletion in a BST can be tricky as you need to maintain its structure.</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: #ffffff;">
            <li>Node with no children: Simply remove it.</li>
            <li>Node with one child: Replace the node with its child.</li>
            <li>Node with two children: Replace the node with its inorder successor (smallest node in the right subtree).</li>
        </ul>
        <p style="color: #ffffff;">Example (Python):</p>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: #ffffff;">
def delete_bst(node, key):
    if not node:
        return node
    if key < node.value:
        node.left = delete_bst(node.left, key)
    elif key > node.value:
        node.right = delete_bst(node.right, key)
    else:
        if not node.left:
            return node.right
        if not node.right:
            return node.left
        temp = find_min(node.right)
        node.value = temp.value
        node.right = delete_bst(node.right, temp.value)
    return node

def find_min(node):
    while node.left:
        node = node.left
    return node
        </pre>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Applications of Binary Search Trees</h2>
        <ul style="list-style-type: disc; margin-left: 20px; color: #ffffff;">
            <li><strong>Dynamic Sets:</strong> Store dynamic data like IDs, usernames, or timestamps.</li>
            <li><strong>Efficient Searching:</strong> Used in databases and dictionaries to retrieve data efficiently.</li>
            <li><strong>Range Queries:</strong> Easily find elements within a specific range.</li>
            <li><strong>Hierarchy Representation:</strong> Organize hierarchical data like folder structures.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
        <p style="color: #ffffff;">Binary Search Trees offer a robust and efficient way to store and manage data. Understanding their operations and structure is crucial for any programmer dealing with dynamic datasets.</p>
    </section>
</main>

`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "TREES",
    categorySlug: "trees",
  },

  {
    id: 12,
    title: "Balancing Trees: The Power of AVL ",
    slug: "balancing-trees-the-power-of-avl",
    description:
      "Discover self-balancing binary trees and why they are essential for maintaining efficiency in dynamic datasets.",
    imgUrl: "/blog/blog12.webp",
    content: `
 
    <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
        <p style="color: white;">While Binary Search Trees (BSTs) offer efficient data storage and retrieval, their performance can degrade when unbalanced. Enter AVL Trees, a self-balancing variant of BSTs named after its inventors Adelson-Velsky and Landis. These trees guarantee that the difference in heights between the left and right subtrees is always within one, ensuring optimal performance.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">What is an AVL Tree?</h2>
        <p style="color: white;">An AVL Tree is a binary search tree with an additional balancing property:</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li>The balance factor (height difference between left and right subtrees) of any node is either -1, 0, or 1.</li>
            <li>If a tree violates this property after an insertion or deletion, rotations are performed to restore balance.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Operations in AVL Trees</h2>
        <h3 style="color: #808080;">1. Insertion</h3>
        <p style="color: white;">In AVL trees, after inserting a node, you calculate the balance factor for each ancestor node. If any node violates the AVL property, perform rotations to restore balance.</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li>Insert the node like in a BST.</li>
            <li>Update heights of affected nodes.</li>
            <li>Perform rotations (if needed).</li>
        </ul>

        <h3 style="color: #808080;">2. Rotations</h3>
        <p style="color: white;">AVL trees use rotations to maintain balance. There are four types:</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Right Rotation:</strong> Used for Left-Left (LL) imbalance.</li>
            <li><strong>Left Rotation:</strong> Used for Right-Right (RR) imbalance.</li>
            <li><strong>Left-Right Rotation:</strong> Perform a Left Rotation on the left child, followed by a Right Rotation on the unbalanced node.</li>
            <li><strong>Right-Left Rotation:</strong> Perform a Right Rotation on the right child, followed by a Left Rotation on the unbalanced node.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Insertion Example (Python)</h2>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: #32cd32;">
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

def insert(node, key):
    if not node:
        return Node(key)
    if key < node.key:
        node.left = insert(node.left, key)
    else:
        node.right = insert(node.right, key)
    # Balancing logic goes here
    return node
        </pre>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Advantages of AVL Trees</h2>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Guaranteed Logarithmic Height:</strong> Ensures O(log n) for search, insertion, and deletion operations.</li>
            <li><strong>Balancing Property:</strong> Prevents performance degradation in the case of skewed trees.</li>
            <li><strong>Ideal for Frequent Lookups:</strong> Widely used in applications like databases and file systems.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Disadvantages</h2>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Complexity of Rotations:</strong> Rotations add overhead compared to a simple BST.</li>
            <li><strong>Insertion and Deletion Overhead:</strong> Additional steps are needed to maintain balance.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
        <p style="color: white;">AVL Trees are an excellent choice for applications requiring frequent insertions and lookups. By maintaining balance, they ensure consistent performance across all operations, making them a cornerstone of efficient data structures.</p>
    </section>
</main>


`,
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
    imgUrl: "/blog/blog13.webp",
    content: `
           <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
        <p style="color: white;">Graphs are one of the most versatile and powerful data structures in computer science. From social networks to routing algorithms, graphs help model and solve complex problems efficiently. This blog explores how to represent graphs in a program and covers key traversal techniques like BFS and DFS.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">What is a Graph?</h2>
        <p style="color: white;">A graph is a collection of nodes (vertices) and edges connecting them.</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Vertices:</strong> Represent entities (e.g., cities, people).</li>
            <li><strong>Edges:</strong> Represent connections between entities (e.g., roads, relationships).</li>
        </ul>
        <p style="color: white;">Graphs can be:</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Directed:</strong> Edges have a direction (e.g., A → B).</li>
            <li><strong>Undirected:</strong> Edges have no direction (e.g., A ↔ B).</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Graph Representations</h2>
        <h3 style="color: #808080;">Adjacency Matrix</h3>
        <p style="color: white;">A 2D matrix where rows and columns represent vertices, and a cell indicates if an edge exists.</p>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: white;">
0 1 2
-----
0| 0 1 1
1| 1 0 1
2| 1 1 0
        </pre>
        <p style="color: white;">Here, vertex 0 is connected to 1 and 2.</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Advantages:</strong> Simple to implement. Efficient for dense graphs.</li>
            <li><strong>Disadvantages:</strong> Requires O(V<sup>2</sup>) space, even for sparse graphs.</li>
        </ul>

        <h3 style="color: #808080;">Adjacency List</h3>
        <p style="color: white;">A list of vertices, where each vertex points to its adjacent vertices.</p>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: white;">
0 → [1, 2]
1 → [0, 2]
2 → [0, 1]
        </pre>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Advantages:</strong> Space-efficient for sparse graphs. Easy to traverse.</li>
            <li><strong>Disadvantages:</strong> Less efficient for dense graphs.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Graph Traversal Techniques</h2>
        <h3 style="color: #808080;">Breadth-First Search (BFS)</h3>
        <p style="color: white;">BFS explores vertices layer by layer, starting from a source vertex.</p>
        <p style="color: white;"><strong>Use case:</strong> Shortest path in an unweighted graph.</p>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: white;">
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)

    while queue:
        vertex = queue.popleft()
        print(vertex, end=" ")
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                queue.append(neighbor)
                visited.add(neighbor)

graph = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }
bfs(graph, 0)
        </pre>

        <h3 style="color: #808080;">Depth-First Search (DFS)</h3>
        <p style="color: white;">DFS explores as far as possible along a branch before backtracking.</p>
        <p style="color: white;"><strong>Use case:</strong> Detect cycles, solve puzzles, or explore mazes.</p>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: white;">
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start, end=" ")
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

graph = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }
dfs(graph, 0)
        </pre>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Applications of Graph Traversals</h2>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>BFS:</strong> Social network analysis, finding shortest paths in unweighted graphs.</li>
            <li><strong>DFS:</strong> Topological sorting, detecting connected components or cycles.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Choosing the Right Representation</h2>
        <p style="color: white;">Use an adjacency matrix for dense graphs or when you frequently query edges. Use an adjacency list for sparse graphs or when memory is a concern.</p>
    </section>

    <section>
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
        <p style="color: white;">Graphs are essential for solving a vast array of real-world problems. With a clear understanding of their representations and traversal techniques, you can unlock the full potential of this data structure.</p>
    </section>
</main>

`,
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
      "Delves into two popular MST algorithms: Prim's and Kruskal's Algorithm, breaking down their processes, implementations, and applications.",
    imgUrl: "/blog/blog14.webp",
    content: `
    <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
        <p style="color: white;">Graphs are fundamental in representing connected systems, such as networks, transport grids, and more. Among the many problems in graph theory, finding the Minimum Spanning Tree (MST) is critical for optimizing costs. This blog delves into two popular MST algorithms: Prim's Algorithm and Kruskal's Algorithm, breaking down their processes, implementations, and applications.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">What is a Minimum Spanning Tree (MST)?</h2>
        <p style="color: white;">A spanning tree of a graph is a subgraph that connects all vertices with the minimum number of edges. The MST is the spanning tree with the minimum possible total edge weight.</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li>Works only on connected, weighted, and undirected graphs.</li>
            <li>Applications include network design, circuit connections, and transportation routing.</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Prim's Algorithm</h2>
        <h3 style="color: #808080;">Concept</h3>
        <p style="color: white;">Prim's Algorithm grows the MST by starting with a single vertex and adding the smallest edge connecting the tree to a vertex outside it.</p>
        <h3 style="color: #808080;">Steps</h3>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li>Start with any vertex as part of the MST.</li>
            <li>Select the smallest edge connecting the MST to an unvisited vertex.</li>
            <li>Repeat until all vertices are included in the MST.</li>
        </ul>
        <h3 style="color: #808080;">Implementation (Python)</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: white;">
import heapq

def prim(graph, start):
    mst = []
    visited = set()
    min_heap = [(0, start, -1)]  # (edge weight, current vertex, parent vertex)
    total_weight = 0

    while min_heap:
        weight, vertex, parent = heapq.heappop(min_heap)
        if vertex not in visited:
            visited.add(vertex)
            total_weight += weight
            if parent != -1:
                mst.append((parent, vertex, weight))

            for neighbor, edge_weight in graph[vertex]:
                if neighbor not in visited:
                    heapq.heappush(min_heap, (edge_weight, neighbor, vertex))
    
    return mst, total_weight

# Example graph as adjacency list
graph = {
    0: [(1, 4), (2, 3)],
    1: [(0, 4), (2, 1), (3, 2)],
    2: [(0, 3), (1, 1), (3, 4)],
    3: [(1, 2), (2, 4)]
}

mst, total_weight = prim(graph, 0)
print("MST:", mst)
print("Total Weight:", total_weight)
        </pre>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Kruskal's Algorithm</h2>
        <h3 style="color: #808080;">Concept</h3>
        <p style="color: white;">Kruskal's Algorithm builds the MST by considering all edges in ascending order of weight, ensuring no cycles form.</p>
        <h3 style="color: #808080;">Steps</h3>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li>Sort all edges by weight.</li>
            <li>Add edges one by one to the MST, ensuring no cycles are formed.</li>
            <li>Stop when the MST includes <code style="color: #ffa31a;">V - 1</code> edges (where <code style="color: #ffa31a;">V</code> is the number of vertices).</li>
        </ul>
        <h3 style="color: #808080;">Implementation (Python)</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: white;">
class DisjointSet:
    def __init__(self, vertices):
        self.parent = {v: v for v in vertices}
        self.rank = {v: 0 for v in vertices}

    def find(self, vertex):
        if self.parent[vertex] != vertex:
            self.parent[vertex] = self.find(self.parent[vertex])
        return self.parent[vertex]

    def union(self, u, v):
        root_u = self.find(u)
        root_v = self.find(v)
        if root_u != root_v:
            if self.rank[root_u] > self.rank[root_v]:
                self.parent[root_v] = root_u
            elif self.rank[root_u] < self.rank[root_v]:
                self.parent[root_u] = root_v
            else:
                self.parent[root_v] = root_u
                self.rank[root_u] += 1

def kruskal(vertices, edges):
    mst = []
    ds = DisjointSet(vertices)
    edges.sort(key=lambda x: x[2])  # Sort edges by weight
    total_weight = 0

    for u, v, weight in edges:
        if ds.find(u) != ds.find(v):
            ds.union(u, v)
            mst.append((u, v, weight))
            total_weight += weight

    return mst, total_weight

# Example graph as edge list
vertices = [0, 1, 2, 3]
edges = [
    (0, 1, 4), (0, 2, 3), (1, 2, 1),
    (1, 3, 2), (2, 3, 4)
]

mst, total_weight = kruskal(vertices, edges)
print("MST:", mst)
print("Total Weight:", total_weight)
        </pre>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Comparison</h2>
        <table style="width: 100%; border-collapse: collapse; color: white;">
            <thead>
                <tr>
                    <th style="border: 1px solid #ffa31a; padding: 10px;">Feature</th>
                    <th style="border: 1px solid #ffa31a; padding: 10px;">Prim's Algorithm</th>
                    <th style="border: 1px solid #ffa31a; padding: 10px;">Kruskal's Algorithm</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: 1px solid #ffa31a; padding: 10px;">Approach</td>
                    <td style="border: 1px solid #ffa31a; padding: 10px;">Greedy, vertex-based</td>
                    <td style="border: 1px solid #ffa31a; padding: 10px;">Greedy, edge-based</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ffa31a; padding: 10px;">Graph Representation</td>
                    <td style="border: 1px solid #ffa31a; padding: 10px;">Works well with adjacency list</td>
                    <td style="border: 1px solid #ffa31a; padding: 10px;">Works well with edge list</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ffa31a; padding: 10px;">Efficiency</td>
                    <td style="border: 1px solid #ffa31a; padding: 10px;">Faster for dense graphs</td>
                    <td style="border: 1px solid #ffa31a; padding: 10px;">Faster for sparse graphs</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section>
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
        <p style="color: white;">Prim's and Kruskal's algorithms provide two efficient approaches to constructing MSTs. Understanding their differences helps in choosing the right algorithm based on the graph's characteristics and problem requirements.</p>
    </section>
</main>


`,
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
    imgUrl: "/blog/blog15.webp",
    content: `
          <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
        <p style="color: #ffffff;">Graphs are versatile structures used to represent networks, relationships, and dependencies. However, detecting cycles in graphs is crucial for applications like dependency management, network routing, and graph validation. This blog focuses on cycle detection in directed and undirected graphs using Depth First Search (DFS), a systematic graph traversal technique.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Cycle Detection in Undirected Graphs</h2>
        <h3 style="color: #808080;">Concept</h3>
        <p style="color: #ffffff;">In an undirected graph, a cycle occurs when a node is revisited during traversal, excluding the immediate parent node.</p>
        <h3 style="color: #808080;">Algorithm</h3>
        <p style="color: #ffffff;">Use DFS to explore each node:</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: #ffffff;">
            <li>Maintain a visited set to track visited nodes.</li>
            <li>For each unvisited neighbor:</li>
            <ul style="list-style-type: circle; margin-left: 20px;">
                <li>If it’s already visited and not the parent, a cycle exists.</li>
            </ul>
        </ul>
        <h3 style="color: #808080;">Implementation (Python):</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: #ffffff;">
def detect_cycle_undirected(graph):
    def dfs(node, parent):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor, node):
                    return True
            elif neighbor != parent:
                return True
        return False

    visited = set()
    for node in graph:
        if node not in visited:
            if dfs(node, -1):
                return True
    return False

# Example graph as adjacency list
graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0, 3],
    3: [1, 2]
}

print("Cycle Detected:", detect_cycle_undirected(graph))
        </pre>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Cycle Detection in Directed Graphs</h2>
        <h3 style="color: #808080;">Concept</h3>
        <p style="color: #ffffff;">In directed graphs, a cycle exists when a node is revisited during traversal within the same DFS path. This can be checked using two sets:</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: #ffffff;">
            <li><strong>visited:</strong> Tracks all nodes visited during DFS.</li>
            <li><strong>rec_stack:</strong> Tracks nodes in the current recursion stack.</li>
        </ul>
        <h3 style="color: #808080;">Algorithm</h3>
        <p style="color: #ffffff;">Use DFS to explore each node:</p>
        <ul style="list-style-type: disc; margin-left: 20px; color: #ffffff;">
            <li>For each unvisited node:</li>
            <ul style="list-style-type: circle; margin-left: 20px;">
                <li>Mark it as visited and add it to rec_stack.</li>
                <li>If any neighbor is in rec_stack, a cycle exists.</li>
                <li>Remove the node from rec_stack upon backtracking.</li>
            </ul>
        </ul>
        <h3 style="color: #808080;">Implementation (Python):</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: #ffffff;">
def detect_cycle_directed(graph):
    def dfs(node):
        visited.add(node)
        rec_stack.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
        rec_stack.remove(node)
        return False

    visited = set()
    rec_stack = set()
    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    return False

# Example directed graph as adjacency list
graph = {
    0: [1],
    1: [2],
    2: [3],
    3: [1]
}

print("Cycle Detected:", detect_cycle_directed(graph))
        </pre>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Applications of Cycle Detection</h2>
        <ul style="list-style-type: disc; margin-left: 20px; color: #ffffff;">
            <li><strong>Deadlock Detection:</strong> Identifying resource or process deadlocks in operating systems.</li>
            <li><strong>Task Scheduling:</strong> Validating dependencies in project management to prevent circular dependencies.</li>
            <li><strong>Graph Validation:</strong> Ensuring the correctness of dependency graphs, such as in package managers (e.g., npm, pip).</li>
        </ul>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Complexity Analysis</h2>
        <table style="border-collapse: collapse; width: 100%; color: #ffffff;">
            <tr style="background-color: #ffa31a;">
                <th style="border: 1px solid #ffffff; padding: 8px;">Graph Type</th>
                <th style="border: 1px solid #ffffff; padding: 8px;">Time Complexity</th>
                <th style="border: 1px solid #ffffff; padding: 8px;">Space Complexity</th>
            </tr>
            <tr>
                <td style="border: 1px solid #ffffff; padding: 8px;">Undirected Graph</td>
                <td style="border: 1px solid #ffffff; padding: 8px;">O(V+E)</td>
                <td style="border: 1px solid #ffffff; padding: 8px;">O(V)</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ffffff; padding: 8px;">Directed Graph</td>
                <td style="border: 1px solid #ffffff; padding: 8px;">O(V+E)</td>
                <td style="border: 1px solid #ffffff; padding: 8px;">O(V)</td>
            </tr>
        </table>
    </section>

    <section>
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
        <p style="color: #ffffff;">Detecting cycles is critical for various graph-based applications. DFS offers a robust and efficient approach to this problem, catering to both undirected and directed graphs. Understanding the implementation nuances ensures reliable and efficient cycle detection.</p>
    </section>
</main>

`,
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
    imgUrl: "/blog/blog16.webp",
    content: `
       <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
        <p>Sorting is a fundamental operation in computer science, used to arrange data in a specific order. Whether it's organizing a list of names, arranging numbers, or managing database records, sorting forms the backbone of countless applications. In this blog, we’ll explore the basics of three elementary sorting algorithms: Bubble Sort, Selection Sort, and Insertion Sort.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Bubble Sort</h2>
        <h3 style="color: #808080;">Concept</h3>
        <p>Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they’re in the wrong order. This process continues until the list is sorted.</p>
        <h3 style="color: #808080;">Algorithm</h3>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Compare adjacent elements.</li>
            <li>Swap if the first element is greater than the second.</li>
            <li>Repeat until no swaps are needed.</li>
        </ul>
        <h3 style="color: #808080;">Implementation (Python)</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

# Example
data = [64, 34, 25, 12, 22, 11, 90]
print("Sorted Array:", bubble_sort(data))
        </pre>
        <p><strong>Time Complexity:</strong> <em>O(n²)</em> in the worst and average cases, <em>O(n)</em> in the best case.</p>
        <p><strong>Space Complexity:</strong> <em>O(1)</em>.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Selection Sort</h2>
        <h3 style="color: #808080;">Concept</h3>
        <p>Selection Sort divides the list into two parts: sorted and unsorted. It repeatedly selects the smallest element from the unsorted part and moves it to the sorted part.</p>
        <h3 style="color: #808080;">Algorithm</h3>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Find the smallest element in the unsorted section.</li>
            <li>Swap it with the first element of the unsorted section.</li>
            <li>Repeat for the remaining elements.</li>
        </ul>
        <h3 style="color: #808080;">Implementation (Python)</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# Example
data = [64, 25, 12, 22, 11]
print("Sorted Array:", selection_sort(data))
        </pre>
        <p><strong>Time Complexity:</strong> <em>O(n²)</em> for all cases.</p>
        <p><strong>Space Complexity:</strong> <em>O(1)</em>.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Insertion Sort</h2>
        <h3 style="color: #808080;">Concept</h3>
        <p>Insertion Sort builds the sorted array one element at a time. It takes an element from the unsorted section and inserts it into its correct position in the sorted section.</p>
        <h3 style="color: #808080;">Algorithm</h3>
        <ul style="list-style-type: disc; margin-left: 20px;">
            <li>Start with the second element as the current element.</li>
            <li>Compare it with the elements in the sorted section.</li>
            <li>Shift larger elements to the right and insert the current element in its correct position.</li>
        </ul>
        <h3 style="color: #808080;">Implementation (Python)</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto;">
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

# Example
data = [12, 11, 13, 5, 6]
print("Sorted Array:", insertion_sort(data))
        </pre>
        <p><strong>Time Complexity:</strong> <em>O(n²)</em> in the worst and average cases, <em>O(n)</em> in the best case.</p>
        <p><strong>Space Complexity:</strong> <em>O(1)</em>.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Comparison</h2>
        <table style="width: 100%; border-collapse: collapse; text-align: left; color: white;">
            <thead>
                <tr style="background-color: #ffa31a;">
                    <th style="padding: 10px; border: 1px solid white;">Algorithm</th>
                    <th style="padding: 10px; border: 1px solid white;">Best Case</th>
                    <th style="padding: 10px; border: 1px solid white;">Worst Case</th>
                    <th style="padding: 10px; border: 1px solid white;">Stable</th>
                    <th style="padding: 10px; border: 1px solid white;">In-Place</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid white;">Bubble Sort</td>
                    <td style="padding: 10px; border: 1px solid white;">O(n)</td>
                    <td style="padding: 10px; border: 1px solid white;">O(n²)</td>
                    <td style="padding: 10px; border: 1px solid white;">Yes</td>
                    <td style="padding: 10px; border: 1px solid white;">Yes</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid white;">Selection Sort</td>
                    <td style="padding: 10px; border: 1px solid white;">O(n²)</td>
                    <td style="padding: 10px; border: 1px solid white;">O(n²)</td>
                    <td style="padding: 10px; border: 1px solid white;">No</td>
                    <td style="padding: 10px; border: 1px solid white;">Yes</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid white;">Insertion Sort</td>
                    <td style="padding: 10px; border: 1px solid white;">O(n)</td>
                    <td style="padding: 10px; border: 1px solid white;">O(n²)</td>
                    <td style="padding: 10px; border: 1px solid white;">Yes</td>
                    <td style="padding: 10px; border: 1px solid white;">Yes</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section>
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
        <p>While these algorithms may not be the most efficient for large datasets, they are fundamental for understanding the mechanics of sorting. Each has its strengths and is suitable for small or nearly sorted data.</p>
    </section>
</main>

`,
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
    imgUrl: "/blog/blog17.jpg",
    content: `
    <main style="background-color: black; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-top: 20px;">
    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Introduction</h2>
        <p style="color: white;">Sorting algorithms are essential in programming, and among them, QuickSort and MergeSort are two powerful methods based on the divide and conquer paradigm. They are efficient, versatile, and widely used for large datasets. In this blog, we’ll delve into the mechanics of QuickSort and MergeSort, exploring their principles, implementations, and advantages.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">QuickSort</h2>
        <h3 style="color: #808080;">Concept</h3>
        <p style="color: white;">QuickSort divides the array into two subarrays around a pivot element, such that elements smaller than the pivot are on the left and those larger are on the right. It recursively sorts the subarrays.</p>
        <h3 style="color: #808080;">Algorithm</h3>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li>Pick a pivot element (can be the first, last, or median element).</li>
            <li>Partition the array into two halves around the pivot.</li>
            <li>Recursively apply QuickSort on both halves.</li>
        </ul>
        <h3 style="color: #808080;">Implementation (Python)</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: white;">
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

# Example
data = [10, 7, 8, 9, 1, 5]
print("Sorted Array:", quicksort(data))
        </pre>
        <h3 style="color: #808080;">Time Complexity</h3>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Best/Average Case:</strong> O(nlogn)</li>
            <li><strong>Worst Case:</strong> O(n²) (when the pivot is poorly chosen).</li>
        </ul>
        <h3 style="color: #808080;">Space Complexity</h3>
        <p style="color: white;">O(logn) for the recursion stack.</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">MergeSort</h2>
        <h3 style="color: #808080;">Concept</h3>
        <p style="color: white;">MergeSort divides the array into halves, recursively sorts them, and then merges the sorted halves back together.</p>
        <h3 style="color: #808080;">Algorithm</h3>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li>Divide the array into two halves.</li>
            <li>Recursively sort each half.</li>
            <li>Merge the two sorted halves into one.</li>
        </ul>
        <h3 style="color: #808080;">Implementation (Python)</h3>
        <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; border-radius: 5px; overflow-x: auto; color: white;">
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])

    return merge(left_half, right_half)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Example
data = [12, 11, 13, 5, 6, 7]
print("Sorted Array:", merge_sort(data))
        </pre>
        <h3 style="color: #808080;">Time Complexity</h3>
        <ul style="list-style-type: disc; margin-left: 20px; color: white;">
            <li><strong>Best/Worst/Average Case:</strong> O(nlogn)</li>
        </ul>
        <h3 style="color: #808080;">Space Complexity</h3>
        <p style="color: white;">O(n) (for auxiliary arrays during merging).</p>
    </section>

    <section style="margin-bottom: 20px;">
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Comparison</h2>
        <table style="width: 100%; border-collapse: collapse; color: white; margin-top: 10px;">
            <thead>
                <tr>
                    <th style="border: 1px solid #ffa31a; padding: 5px;">Algorithm</th>
                    <th style="border: 1px solid #ffa31a; padding: 5px;">Best Case</th>
                    <th style="border: 1px solid #ffa31a; padding: 5px;">Worst Case</th>
                    <th style="border: 1px solid #ffa31a; padding: 5px;">Stable</th>
                    <th style="border: 1px solid #ffa31a; padding: 5px;">In-Place</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: 1px solid #ffa31a; padding: 5px;">QuickSort</td>
                    <td style="border: 1px solid #ffa31a; padding: 5px;">O(nlogn)</td>
                    <td style="border: 1px solid #ffa31a; padding: 5px;">O(n²)</td>
                    <td style="border: 1px solid #ffa31a; padding: 5px;">No</td>
                    <td style="border: 1px solid #ffa31a; padding: 5px;">Yes</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ffa31a; padding: 5px;">MergeSort</td>
                    <td style="border: 1px solid #ffa31a; padding: 5px;">O(nlogn)</td>
                    <td style="border: 1px solid #ffa31a; padding: 5px;">O(nlogn)</td>
                    <td style="border: 1px solid #ffa31a; padding: 5px;">Yes</td>
                    <td style="border: 1px solid #ffa31a; padding: 5px;">No</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section>
        <h2 style="color: #ffa31a; border-bottom: 2px solid #ffa31a; padding-bottom: 5px;">Conclusion</h2>
        <p style="color: white;">QuickSort and MergeSort are pivotal sorting algorithms leveraging the power of divide and conquer. QuickSort is preferred for its in-place nature and speed, while MergeSort shines in stability and consistency. Choosing the right algorithm depends on the specific requirements and constraints of your application.</p>
    </section>
</main>

    `,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "SORTING ALGOS",
    categorySlug: "sorting-algos",
  },
];

export default blogs;
