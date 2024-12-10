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
            <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; margin-top: 16px; margin-bottom:16px; border-radius: 5px; overflow-x: auto;">
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
            <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; margin-top: 16px; margin-bottom:16px; border-radius: 5px; overflow-x: auto;">
arr = [10, 20, 30, 40, 50]
for element in arr:
    print(element)
</pre>

            <h3 style="color: #808080;">2. Insertion</h3>
            <p>Add an element at a specific position (in dynamic arrays):</p>
            <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; margin-top: 16px; margin-bottom:16px; border-radius: 5px; overflow-x: auto;">
let arr = [1, 2, 4, 5];
arr.splice(2, 0, 3); // Insert 3 at index 2
console.log(arr); // [1, 2, 3, 4, 5]
</pre>

            <h3 style="color: #808080;">3. Deletion</h3>
            <p>Remove an element, which may require shifting:</p>
            <pre style="background-color: #292929; border: 2px solid #ffa31a; padding: 10px; margin-top: 16px; margin-bottom:16px; border-radius: 5px; overflow-x: auto;">
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
  /*  {
    id: 8,
    title: "Implementing Stack and Queue with Linked Lists",
    slug: "Implementing-Stack-and-Queue-with-Linked-Lists",
    description:
      "Explore how stacks and queues can be implemented using linked lists for dynamic sizing.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
        Blog 9: Implementing Stacks and Queues Using Linked Lists
Introduction
Linked lists are a versatile data structure, enabling dynamic memory allocation and flexible operations. They can effectively implement stacks and queues. This blog explores how linked lists provide the backbone for these two fundamental data structures.

Implementing a Stack Using Linked List
In a stack, the topmost node holds the most recent element added. A linked list can efficiently represent a stack by inserting and removing elements at the head.

Operations
Push: Insert an element at the head of the list.
Pop: Remove the head element.
Peek: Return the value of the head element without removal.
Code Implementation (Python)
python
Copy code
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
Advantages
Efficient insertion and deletion operations (
𝑂
(
1
)
O(1)).
Dynamic size adjustment without wasted memory.
Implementing a Queue Using Linked List
A queue with linked lists has two pointers:

Front: Points to the first element.
Rear: Points to the last element.
Operations
Enqueue: Insert an element at the rear.
Dequeue: Remove an element from the front.
Peek: Return the value at the front without removal.
Code Implementation (JavaScript)
javascript
Copy code
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
Advantages
No fixed size constraint as in arrays.
Efficient memory utilization.
Applications of Stack and Queue with Linked Lists
Stack:

Undo/Redo functionality in editors.
Backtracking problems like solving mazes or puzzles.
Queue:

Task scheduling systems like Round-Robin CPU scheduling.
Breadth-First Search (BFS) in graphs.
Challenges and Debugging Tips
Ensure proper management of the next pointer to avoid memory leaks or unintended data overwrites.
Test edge cases such as single-node stacks/queues or operations on empty structures.
Conclusion
By combining stacks and queues with linked lists, you achieve robust and efficient implementations. These structures form the building blocks for solving many complex problems, making them a must-know for developers.


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
    imgUrl: "/home-hero-bg.jpg",
    content: `
        Blog 10: Real-World Applications of Stacks and Queues
Introduction
Stacks and queues are more than theoretical data structures; they power many real-world applications. This blog will dive into how these structures are used in practical scenarios, solving everyday computational challenges.

Applications of Stacks
Undo/Redo Functionality

Example: In text editors like Microsoft Word or coding IDEs, stacks are used to store the sequence of operations. The "undo" operation pops the last action from the stack, while "redo" pushes it back.
Syntax Parsing

Example: Compilers use stacks to check for balanced parentheses and process nested structures like expressions or XML/HTML tags.
Function Call Management

Example: The call stack manages function calls in programming languages, storing local variables and return addresses for recursive functions.
Backtracking Algorithms

Example: Solving mazes, puzzles, or games (like the Knight's Tour in chess) often relies on stacks for backtracking.
Applications of Queues
Task Scheduling

Example: Operating systems use queues for managing CPU tasks in round-robin scheduling.
Breadth-First Search (BFS)

Example: BFS in graphs and trees uses queues to explore nodes level by level, making it crucial for shortest path problems.
Print Queue Management

Example: Printers manage jobs using queues to ensure the first job added is printed first.
Data Packet Management in Networking

Example: Routers use queues to manage data packets efficiently, handling delays and prioritization.
How They Work Together
In some scenarios, stacks and queues complement each other:

Algorithm Design: For example, you can implement one data structure using the other. A stack can be implemented using two queues and vice versa.
Web Browser: The "back" button is a stack, while tabs opened in sequence may form a queue.
Code Example: Balancing Parentheses Using a Stack
python
Copy code
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
Challenges and Considerations
Performance: While stacks and queues are efficient for many operations, memory allocation in linked list-based implementations can introduce overhead.
Scalability: Dynamic resizing of array-based stacks or queues must be handled carefully to ensure optimal performance.
Conclusion
From compilers to networking systems, stacks and queues are foundational tools that enable complex operations. Mastering these data structures prepares you to design efficient, real-world solutions.


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
    imgUrl: "/home-hero-bg.jpg",
    content: `
         Blog 11: Binary Trees Simplified
Introduction
Binary trees are a foundational concept in computer science and programming. With each node having at most two children, binary trees provide an intuitive way to represent hierarchical data. This blog will break down the basics of binary trees, their structure, and why they’re essential.

What is a Binary Tree?
A binary tree is a tree data structure in which each node has at most two children:

Left child
Right child
Key Terminology
Root: The topmost node of the tree.
Leaf: A node with no children.
Parent and Child: A parent node points to its children.
Subtree: A tree formed by a node and its descendants.
Height of a Tree: The length of the longest path from the root to a leaf.
Types of Binary Trees
Full Binary Tree

Every node has either 0 or 2 children.
Example: A decision tree.
Complete Binary Tree

All levels are fully filled except possibly the last, which is filled from left to right.
Example: Binary heaps.
Perfect Binary Tree

All interior nodes have two children, and all leaves are at the same level.
Example: Idealized trees in mathematical problems.
Binary Search Tree (BST)

A binary tree where the left child contains values less than the parent, and the right child contains values greater.
Example: Data lookups and storage.
Basic Operations in a Binary Tree
Insertion: Add a node in the tree while maintaining its structure.
Traversal: Visit nodes in a specific order.
Inorder (Left, Root, Right): Yields sorted data in BST.
Preorder (Root, Left, Right): Used for copying trees.
Postorder (Left, Right, Root): Useful in evaluating expressions.
Example: Inorder Traversal (Python)
python
Copy code
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
Applications of Binary Trees
Hierarchical Data Representation

File systems (folders and subfolders).
Search Optimization

Binary Search Trees (BSTs) reduce search complexity to 
𝑂
(
log
⁡
𝑛
)
O(logn).
Expression Evaluation

Abstract syntax trees in compilers represent arithmetic expressions.
Data Compression

Huffman coding uses binary trees for efficient encoding.
Challenges
Balancing trees (e.g., AVL trees or Red-Black trees) to maintain efficiency.
Managing large datasets in memory-constrained environments.
Conclusion
Binary trees simplify complex problems by offering an organized, hierarchical structure. Their applications in search, storage, and compression make them indispensable for programmers and engineers alike.

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
    imgUrl: "/home-hero-bg.jpg",
    content: `
           Blog 14: Binary Search Trees: A Deeper Dive
Introduction
Binary Search Trees (BSTs) are a specialized type of binary tree that provides efficient ways to store, retrieve, and manipulate data. With their structured organization, they allow for quick searches, making them a cornerstone of computer science.

What is a Binary Search Tree?
A Binary Search Tree is a binary tree with the following properties:

The value of every node in the left subtree is less than the value of its parent.
The value of every node in the right subtree is greater than the value of its parent.
Both subtrees are also binary search trees.
Example
Tree Structure:

markdown
Copy code
       8
      / \
     3   10
    / \    \
   1   6    14
      / \   /
     4   7 13
Characteristics:

Left subtree of 8: All values (1, 3, 4, 6, 7) are less than 8.
Right subtree of 8: All values (10, 13, 14) are greater than 8.
Operations in a Binary Search Tree
1. Search
The BST property allows for fast search operations. At each step, you eliminate half the remaining nodes by deciding whether to go left or right.

Time Complexity:

Average: 
𝑂
(
log
⁡
𝑛
)
O(logn)
Worst Case (unbalanced tree): 
𝑂
(
𝑛
)
O(n)
Example (Python):

python
Copy code
def search_bst(node, key):
    if not node or node.value == key:
        return node
    if key < node.value:
        return search_bst(node.left, key)
    return search_bst(node.right, key)
2. Insertion
To insert a new value, traverse the tree to find the correct spot while maintaining the BST property.

Example (Python):

python
Copy code
def insert_bst(node, key):
    if not node:
        return Node(key)
    if key < node.value:
        node.left = insert_bst(node.left, key)
    else:
        node.right = insert_bst(node.right, key)
    return node
3. Deletion
Deletion in a BST can be tricky as you need to maintain its structure.
Three cases:

Node with no children: Simply remove it.
Node with one child: Replace the node with its child.
Node with two children: Replace the node with its inorder successor (smallest node in the right subtree).
Example (Python):

python
Copy code
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
Applications of Binary Search Trees
Dynamic Sets

Store dynamic data like IDs, usernames, or timestamps.
Efficient Searching

Used in databases and dictionaries to retrieve data efficiently.
Range Queries

Easily find elements within a specific range.
Hierarchy Representation

Organize hierarchical data like folder structures.
Advantages and Disadvantages
Advantages
Quick lookups, insertions, and deletions (average 
𝑂
(
log
⁡
𝑛
)
O(logn)).
Intuitive and straightforward implementation.
Disadvantages
Performance degrades with an unbalanced tree.
Requires balancing techniques for optimal efficiency.
Conclusion
Binary Search Trees offer a robust and efficient way to store and manage data. Understanding their operations and structure is crucial for any programmer dealing with dynamic datasets.

`,
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
            Blog 15: Balancing Trees: The Power of AVL
Introduction
While Binary Search Trees (BSTs) offer efficient data storage and retrieval, their performance can degrade when unbalanced. Enter AVL Trees, a self-balancing variant of BSTs named after its inventors Adelson-Velsky and Landis. These trees guarantee that the difference in heights between the left and right subtrees is always within one, ensuring optimal performance.

What is an AVL Tree?
An AVL Tree is a binary search tree with an additional balancing property:

The balance factor (height difference between left and right subtrees) of any node is either -1, 0, or 1.
If a tree violates this property after an insertion or deletion, rotations are performed to restore balance.

Example
Unbalanced BST:

markdown
Copy code
       10
         \
         20
           \
           30
After Balancing (AVL Tree):

markdown
Copy code
       20
      /  \
     10   30
Operations in AVL Trees
1. Insertion
In AVL trees, after inserting a node, you calculate the balance factor for each ancestor node. If any node violates the AVL property, perform rotations to restore balance.

Steps:

Insert the node like in a BST.
Update heights of affected nodes.
Perform rotations (if needed).
2. Rotations
AVL trees use rotations to maintain balance. There are four types:

Right Rotation (Single Rotation)
Used for Left-Left (LL) imbalance.

markdown
Copy code
      z
     /
    y
   /
  x
After Right Rotation:

markdown
Copy code
     y
    / \
   x   z
Left Rotation (Single Rotation)
Used for Right-Right (RR) imbalance.

markdown
Copy code
  z
   \
    y
     \
      x
After Left Rotation:

markdown
Copy code
     y
    / \
   z   x
Left-Right Rotation (Double Rotation)
Used for Left-Right (LR) imbalance.

Perform a Left Rotation on the left child.
Followed by a Right Rotation on the unbalanced node.
Right-Left Rotation (Double Rotation)
Used for Right-Left (RL) imbalance.

Perform a Right Rotation on the right child.
Followed by a Left Rotation on the unbalanced node.
Insertion Example (Python)
python
Copy code
class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

def get_height(node):
    return node.height if node else 0

def get_balance(node):
    return get_height(node.left) - get_height(node.right)

def rotate_right(y):
    x = y.left
    T2 = x.right
    x.right = y
    y.left = T2
    y.height = 1 + max(get_height(y.left), get_height(y.right))
    x.height = 1 + max(get_height(x.left), get_height(x.right))
    return x

def rotate_left(x):
    y = x.right
    T2 = y.left
    y.left = x
    x.right = T2
    x.height = 1 + max(get_height(x.left), get_height(x.right))
    y.height = 1 + max(get_height(y.left), get_height(y.right))
    return y

def insert(node, key):
    if not node:
        return Node(key)
    if key < node.key:
        node.left = insert(node.left, key)
    else:
        node.right = insert(node.right, key)
    
    node.height = 1 + max(get_height(node.left), get_height(node.right))
    balance = get_balance(node)
    
    # Left-Left Case
    if balance > 1 and key < node.left.key:
        return rotate_right(node)
    # Right-Right Case
    if balance < -1 and key > node.right.key:
        return rotate_left(node)
    # Left-Right Case
    if balance > 1 and key > node.left.key:
        node.left = rotate_left(node.left)
        return rotate_right(node)
    # Right-Left Case
    if balance < -1 and key < node.right.key:
        node.right = rotate_right(node.right)
        return rotate_left(node)
    
    return node
Advantages of AVL Trees
Guaranteed Logarithmic Height
AVL Trees ensure 
𝑂
(
log
⁡
𝑛
)
O(logn) for search, insertion, and deletion operations.

Balancing Property
Prevents performance degradation in the case of skewed trees.

Ideal for Frequent Lookups
Widely used in applications like databases and file systems.

Disadvantages
Complexity of Rotations
Rotations add overhead compared to a simple BST.

Insertion and Deletion Overhead
Additional steps are needed to maintain balance.

Conclusion
AVL Trees are an excellent choice for applications requiring frequent insertions and lookups. By maintaining balance, they ensure consistent performance across all operations, making them a cornerstone of efficient data structures.
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
    imgUrl: "/home-hero-bg.jpg",
    content: `
            Blog 16: Graphs 101: Representation and Traversal Techniques
Introduction
Graphs are one of the most versatile and powerful data structures in computer science. From social networks to routing algorithms, graphs help model and solve complex problems efficiently. This blog explores how to represent graphs in a program and covers key traversal techniques like BFS and DFS.

What is a Graph?
A graph is a collection of nodes (vertices) and edges connecting them.

Vertices: Represent entities (e.g., cities, people).
Edges: Represent connections between entities (e.g., roads, relationships).
Graphs can be:

Directed: Edges have a direction (e.g., A → B).
Undirected: Edges have no direction (e.g., A ↔ B).
Graph Representations
Adjacency Matrix
A 2D matrix where rows and columns represent vertices, and a cell indicates if an edge exists.

Example:

markdown
Copy code
0 1 2
-----
0| 0 1 1
1| 1 0 1
2| 1 1 0
Here, vertex 0 is connected to 1 and 2.

Advantages:

Simple to implement.
Efficient for dense graphs.
Disadvantages:

Requires 
𝑂
(
𝑉
2
)
O(V 
2
 ) space, even for sparse graphs.
Adjacency List
A list of vertices, where each vertex points to its adjacent vertices.

Example:

css
Copy code
0 → [1, 2]
1 → [0, 2]
2 → [0, 1]
Advantages:

Space-efficient for sparse graphs.
Easy to traverse.
Disadvantages:

Less efficient for dense graphs.
Graph Traversal Techniques
1. Breadth-First Search (BFS)
BFS explores vertices layer by layer, starting from a source vertex.

Use case: Shortest path in an unweighted graph.
Algorithm:

Initialize a queue and add the source vertex.
Mark the source as visited.
Dequeue a vertex, process it, and enqueue its unvisited neighbors.
Implementation (Python):

python
Copy code
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

# Example graph as adjacency list
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
}
bfs(graph, 0)
2. Depth-First Search (DFS)
DFS explores as far as possible along a branch before backtracking.

Use case: Detect cycles, solve puzzles, or explore mazes.
Algorithm:

Start from a vertex and mark it as visited.
Recursively visit all unvisited neighbors.
Implementation (Python):

python
Copy code
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start, end=" ")
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# Example graph as adjacency list
dfs(graph, 0)
Applications of Graph Traversals
BFS

Social network analysis.
Finding shortest paths (e.g., in a maze or unweighted graph).
DFS

Topological sorting.
Detecting connected components or cycles.
Choosing the Right Representation
Use an adjacency matrix for dense graphs or when you frequently query edges.
Use an adjacency list for sparse graphs or when memory is a concern.
Conclusion
Graphs are essential for solving a vast array of real-world problems. With a clear understanding of their representations and traversal techniques, you can unlock the full potential of this data structure.

Would you like to move to the next topic: Graph Algorithms: Prim's and Kruskal's MST?

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
      "Delves into two popular MST algorithms: Prim's Algorithm and Kruskal's Algorithm, breaking down their processes, implementations, and applications.",
    imgUrl: "/home-hero-bg.jpg",
    content: `
    Blog 17: Graph Algorithms: Prim's and Kruskal's MST
Introduction
Graphs are fundamental in representing connected systems, such as networks, transport grids, and more. Among the many problems in graph theory, finding the Minimum Spanning Tree (MST) is critical for optimizing costs. This blog delves into two popular MST algorithms: Prim's Algorithm and Kruskal's Algorithm, breaking down their processes, implementations, and applications.

           What is a Minimum Spanning Tree (MST)?
A spanning tree of a graph is a subgraph that connects all vertices with the minimum number of edges. The MST is the spanning tree with the minimum possible total edge weight.

Works only on connected, weighted, and undirected graphs.
Applications include network design, circuit connections, and transportation routing.
Prim's Algorithm
Concept
Prim's Algorithm grows the MST by starting with a single vertex and adding the smallest edge connecting the tree to a vertex outside it.

Steps
Start with any vertex as part of the MST.
Select the smallest edge connecting the MST to an unvisited vertex.
Repeat until all vertices are included in the MST.
Implementation (Python):
python
Copy code
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
Kruskal's Algorithm
Concept
Kruskal's Algorithm builds the MST by considering all edges in ascending order of weight, ensuring no cycles form.

Steps
Sort all edges by weight.
Add edges one by one to the MST, ensuring no cycles are formed.
Stop when the MST includes 
𝑉
−
1
V−1 edges (where 
𝑉
V is the number of vertices).
Implementation (Python):
python
Copy code
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
Comparison
Feature	Prim's Algorithm	Kruskal's Algorithm
Approach	Greedy, vertex-based	Greedy, edge-based
Graph Representation	Works well with adjacency list	Works well with edge list
Efficiency	Faster for dense graphs	Faster for sparse graphs
Applications
Prim's Algorithm: Used in network design problems like LAN or telecommunication networks.
Kruskal's Algorithm: Effective in constructing roads or railway connections.
Conclusion
Prim's and Kruskal's algorithms provide two efficient approaches to constructing MSTs. Understanding their differences helps in choosing the right algorithm based on the graph's characteristics and problem requirements.


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
    imgUrl: "/home-hero-bg.jpg",
    content: `
          Blog 19: Detecting Cycles in Graphs: Using DFS
Introduction
Graphs are versatile structures used to represent networks, relationships, and dependencies. However, detecting cycles in graphs is crucial for applications like dependency management, network routing, and graph validation. This blog focuses on cycle detection in directed and undirected graphs using Depth First Search (DFS), a systematic graph traversal technique.

Cycle Detection in Undirected Graphs
Concept
In an undirected graph, a cycle occurs when a node is revisited during traversal, excluding the immediate parent node.

Algorithm
Use DFS to explore each node.
Maintain a visited set to track visited nodes.
For each unvisited neighbor:
If it’s already visited and not the parent, a cycle exists.
Implementation (Python):
python
Copy code
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
Cycle Detection in Directed Graphs
Concept
In directed graphs, a cycle exists when a node is revisited during traversal within the same DFS path. This can be checked using two sets:

visited: Tracks all nodes visited during DFS.
rec_stack: Tracks nodes in the current recursion stack.
Algorithm
Use DFS to explore each node.
For each unvisited node:
Mark it as visited and add it to rec_stack.
If any neighbor is in rec_stack, a cycle exists.
Remove the node from rec_stack upon backtracking.
Implementation (Python):
python
Copy code
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
Applications of Cycle Detection
Deadlock Detection: Identifying resource or process deadlocks in operating systems.
Task Scheduling: Validating dependencies in project management to prevent circular dependencies.
Graph Validation: Ensuring the correctness of dependency graphs, such as in package managers (e.g., npm, pip).
Complexity Analysis
Graph Type	Time Complexity	Space Complexity
Undirected Graph	
𝑂
(
𝑉
+
𝐸
)
O(V+E)	
𝑂
(
𝑉
)
O(V)
Directed Graph	
𝑂
(
𝑉
+
𝐸
)
O(V+E)	
𝑂
(
𝑉
)
O(V)
Conclusion
Detecting cycles is critical for various graph-based applications. DFS offers a robust and efficient approach to this problem, catering to both undirected and directed graphs. Understanding the implementation nuances ensures reliable and efficient cycle detection.

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
    imgUrl: "/home-hero-bg.jpg",
    content: `
        Blog 20: Sorting Basics: Bubble, Selection, and Insertion Sort
Introduction
Sorting is a fundamental operation in computer science, used to arrange data in a specific order. Whether it's organizing a list of names, arranging numbers, or managing database records, sorting forms the backbone of countless applications. In this blog, we’ll explore the basics of three elementary sorting algorithms: Bubble Sort, Selection Sort, and Insertion Sort.

Bubble Sort
Concept
Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they’re in the wrong order. This process continues until the list is sorted.

Algorithm
Compare adjacent elements.
Swap if the first element is greater than the second.
Repeat until no swaps are needed.
Implementation (Python):
python
Copy code
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
Time Complexity: 
𝑂
(
𝑛
2
)
O(n 
2
 ) in the worst and average cases, 
𝑂
(
𝑛
)
O(n) in the best case.
Space Complexity: 
𝑂
(
1
)
O(1).
Selection Sort
Concept
Selection Sort divides the list into two parts: sorted and unsorted. It repeatedly selects the smallest element from the unsorted part and moves it to the sorted part.

Algorithm
Find the smallest element in the unsorted section.
Swap it with the first element of the unsorted section.
Repeat for the remaining elements.
Implementation (Python):
python
Copy code
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
Time Complexity: 
𝑂
(
𝑛
2
)
O(n 
2
 ) for all cases.
Space Complexity: 
𝑂
(
1
)
O(1).
Insertion Sort
Concept
Insertion Sort builds the sorted array one element at a time. It takes an element from the unsorted section and inserts it into its correct position in the sorted section.

Algorithm
Start with the second element as the current element.
Compare it with the elements in the sorted section.
Shift larger elements to the right and insert the current element in its correct position.
Implementation (Python):
python
Copy code
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
Time Complexity: 
𝑂
(
𝑛
2
)
O(n 
2
 ) in the worst and average cases, 
𝑂
(
𝑛
)
O(n) in the best case.
Space Complexity: 
𝑂
(
1
)
O(1).
Comparison
Algorithm	Best Case	Worst Case	Stable	In-Place
Bubble Sort	
𝑂
(
𝑛
)
O(n)	
𝑂
(
𝑛
2
)
O(n 
2
 )	Yes	Yes
Selection Sort	
𝑂
(
𝑛
2
)
O(n 
2
 )	
𝑂
(
𝑛
2
)
O(n 
2
 )	No	Yes
Insertion Sort	
𝑂
(
𝑛
)
O(n)	
𝑂
(
𝑛
2
)
O(n 
2
 )	Yes	Yes
Conclusion
While these algorithms may not be the most efficient for large datasets, they are fundamental for understanding the mechanics of sorting. Each has its strengths and is suitable for small or nearly sorted data.

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
    imgUrl: "/home-hero-bg.jpg",
    content: `
    Blog 21: QuickSort and MergeSort: Divide and Conquer in Action
Introduction
Sorting algorithms are essential in programming, and among them, QuickSort and MergeSort are two powerful methods based on the divide and conquer paradigm. They are efficient, versatile, and widely used for large datasets. In this blog, we’ll delve into the mechanics of QuickSort and MergeSort, exploring their principles, implementations, and advantages.

QuickSort
Concept
QuickSort divides the array into two subarrays around a pivot element, such that elements smaller than the pivot are on the left and those larger are on the right. It recursively sorts the subarrays.

Algorithm
Pick a pivot element (can be the first, last, or median element).
Partition the array into two halves around the pivot.
Recursively apply QuickSort on both halves.
Implementation (Python):
python
Copy code
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
Time Complexity:
Best/Average Case: 
𝑂
(
𝑛
log
⁡
𝑛
)
O(nlogn)
Worst Case: 
𝑂
(
𝑛
2
)
O(n 
2
 ) (when the pivot is poorly chosen).
Space Complexity: 
𝑂
(
log
⁡
𝑛
)
O(logn) for the recursion stack.
MergeSort
Concept
MergeSort divides the array into halves, recursively sorts them, and then merges the sorted halves back together.

Algorithm
Divide the array into two halves.
Recursively sort each half.
Merge the two sorted halves into one.
Implementation (Python):
python
Copy code
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
Time Complexity:
Best/Worst/Average Case: 
𝑂
(
𝑛
log
⁡
𝑛
)
O(nlogn)
Space Complexity: 
𝑂
(
𝑛
)
O(n) (for auxiliary arrays during merging).
Comparison
Algorithm	Best Case	Worst Case	Stable	In-Place
QuickSort	
𝑂
(
𝑛
log
⁡
𝑛
)
O(nlogn)	
𝑂
(
𝑛
2
)
O(n 
2
 )	No	Yes
MergeSort	
𝑂
(
𝑛
log
⁡
𝑛
)
O(nlogn)	
𝑂
(
𝑛
log
⁡
𝑛
)
O(nlogn)	Yes	No
Applications
QuickSort:
Best for datasets that fit in memory.
Used in libraries like C++ STL sort() and Python’s sorted().
MergeSort:
Ideal for linked lists and external sorting (datasets that don’t fit in memory).
Conclusion
QuickSort and MergeSort are pivotal sorting algorithms leveraging the power of divide and conquer. QuickSort is preferred for its in-place nature and speed, while MergeSort shines in stability and consistency. Choosing the right algorithm depends on the specific requirements and constraints of your application.`,
    featured: false,
    author: "Muzzamil Bukhari",
    category: "SORTING ALGOS",
    categorySlug: "sorting-algos",
  }, */
];

export default blogs;
