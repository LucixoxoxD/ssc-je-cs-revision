// Offline fallback for file:// protocol
window.SUBJECTS_MANIFEST = [
  {
    "id": "eng-math",
    "order": 1,
    "title": "Engineering Mathematics",
    "icon": "📐",
    "dataFile": "eng-math.json",
    "topics": [
      {
        "id": "eng-math-discrete-mathematics",
        "title": "Discrete Mathematics",
        "syllabus": "Sets, relations, functions, partial orders, lattices, propositional and first-order logic, combinatorics, counting, recurrence relations, generating functions.",
        "status": "pending"
      },
      {
        "id": "eng-math-graph-theory",
        "title": "Graph Theory",
        "syllabus": "Connectivity, matching, vertex/edge coloring, planarity, isomorphism, Euler and Hamiltonian paths.",
        "status": "pending"
      },
      {
        "id": "eng-math-linear-algebra",
        "title": "Linear Algebra",
        "syllabus": "Matrices, determinants, system of linear equations, eigenvalues and eigenvectors, LU decomposition.",
        "status": "pending"
      },
      {
        "id": "eng-math-calculus-probability",
        "title": "Calculus & Probability",
        "syllabus": "Limits, continuity, differentiability, maxima and minima, mean value theorem, definite integrals, conditional probability, Bayes’ theorem, random variables, Poisson/Normal distributions.",
        "status": "pending"
      }
    ]
  },
  {
    "id": "digital-logic",
    "order": 2,
    "title": "Digital Logic",
    "icon": "⚡",
    "dataFile": "digital-logic.json",
    "topics": [
      {
        "id": "digital-logic-boolean-algebra",
        "title": "Boolean Algebra",
        "syllabus": "Minimization of Boolean expressions, logic gates, canonical SOP/POS forms, Karnaugh maps (K-maps), Quine-McCluskey method.",
        "status": "pending"
      },
      {
        "id": "digital-logic-combinational-circuits",
        "title": "Combinational Circuits",
        "syllabus": "Adders, subtractors, multiplexers, demultiplexers, decoders, encoders, code converters, arithmetic logic units.",
        "status": "pending"
      },
      {
        "id": "digital-logic-sequential-circuits",
        "title": "Sequential Circuits",
        "syllabus": "Latches, flip-flops (SR, JK, D, T), master-slave flip-flops, counters (synchronous and asynchronous), shift registers.",
        "status": "pending"
      },
      {
        "id": "digital-logic-number-representations",
        "title": "Number Representations",
        "syllabus": "Fixed-point and floating-point representations, IEEE 754 standard, 1’s and 2’s complement arithmetic.",
        "status": "pending"
      }
    ]
  },
  {
    "id": "coa",
    "order": 3,
    "title": "Computer Organization & Architecture",
    "icon": "💻",
    "dataFile": "coa.json",
    "topics": [
      {
        "id": "coa-machine-instructions-addressing",
        "title": "Machine Instructions & Addressing",
        "syllabus": "Instruction formats, addressing modes, instruction cycle, RISC vs. CISC architectures.",
        "status": "pending"
      },
      {
        "id": "coa-cpu-control-design",
        "title": "CPU Control Design",
        "syllabus": "ALU design, hardwired control unit, microprogrammed control unit.",
        "status": "pending"
      },
      {
        "id": "coa-pipelining",
        "title": "Pipelining",
        "syllabus": "Instruction pipeline, hazards (data, structural, control), pipeline stalls, branch prediction.",
        "status": "pending"
      },
      {
        "id": "coa-memory-hierarchy",
        "title": "Memory Hierarchy",
        "syllabus": "Cache memory mapping (direct, associative, set-associative), cache replacement policies, write policies, main memory, virtual memory, page tables, TLB.",
        "status": "pending"
      },
      {
        "id": "coa-io-interface",
        "title": "I/O Interface",
        "syllabus": "Memory-mapped I/O, programmed I/O, interrupt-driven I/O, Direct Memory Access (DMA).",
        "status": "pending"
      }
    ]
  },
  {
    "id": "pds",
    "order": 4,
    "title": "Programming & Data Structures",
    "icon": "⌨️",
    "dataFile": "pds.json",
    "topics": [
      {
        "id": "pds-c-programming",
        "title": "C Programming",
        "syllabus": "Data types, operators, precedence, control structures, functions, recursion, pointers, pointer arithmetic, dynamic memory allocation (malloc, free), structures, file handling.",
        "status": "pending"
      },
      {
        "id": "pds-linear-data-structures",
        "title": "Linear Data Structures",
        "syllabus": "Arrays, multidimensional array mapping, singly/doubly linked lists, stacks and queues (circular queue, priority queue, applications such as infix-to-postfix conversion).",
        "status": "pending"
      },
      {
        "id": "pds-non-linear-data-structures",
        "title": "Non-Linear Data Structures",
        "syllabus": "Trees, binary trees, tree traversals (inorder, preorder, postorder, level-order), Binary Search Trees (BST), AVL trees, B-Trees/B+ Trees, binary heaps, heapsort, disjoint set representations.",
        "status": "pending"
      }
    ]
  },
  {
    "id": "algorithms",
    "order": 5,
    "title": "Algorithms",
    "icon": "🧠",
    "dataFile": "algorithms.json",
    "topics": [
      {
        "id": "algorithms-analysis-complexities",
        "title": "Analysis & Complexities",
        "syllabus": "Asymptotic notations (O, Ω, Θ), recurrence relations (Master theorem, substitution method), space and time complexity.",
        "status": "pending"
      },
      {
        "id": "algorithms-core-paradigms",
        "title": "Core Paradigms",
        "syllabus": "Divide and Conquer (Merge Sort, Quick Sort, Binary Search), Greedy Algorithms (Huffman coding, fractional knapsack), Dynamic Programming (0/1 knapsack, LCS, matrix chain multiplication).",
        "status": "pending"
      },
      {
        "id": "algorithms-graph-algorithms",
        "title": "Graph Algorithms",
        "syllabus": "BFS, DFS, topological sorting, Minimum Spanning Trees (Prim’s, Kruskal’s), Single-Source Shortest Paths (Dijkstra’s, Bellman-Ford), All-Pairs Shortest Path (Floyd-Warshall).",
        "status": "pending"
      }
    ]
  },
  {
    "id": "toc-cd",
    "order": 6,
    "title": "Theory of Computation & Compiler Design",
    "icon": "⚙️",
    "dataFile": "toc-cd.json",
    "topics": [
      {
        "id": "toc-cd-toc",
        "title": "TOC",
        "syllabus": "Regular languages, Deterministic & Non-Deterministic Finite Automata (DFA, NFA), regular expressions, equivalence of DFA and NFA, pumping lemma for regular languages, Context-Free Grammars (CFG), Pushdown Automata (PDA), Turing Machines, Chomsky hierarchy, decidability, halting problem.",
        "status": "pending"
      },
      {
        "id": "toc-cd-compiler-design",
        "title": "Compiler Design",
        "syllabus": "Phases of compilation, lexical analysis, regular definitions, token recognition; Parsing techniques (Top-Down: LL(1), Bottom-Up: LR(0), SLR(1), LALR(1), CLR(1)); Syntax-directed translation (SDT), intermediate code generation (three-address code), basic blocks, flow graphs, runtime environments.",
        "status": "pending"
      }
    ]
  },
  {
    "id": "os",
    "order": 7,
    "title": "Operating Systems",
    "icon": "🖥️",
    "dataFile": "os.json",
    "topics": [
      {
        "id": "os-process-management",
        "title": "Process Management",
        "syllabus": "Process states, Process Control Block (PCB), thread concepts, CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority Scheduling, Multilevel Queue).",
        "status": "done"
      },
      {
        "id": "os-synchronization-concurrency",
        "title": "Synchronization & Concurrency",
        "syllabus": "Race conditions, critical section problem, Peterson’s solution, semaphores, mutexes, monitors, classical synchronization problems (Producer-Consumer, Reader-Writer, Dining Philosophers).",
        "status": "pending"
      },
      {
        "id": "os-deadlocks",
        "title": "Deadlocks",
        "syllabus": "Conditions for deadlock, resource allocation graphs, deadlock prevention, avoidance (Banker’s algorithm), detection, and recovery.",
        "status": "pending"
      },
      {
        "id": "os-memory-management",
        "title": "Memory Management",
        "syllabus": "Contiguous allocation, paging, segmentation, demand paging, page replacement algorithms (FIFO, Optimal, LRU), thrashing.",
        "status": "pending"
      },
      {
        "id": "os-storage-file-systems",
        "title": "Storage & File Systems",
        "syllabus": "File directory structures, disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN, LOOK), RAID architectures.",
        "status": "pending"
      }
    ]
  },
  {
    "id": "dbms",
    "order": 8,
    "title": "Database Management Systems",
    "icon": "🗄️",
    "dataFile": "dbms.json",
    "topics": [
      {
        "id": "dbms-data-modeling",
        "title": "Data Modeling",
        "syllabus": "ER diagrams, relational model, constraints, relational algebra, relational calculus.",
        "status": "pending"
      },
      {
        "id": "dbms-sql",
        "title": "SQL",
        "syllabus": "DDL, DML, DCL, joins, nested subqueries, views, triggers, indexing.",
        "status": "pending"
      },
      {
        "id": "dbms-normalization",
        "title": "Normalization",
        "syllabus": "Functional dependencies, normal forms (1NF, 2NF, 3NF, BCNF), dependency preservation, lossless-join decomposition.",
        "status": "pending"
      },
      {
        "id": "dbms-transactions-concurrency",
        "title": "Transactions & Concurrency",
        "syllabus": "ACID properties, serializability (conflict and view serializability), concurrency control protocols (lock-based protocols, 2PL, timestamp ordering), deadlock handling, crash recovery and write-ahead logging (WAL).",
        "status": "pending"
      }
    ]
  },
  {
    "id": "cn",
    "order": 9,
    "title": "Computer Networks",
    "icon": "🌐",
    "dataFile": "cn.json",
    "topics": [
      {
        "id": "cn-network-models",
        "title": "Network Models",
        "syllabus": "OSI 7-layer reference model, TCP/IP protocol suite.",
        "status": "pending"
      },
      {
        "id": "cn-physical-data-link-layers",
        "title": "Physical & Data Link Layers",
        "syllabus": "Transmission media, framing, flow control (Stop-and-Wait, Go-Back-N, Selective Repeat), error detection/correction (CRC, Hamming code), MAC sublayer, CSMA/CD, Ethernet, switches, bridges.",
        "status": "pending"
      },
      {
        "id": "cn-network-layer",
        "title": "Network Layer",
        "syllabus": "IPv4 and IPv6 packet structures, classful and classless IP addressing (CIDR), subnetting, supernetting, routing algorithms (Distance Vector, Link State), NAT, ARP, DHCP, ICMP.",
        "status": "pending"
      },
      {
        "id": "cn-transport-layer",
        "title": "Transport Layer",
        "syllabus": "Connection management, TCP vs. UDP, flow control, TCP congestion control algorithms (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery).",
        "status": "pending"
      },
      {
        "id": "cn-application-layer",
        "title": "Application Layer",
        "syllabus": "DNS, HTTP/HTTPS, FTP, SMTP, POP3, IMAP, sockets.",
        "status": "pending"
      }
    ]
  }
]
;
