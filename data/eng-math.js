// Offline fallback for file:// protocol
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["eng-math"] = {
  "id": "eng-math",
  "order": 1,
  "title": "Engineering Mathematics",
  "icon": "📐",
  "description": "Discrete Mathematics, Graph Theory, Linear Algebra, Calculus & Probability.",
  "topics": [
    {
      "id": "eng-math-discrete-mathematics",
      "title": "Discrete Mathematics",
      "status": "done",
      "explanation": "Discrete Mathematics forms the theoretical backbone of computer science, establishing formal mathematical structures used in algorithms, database theory, cryptography, and logic design. A set is an unordered collection of distinct elements, while relations establish links between elements of sets as subsets of Cartesian products $A \\times B$. Binary relations on a set $A$ possess fundamental properties including reflexivity (every element relates to itself), symmetry (two-way relationships), anti-symmetry (two-way relationships only hold for identical elements), and transitivity (chained relationships). An equivalence relation satisfies reflexivity, symmetry, and transitivity, partitioning a set into disjoint equivalence classes. A partial order (poset) satisfies reflexivity, anti-symmetry, and transitivity, enabling hierarchical structuring visualized through Hasse diagrams. When every pair of elements in a poset has a unique greatest lower bound (meet $\\wedge$) and least upper bound (join $\\vee$), the structure is termed a lattice. Functions map domain inputs uniquely to codomain targets and are categorized into injections (one-to-one), surjections (onto), and bijections (invertible). Propositional logic governs truth values using connectives $(\\neg, \\wedge, \\vee, \\to, \\leftrightarrow)$, where an implication $p \\to q$ is logically equivalent to its contrapositive $\\neg q \\to \\neg p$. First-order logic introduces universal $(\\forall)$ and existential $(\\exists)$ quantifiers. Combinatorics and the Pigeonhole Principle provide deterministic counting bounds, while recurrence relations model iterative processes solvable via characteristic roots and compact generating functions.",
      "keyPoints": [
        "Total Relations & Properties on an $n$-element set: Total possible relations = $2^{n^2}$. Number of reflexive relations = $2^{n(n-1)}$. Number of symmetric relations = $2^{n(n+1)/2}$. Number of reflexive and symmetric relations = $2^{n(n-1)/2}$.",
        "Equivalence Relation & Partitioning: A relation is an equivalence relation if and only if it is reflexive, symmetric, and transitive. Every equivalence relation partitions the set into mutually disjoint equivalence classes whose union equals the original set.",
        "Partial Order (Poset): A relation is a Partial Order (poset) if and only if it is reflexive, anti-symmetric, and transitive. Represented visually using Hasse diagrams where self-loops (reflexivity) and transitive edges are omitted.",
        "Lattice Definition: A poset $(L, \\le)$ is a lattice if and only if every two elements $a, b \\in L$ have a unique greatest lower bound (GLB or meet, $a \\wedge b$) and a unique least upper bound (LUB or join, $a \\vee b$).",
        "Function Counting Theorems: For $|A| = m$ and $|B| = n$: Total functions $A \\to B = n^m$. Injective (one-to-one) functions = $P(n, m) = \\frac{n!}{(n-m)!}$ (requires $n \\ge m$, else $0$). Bijective functions exist only when $m = n$, with total count = $n!$.",
        "Logical Implication & Contrapositive: $p \\to q \\equiv \\neg p \\vee q$. The contrapositive $\\neg q \\to \\neg p$ is always logically equivalent to $p \\to q$. The converse ($q \\to p$) and inverse ($\\neg p \\to \\neg q$) are equivalent to each other, but NOT equivalent to the original conditional statement.",
        "Quantifier Negation Laws: $\\neg(\\forall x \\, P(x)) \\equiv \\exists x \\, \\neg P(x)$ and $\\neg(\\exists x \\, P(x)) \\equiv \\forall x \\, \\neg P(x)$. Negating an implication inside a quantifier gives: $\\neg(\\forall x \\, (P(x) \\to Q(x))) \\equiv \\exists x \\, (P(x) \\wedge \\neg Q(x))$.",
        "Pigeonhole Principle (PHP): If $n$ items are distributed into $k$ containers ($n > k$), at least one container must hold at least $\\lceil n/k \\rceil$ items. To guarantee at least $m$ items in one container, minimum items required = $k(m - 1) + 1$.",
        "Inclusion-Exclusion Principle: For two sets: $|A \\cup B| = |A| + |B| - |A \\cap B|$. For three sets: $|A \\cup B \\cup C| = |A| + |B| + |C| - (|A \\cap B| + |B \\cap C| + |C \\cap A|) + |A \\cap B \\cap C|$.",
        "Generating Functions: The ordinary generating function for sequence ${a_n}$ is $G(x) = \\sum_{n=0}^\\infty a_n x^n$. For constant sequence $a_n = 1$, $G(x) = \\frac{1}{1-x}$. For geometric sequence $a_n = r^n$, $G(x) = \\frac{1}{1-rx}$."
      ],
      "tables": [
        {
          "caption": "Comparison: Binary Relation Properties and Formulas on Set of Size $n$",
          "headers": [
            "Relation Type",
            "Defining Mathematical Condition",
            "Counting Formula ($|A|=n$)",
            "Count for $n=3$"
          ],
          "rows": [
            [
              "Reflexive",
              "$\\forall a \\in A, (a,a) \\in R$",
              "$2^{n(n-1)}$",
              "$2^{3 \\times 2} = 2^6 = 64$"
            ],
            [
              "Symmetric",
              "$\\forall a,b \\in A, (a,b) \\in R \\implies (b,a) \\in R$",
              "$2^{n(n+1)/2}$",
              "$2^{3 \\times 4 / 2} = 2^6 = 64$"
            ],
            [
              "Reflexive & Symmetric",
              "Both reflexive and symmetric simultaneously",
              "$2^{n(n-1)/2}$",
              "$2^{3 \\times 2 / 2} = 2^3 = 8$"
            ],
            [
              "Anti-symmetric",
              "$(a,b) \\in R \\land (b,a) \\in R \\implies a = b$",
              "$2^n \\times 3^{n(n-1)/2}$",
              "$2^3 \\times 3^3 = 8 \\times 27 = 216$"
            ],
            [
              "Total Possible Relations",
              "Any arbitrary subset of $A \\times A$",
              "$2^{n^2}$",
              "$2^9 = 512$"
            ]
          ]
        },
        {
          "caption": "Logic Truth Table Variations: Conditional, Variations and Negation",
          "headers": [
            "Statement Form",
            "Name / Relation",
            "Equivalent Disjunctive Form",
            "Truth Value when $p=T, q=F$"
          ],
          "rows": [
            [
              "$p \\to q$",
              "Original Conditional",
              "$\\neg p \\vee q$",
              "False (Only case implication fails)"
            ],
            [
              "$\\neg q \\to \\neg p$",
              "Contrapositive",
              "$\\neg(\\neg q) \\vee \\neg p \\equiv \\neg p \\vee q$",
              "False (Identical to $p \\to q$)"
            ],
            [
              "$q \\to p$",
              "Converse",
              "$\\neg q \\vee p$",
              "True (Not equivalent to $p \\to q$)"
            ],
            [
              "$\\neg p \\to \\neg q$",
              "Inverse",
              "$p \\vee \\neg q$",
              "True (Equivalent to Converse)"
            ],
            [
              "$\\neg(p \\to q)$",
              "Negation of Implication",
              "$p \\wedge \\neg q$",
              "True (Opposite of $p \\to q$)"
            ]
          ]
        }
      ],
      "examples": [
        {
          "question": "Let set $A = \\{1, 2, 3\\}$. A relation $R$ on $A$ is defined as $R = \\{(1,1), (2,2), (3,3), (1,2), (2,1), (2,3)\\}$. Determine whether $R$ is an equivalence relation, a partial order, or neither.",
          "steps": [
            "Step 1: Verify Reflexivity: For $R$ to be reflexive, $(x,x) \\in R$ for all $x \\in \\{1, 2, 3\\}$. Since $(1,1), (2,2), (3,3) \\in R$, $R$ is reflexive.",
            "Step 2: Verify Symmetry: For $R$ to be symmetric, $(x,y) \\in R \\implies (y,x) \\in R$. We have $(2,3) \\in R$, but $(3,2) \\notin R$. Hence $R$ fails symmetry. Since equivalence requires symmetry, $R$ is NOT an equivalence relation.",
            "Step 3: Verify Anti-symmetry: For $R$ to be anti-symmetric, $(x,y) \\in R \\land (y,x) \\in R \\implies x = y$. Here $(1,2) \\in R$ and $(2,1) \\in R$, yet $1 \\neq 2$. Hence $R$ fails anti-symmetry. Since a poset requires anti-symmetry, $R$ is NOT a partial order.",
            "Step 4: Verify Transitivity: We have $(1,2) \\in R$ and $(2,3) \\in R$, but $(1,3) \\notin R$. Hence $R$ fails transitivity as well."
          ],
          "answer": "$R$ is reflexive, but neither symmetric, anti-symmetric, nor transitive. Thus $R$ is neither an equivalence relation nor a partial order."
        },
        {
          "question": "A drawer contains $10$ red socks, $10$ blue socks, and $10$ black socks. What is the minimum number of socks that must be drawn at random without looking to guarantee that at least $4$ socks of the same color are selected?",
          "steps": [
            "Step 1: Identify the pigeonhole parameters: The categories (pigeonholes $k$) are the $3$ colors: Red, Blue, Black ($k = 3$). The target frequency per color is $m = 4$.",
            "Step 2: Apply the worst-case principle: In the worst-case scenario, you draw as many socks as possible without reaching $4$ of any single color. That corresponds to drawing exactly $3$ of each of the $3$ colors: $3 \\times 3 = 9$ socks.",
            "Step 3: Add $1$ additional sock: Drawing the $10^{\\text{th}}$ sock forces one of the three color groups to reach $4$ socks.",
            "Step 4: Apply the generalized Pigeonhole Principle formula: $N = k(m - 1) + 1 = 3(4 - 1) + 1 = 3(3) + 1 = 10$."
          ],
          "answer": "Minimum $10$ socks must be drawn to guarantee at least $4$ socks of the same color."
        },
        {
          "question": "Solve the first-order linear recurrence relation $a_n = 3a_{n-1} + 2$ for $n \\ge 1$, given the initial condition $a_0 = 1$. Find the closed-form expression for $a_n$ and compute $a_3$.",
          "steps": [
            "Step 1: Compute initial consecutive terms: $a_0 = 1$; $a_1 = 3(1) + 2 = 5$; $a_2 = 3(5) + 2 = 17$; $a_3 = 3(17) + 2 = 53$.",
            "Step 2: Unfold the recurrence using repeated substitution: $a_n = 3^n a_0 + 2(3^{n-1} + 3^{n-2} + \\dots + 3^0)$.",
            "Step 3: Evaluate the geometric progression sum: $\\sum_{i=0}^{n-1} 3^i = \\frac{3^n - 1}{3 - 1} = \\frac{3^n - 1}{2}$.",
            "Step 4: Substitute back: $a_n = 3^n(1) + 2\\left(\\frac{3^n - 1}{2}\\right) = 3^n + 3^n - 1 = 2 \\cdot 3^n - 1$.",
            "Step 5: Verify for $n = 3$: $a_3 = 2 \\cdot 3^3 - 1 = 2(27) - 1 = 54 - 1 = 53$. Calculation matches exactly."
          ],
          "answer": "Closed-form expression: $a_n = 2 \\cdot 3^n - 1$, and $a_3 = 53$."
        }
      ],
      "traps": [
        "Trap 1 (Anti-symmetric vs Symmetric): Anti-symmetric does NOT mean \"not symmetric\". A relation can be both symmetric and anti-symmetric (e.g., identity relation $R = \\{(a,a)\\}$ on any set), or neither. Never treat them as complementary opposites.",
        "Trap 2 (Implication Truth Trap): The implication $p \\to q$ is False in ONLY ONE situation: when hypothesis $p$ is True and conclusion $q$ is False ($T \\to F \\equiv F$). If $p$ is False, the implication $p \\to q$ is always vacuously True regardless of $q$.",
        "Trap 3 (Converse vs Contrapositive): A statement is logically equivalent ONLY to its contrapositive ($\\neg q \\to \\neg p$), NOT to its converse ($q \\to p$) or inverse ($\\neg p \\to \\neg q$). Mistaking the converse for an equivalent statement is a frequent exam distractor.",
        "Trap 4 (Reflexive Counting Power): On an $n$-element set, reflexive relations require all $n$ diagonal pairs $(a,a)$. The remaining $n^2 - n$ pairs each have $2$ choices (in or out), giving $2^{n(n-1)}$ total relations, NOT $2^{n^2 - 1}$.",
        "Trap 5 (Lattice Meet/Join Uniqueness): In a poset, every pair of elements must possess a UNIQUE greatest lower bound and UNIQUE least upper bound to qualify as a lattice. If two minimal upper bounds exist without one being less than the other, it is NOT a lattice."
      ],
      "practice": [
        {
          "q": "If a set $A$ contains $4$ elements, what is the total number of distinct reflexive relations that can be defined on $A$?",
          "options": [
            "$2^4 = 16$",
            "$2^{12} = 4096$",
            "$2^{16} = 65536$",
            "$2^6 = 64$"
          ],
          "answer": 1,
          "why": "The formula for the number of reflexive relations on an $n$-element set is $2^{n(n-1)}$. For $n = 4$, $2^{4(4-1)} = 2^{12} = 4096$."
        },
        {
          "q": "Which of the following compound propositions is logically equivalent to the conditional statement $p \\to q$?",
          "options": [
            "$\\neg p \\to \\neg q$",
            "$q \\to p$",
            "$\\neg q \\to \\neg p$",
            "$p \\wedge \\neg q$"
          ],
          "answer": 2,
          "why": "A conditional statement $p \\to q$ is always logically equivalent to its contrapositive $\\neg q \\to \\neg p$."
        },
        {
          "q": "A partially ordered set (poset) $(L, \\le)$ is defined as a lattice if and only if every pair of elements in $L$ has:",
          "options": [
            "A unique greatest lower bound (GLB) and a unique least upper bound (LUB)",
            "Only a unique upper bound",
            "A linear ordering such that for all $a, b$, either $a \\le b$ or $b \\le a$",
            "An inverse element with respect to relation $\\le$"
          ],
          "answer": 0,
          "why": "By definition, a lattice is a poset where every pair of elements possesses a unique greatest lower bound (meet) and a unique least upper bound (join)."
        },
        {
          "q": "In an examination hall of $367$ students, what is the minimum number of students who are guaranteed to share the same birthday (day and month, assuming a non-leap year of $365$ days)?",
          "options": [
            "$1$",
            "$2$",
            "$3$",
            "$4$"
          ],
          "answer": 1,
          "why": "By the Pigeonhole Principle, distributing $N = 367$ students into $k = 365$ birthday slots guarantees that at least $\\lceil 367 / 365 \\rceil = 2$ students share a birthday."
        },
        {
          "q": "What is the negation of the first-order logic statement: $\\forall x \\, (P(x) \\to Q(x))$?",
          "options": [
            "$\\forall x \\, (P(x) \\wedge \\neg Q(x))$",
            "$\\exists x \\, (\\neg P(x) \\to \\neg Q(x))$",
            "$\\exists x \\, (P(x) \\to \\neg Q(x))$",
            "$\\exists x \\, (P(x) \\wedge \\neg Q(x))$"
          ],
          "answer": 3,
          "why": "$\\neg(\\forall x \\, (P(x) \\to Q(x))) \\equiv \\exists x \\, \\neg(P(x) \\to Q(x)) \\equiv \\exists x \\, (P(x) \\wedge \\neg Q(x))$."
        },
        {
          "q": "If set $A$ has $3$ elements and set $B$ has $4$ elements, how many one-to-one (injective) functions can be defined from $A$ to $B$?",
          "options": [
            "$12$",
            "$24$",
            "$64$",
            "$81$"
          ],
          "answer": 1,
          "why": "The number of injective functions from an $m$-element set to an $n$-element set ($n \\ge m$) is $P(n, m) = \\frac{n!}{(n-m)!} = P(4, 3) = \\frac{4!}{1!} = 24$."
        },
        {
          "q": "Consider the recurrence relation $a_n = 5a_{n-1} - 6a_{n-2}$ with $a_0 = 1$ and $a_1 = 4$. What are the characteristic roots of this recurrence?",
          "options": [
            "$r = 2$ and $r = 3$",
            "$r = -2$ and $r = -3$",
            "$r = 1$ and $r = 6$",
            "$r = 5$ and $r = 6$"
          ],
          "answer": 0,
          "why": "The characteristic equation is $r^2 - 5r + 6 = 0$. Factoring gives $(r - 2)(r - 3) = 0$, so the roots are $r = 2$ and $r = 3$."
        },
        {
          "q": "What is the ordinary generating function for the geometric sequence $a_n = 2^n$ for $n \\ge 0$ (i.e., $1, 2, 4, 8, \\dots$)?",
          "options": [
            "$\\frac{1}{1 - x}$",
            "$\\frac{1}{1 + 2x}$",
            "$\\frac{1}{1 - 2x}$",
            "$\\frac{2}{1 - x}$"
          ],
          "answer": 2,
          "why": "The ordinary generating function for $a_n = r^n$ is $\\sum_{n=0}^\\infty (rx)^n = \\frac{1}{1 - rx}$. With $r = 2$, it evaluates to $\\frac{1}{1 - 2x}$."
        }
      ]
    },
    {
      "id": "eng-math-graph-theory",
      "title": "Graph Theory",
      "status": "done",
      "explanation": "Graph Theory analyzes networks of vertices (nodes) connected by edges (links), providing fundamental models for networks, routing, compilers, and circuit topology.\n\n**Handshaking Lemma & Degree Parity**\nFor any undirected graph $G = (V, E)$, the sum of degrees of all vertices equals twice the number of edges: $\\sum_{v \\in V} \\text{deg}(v) = 2E$. As a direct consequence, the number of vertices with odd degree is always even.\n\n**Connectivity, Cuts & Whitney's Theorem**\nA graph is connected if a path exists between every pair of vertices. A cut-vertex (articulation point) increases connected components upon removal; a cut-edge (bridge) is an edge whose deletion disconnects the graph. Vertex connectivity $\\kappa(G)$ is the minimum vertices removed to disconnect $G$, and edge connectivity $\\lambda(G)$ is the minimum edges removed. Whitney's Theorem establishes the fundamental hierarchy: $\\kappa(G) \\le \\lambda(G) \\le \\delta(G)$, where $\\delta(G)$ is the minimum vertex degree.\n\n**Eulerian Trails vs Hamiltonian Cycles**\nAn **Euler Trail** visits every edge exactly once (requires a connected graph with exactly 0 or 2 odd-degree vertices). An **Euler Circuit** is a closed Euler trail returning to the start (requires connected graph where *every* vertex has an even degree). In contrast, a **Hamiltonian Path / Cycle** visits every *vertex* exactly once (an NP-complete problem in general graphs, guaranteed if $\\text{deg}(v) \\ge n/2$ by Dirac's theorem).\n\n**Planarity & Euler's Formula**\nA planar graph can be embedded in the plane with no crossing edges. For any connected planar graph: $V - E + F = 2$ (where $F$ includes the outer unbounded face). Standard simple planar graphs ($V \\ge 3$) satisfy $E \\le 3V - 6$. Triangle-free planar graphs (such as bipartite planar graphs) satisfy $E \\le 2V - 4$. Kuratowski's Theorem: a graph is planar iff it contains no subgraph homeomorphic to $K_5$ or $K_{3,3}$.\n\n**Graph Coloring & Matching**\nThe chromatic number $\\chi(G)$ is the minimum colors needed to color vertices so adjacent vertices differ in color. Trees and bipartite graphs have $\\chi = 2$; odd cycles have $\\chi = 3$; complete graphs have $\\chi(K_n) = n$. The Four Color Theorem guarantees $\\chi(G) \\le 4$ for all planar graphs. A matching is a set of independent edges without shared vertices; a perfect matching covers all vertices ($|M| = V/2$, requiring an even vertex count).",
      "keyPoints": [
        "Handshaking Lemma: $\\sum_{v \\in V} \\text{deg}(v) = 2E$. Key exam deduction: in any graph, the count of vertices with odd degree must be even.",
        "Euler Circuit vs Trail: Connected graph has an Euler Circuit $\\iff$ ALL vertices have even degrees. It has an open Euler Trail $\\iff$ EXACTLY 2 vertices have odd degrees.",
        "Hamiltonian Sufficient Conditions: Dirac's Theorem: in a simple graph with $n \\ge 3$, if $\\text{deg}(v) \\ge n/2$ for all $v$, $G$ is Hamiltonian. Ore's Theorem: if $\\text{deg}(u) + \\text{deg}(v) \\ge n$ for all non-adjacent pairs, $G$ is Hamiltonian.",
        "Euler's Planar Formula: $V - E + F = 2$ for any connected planar graph (remember: $F$ includes the 1 outer unbounded face).",
        "Planar Edge Boundaries: For $V \\ge 3$: $E \\le 3V - 6$. For triangle-free (or bipartite) planar graphs: $E \\le 2V - 4$. Every planar graph has at least one vertex with degree $\\le 5$.",
        "Non-Planar Benchmarks (Kuratowski): Complete graph $K_5$ ($V=5, E=10$) and complete bipartite graph $K_{3,3}$ ($V=6, E=9$) are the minimal non-planar graphs.",
        "Chromatic Number $\\chi(G)$ Rules: Tree / Bipartite $\\implies \\chi = 2$. Complete graph $K_n \\implies \\chi = n$. Cycle $C_n \\implies \\chi = 2$ ($n$ even), $\\chi = 3$ ($n$ odd). Planar graph $\\implies \\chi \\le 4$.",
        "Whitney's Connectivity Inequality: $\\kappa(G) \\le \\lambda(G) \\le \\delta(G)$ (Vertex connectivity $\\le$ Edge connectivity $\\le$ Minimum degree).",
        "Perfect Matching: Requires an even number of vertices ($|V|$ must be even). Contains exactly $|V|/2$ edges with no shared endpoints.",
        "Isomorphism Invariants: Isomorphic graphs must have identical $|V|$, $|E|$, degree sequences, and cycle lengths. Identical degree sequences is necessary, but NOT sufficient."
      ],
      "tables": [
        {
          "caption": "Comparison: Properties of Standard Graph Families",
          "headers": [
            "Graph Family",
            "Vertices ($V$)",
            "Edges ($E$)",
            "Chromatic No. ($\\chi$)",
            "Planar?",
            "Eulerian Circuit?"
          ],
          "rows": [
            [
              "Complete Graph $K_n$",
              "$n$",
              "$\\frac{n(n-1)}{2}$",
              "$n$",
              "Yes ($n \\le 4$)",
              "Yes (if $n$ is odd, $n \\ge 3$)"
            ],
            [
              "Cycle Graph $C_n$",
              "$n$",
              "$n$",
              "$2$ (even $n$) / $3$ (odd $n$)",
              "Always Yes",
              "Always Yes (all degrees $= 2$)"
            ],
            [
              "Complete Bipartite $K_{m,n}$",
              "$m + n$",
              "$mn$",
              "$2$",
              "Yes (if $m \\le 2$ or $n \\le 2$)",
              "Yes (if both $m, n$ are even)"
            ],
            [
              "Tree $T_n$",
              "$n$",
              "$n - 1$",
              "$2$ (for $n \\ge 2$)",
              "Always Yes",
              "No (only for $n \\le 2$, no cycles)"
            ]
          ]
        },
        {
          "caption": "Comparison: Eulerian Graphs vs Hamiltonian Graphs",
          "headers": [
            "Feature",
            "Eulerian Graph",
            "Hamiltonian Graph"
          ],
          "rows": [
            [
              "Core Traversal Unit",
              "Traverses every **EDGE** exactly once",
              "Visits every **VERTEX** exactly once"
            ],
            [
              "Closed Cycle Name",
              "Euler Circuit (Euler Tour)",
              "Hamiltonian Cycle"
            ],
            [
              "Necessary & Sufficient Condition",
              "Connected and all vertex degrees are even",
              "No simple condition (NP-complete)"
            ],
            [
              "Decision Complexity",
              "Polynomial time: $O(V + E)$",
              "NP-complete in general graphs"
            ],
            [
              "Primary Theorems",
              "Euler's Theorem (degree parity)",
              "Dirac's Theorem (deg $\\ge n/2$) & Ore's Theorem"
            ]
          ]
        }
      ],
      "examples": [
        {
          "question": "A simple undirected connected graph has $8$ vertices. Three vertices have degree $4$, and the remaining five vertices have degree $2$. Find the total number of edges in this graph.",
          "steps": [
            "Step 1: Calculate the sum of all vertex degrees: $\\sum \\text{deg}(v) = (3 \\times 4) + (5 \\times 2) = 12 + 10 = 22$.",
            "Step 2: Apply the Handshaking Lemma: $\\sum \\text{deg}(v) = 2E \\implies 22 = 2E$.",
            "Step 3: Solve for $E$: $E = 22 / 2 = 11$."
          ],
          "answer": "The graph has $11$ edges."
        },
        {
          "question": "A connected planar graph has $10$ vertices and $15$ edges. Into how many regions (faces) does this graph divide the plane?",
          "steps": [
            "Step 1: State Euler's planar formula: $V - E + F = 2$.",
            "Step 2: Substitute $V = 10$ and $E = 15$: $10 - 15 + F = 2$.",
            "Step 3: Solve for $F$: $-5 + F = 2 \\implies F = 7$."
          ],
          "answer": "The graph divides the plane into $7$ faces (including the 1 exterior unbounded region)."
        },
        {
          "question": "A connected graph has vertex degrees: $\\{2, 2, 3, 3, 4, 4\\}$. Determine whether it contains an Euler circuit, an Euler path (trail), or neither.",
          "steps": [
            "Step 1: Check degrees for parity: $2$ (even), $2$ (even), $3$ (odd), $3$ (odd), $4$ (even), $4$ (even). Exactly two vertices have odd degree.",
            "Step 2: Check Euler Circuit condition: An Euler circuit requires $0$ odd vertices. Here we have $2$ odd vertices, so NO Euler circuit exists.",
            "Step 3: Check Euler Path condition: An Euler path requires exactly $2$ odd vertices in a connected graph. Since there are exactly $2$, an Euler path exists."
          ],
          "answer": "The graph contains an Euler path (starting at one odd vertex and ending at the other), but does NOT contain an Euler circuit."
        }
      ],
      "traps": [
        "Trap 1 (Euler Circuit vs Path Parity): An Euler Circuit requires ALL vertices to have even degrees (0 odd vertices). An Euler Path requires EXACTLY TWO vertices to have odd degrees. If there are 4 odd vertices, neither exists.",
        "Trap 2 (Degree Sequence Isomorphism Trap): Identical degree sequences do NOT guarantee isomorphism! A 6-cycle $C_6$ and two disjoint triangles $2C_3$ both have degree sequence $(2,2,2,2,2,2)$, but one is connected and the other is disconnected.",
        "Trap 3 (Planar Edge Bound Direction): The inequality $E \\le 3V - 6$ is a NECESSARY condition for planarity, NOT sufficient. $K_{3,3}$ has $V=6, E=9$, which satisfies $9 \\le 3(6)-6 = 12$, yet $K_{3,3}$ is non-planar (it fails the triangle-free bound $E \\le 2V - 4 = 8$).",
        "Trap 4 (Exterior Face in Euler's Formula): In $V - E + F = 2$, $F$ INCLUDES the outer unbounded face. If an exam question asks for \"interior regions only\", remember to subtract 1 ($F_{\\text{interior}} = F - 1$).",
        "Trap 5 (Bipartite Chromatic Threshold): A graph has chromatic number $\\chi = 2$ if and only if it is bipartite, which means it contains NO odd cycles. If even a single 3-cycle or 5-cycle is present, $\\chi \\ge 3$."
      ],
      "practice": [
        {
          "q": "What is the maximum number of edges possible in a simple planar graph with $7$ vertices?",
          "options": [
            "$12$",
            "$15$",
            "$18$",
            "$21$"
          ],
          "answer": 1,
          "why": "For a simple planar graph with $V \\ge 3$, $E_{\\max} = 3V - 6$. For $V = 7$, $E_{\\max} = 3(7) - 6 = 21 - 6 = 15$."
        },
        {
          "q": "A connected undirected graph contains an Euler circuit if and only if:",
          "options": [
            "Exactly two vertices have odd degree",
            "Every vertex has an odd degree",
            "Every vertex has an even degree",
            "The graph is bipartite"
          ],
          "answer": 2,
          "why": "Euler's theorem states that a connected graph has a closed Euler circuit if and only if every vertex has an even degree."
        },
        {
          "q": "What is the chromatic number $\\chi(G)$ of the cycle graph $C_7$?",
          "options": [
            "$3$",
            "$2$",
            "$7$",
            "$1$"
          ],
          "answer": 0,
          "why": "Any cycle with an odd number of vertices ($n = 7$) requires exactly $3$ colors. Cycles with an even number of vertices require only $2$."
        },
        {
          "q": "A connected planar graph has $8$ vertices and divides the plane into $6$ faces. How many edges does this graph have?",
          "options": [
            "$10$",
            "$12$",
            "$14$",
            "$16$"
          ],
          "answer": 1,
          "why": "Using Euler's formula $V - E + F = 2$: $8 - E + 6 = 2 \\implies 14 - E = 2 \\implies E = 12$."
        },
        {
          "q": "According to Kuratowski's theorem, a graph is non-planar if and only if it contains a subgraph homeomorphic to:",
          "options": [
            "$K_4$ or $K_{3,2}$",
            "$K_5$ or $K_{3,3}$",
            "$C_5$ or $K_6$",
            "$K_{4,4}$ only"
          ],
          "answer": 1,
          "why": "Kuratowski's theorem establishes that a finite graph is planar if and only if it contains no subgraph homeomorphic to $K_5$ or $K_{3,3}$."
        },
        {
          "q": "For any undirected graph $G$, which inequality correctly relates vertex connectivity $\\kappa(G)$, edge connectivity $\\lambda(G)$, and minimum degree $\\delta(G)$?",
          "options": [
            "$\\delta(G) \\le \\lambda(G) \\le \\kappa(G)$",
            "$\\lambda(G) \\le \\kappa(G) \\le \\delta(G)$",
            "$\\kappa(G) \\le \\lambda(G) \\le \\delta(G)$",
            "$\\kappa(G) \\le \\delta(G) \\le \\lambda(G)$"
          ],
          "answer": 2,
          "why": "Whitney's theorem proves that vertex connectivity never exceeds edge connectivity, which never exceeds minimum degree: $\\kappa(G) \\le \\lambda(G) \\le \\delta(G)$."
        },
        {
          "q": "In an undirected graph with $10$ vertices, the degrees of $9$ vertices are $3, 3, 3, 2, 2, 2, 4, 4, 1$. Which of the following could be the degree of the $10^{\\text{th}}$ vertex?",
          "options": [
            "$1$",
            "$3$",
            "$5$",
            "$2$"
          ],
          "answer": 3,
          "why": "By the Handshaking Lemma, the number of odd-degree vertices must be even. The first 9 vertices contain four odd-degree vertices ($3, 3, 3, 1$), so the 10th vertex must have an even degree (here, $2$)."
        },
        {
          "q": "For a graph $G$ with $n$ vertices to possess a perfect matching, what is an absolute necessary condition on $n$?",
          "options": [
            "$n$ must be an even integer",
            "$n$ must be a prime number",
            "$n$ must be an odd integer",
            "$n$ must be a multiple of $4$"
          ],
          "answer": 0,
          "why": "A perfect matching pairs all vertices disjointly using $n/2$ edges. Since each edge covers $2$ vertices, $n$ must be an even integer."
        }
      ]
    }
  ]
};
