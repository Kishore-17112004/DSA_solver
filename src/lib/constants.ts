import { DSAModule, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Learn", href: "/learn" },
  { label: "Playground", href: "/playground" },
  { label: "AI Tutor", href: "/assistant" },
  { label: "Challenges", href: "/challenges" },
  { label: "Analytics", href: "/analytics" },
];

export const dsaModules: DSAModule[] = [
  { slug: "arrays", title: "Arrays", summary: "Visual indexing and traversal.", complexity: "O(1) access", xp: 100 },
  { slug: "linked-lists", title: "Linked Lists", summary: "Node-based insertion and deletion.", complexity: "O(n) search", xp: 120 },
  { slug: "stacks", title: "Stacks", summary: "LIFO operations and use-cases.", complexity: "O(1) push/pop", xp: 90 },
  { slug: "queues", title: "Queues", summary: "FIFO scheduling simulations.", complexity: "O(1) enqueue/dequeue", xp: 90 },
  { slug: "circular-queue", title: "Circular Queue", summary: "Wrap-around buffering with visual pointers.", complexity: "O(1) ops", xp: 95 },
  { slug: "trees", title: "Trees", summary: "Hierarchy, traversal, and recursion.", complexity: "O(log n) avg search", xp: 150 },
  { slug: "binary-search-trees", title: "Binary Search Trees", summary: "Ordered tree insertion/search interactions.", complexity: "O(log n) avg", xp: 160 },
  { slug: "avl-trees", title: "AVL Trees", summary: "Balanced tree rotations with animated pivots.", complexity: "O(log n)", xp: 180 },
  { slug: "graphs", title: "Graphs", summary: "BFS/DFS and pathfinding animations.", complexity: "O(V + E)", xp: 180 },
  { slug: "hash-tables", title: "Hash Tables", summary: "Collision strategies and bucket dynamics.", complexity: "O(1) avg", xp: 130 },
  { slug: "heaps", title: "Heaps", summary: "Priority queue and heapify motion patterns.", complexity: "O(log n)", xp: 140 },
  { slug: "tries", title: "Tries", summary: "Prefix matching and branching decisions.", complexity: "O(m)", xp: 150 },
  { slug: "recursion", title: "Recursion", summary: "Call stack visualization and unwinding.", complexity: "Varies", xp: 110 },
  { slug: "sorting", title: "Sorting Algorithms", summary: "Compare runtime with visual traces.", complexity: "O(n log n)", xp: 160 },
  { slug: "searching", title: "Searching Algorithms", summary: "Linear vs binary search animation races.", complexity: "O(log n) best", xp: 120 },
  { slug: "dynamic-programming", title: "Dynamic Programming", summary: "Subproblem decomposition flow.", complexity: "Varies", xp: 200 },
  { slug: "greedy-algorithms", title: "Greedy Algorithms", summary: "Local optimal decisions and proof intuition.", complexity: "Varies", xp: 170 },
];
