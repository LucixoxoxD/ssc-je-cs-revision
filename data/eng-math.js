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
      "explanation": "Graph Theory models pairwise relationships between objects using vertices (nodes) and edges (connections). For SSC Paper-I, focus on standard formulas, degree rules, and direct recognition of graph properties.\\n\\n**1. Degree Basics & Handshaking Lemma**\\nThe degree of a vertex $\\\\text{deg}(v)$ is the number of edges incident to it (a self-loop counts twice). The Handshaking Lemma states that the sum of all vertex degrees equals twice the number of edges: $\\\\sum_{v \\\\in V} \\\\text{deg}(v) = 2E$. Core exam deduction: in every graph, the count of vertices with odd degree is always even.\\n\\n**2. Connectivity, Cut-Vertices & Bridges**\\nA graph is connected if every pair of vertices has a connecting path. A **cut-vertex** (articulation point) is a vertex whose removal increases the number of connected components. A **bridge** (cut-edge) is an edge whose removal disconnects the graph. Basic connectivity relationship: vertex connectivity $\\\\le$ edge connectivity $\\\\le$ minimum degree ($\\\\kappa \\\\le \\\\lambda \\\\le \\\\delta$).\\n\\n**3. Eulerian vs Hamiltonian Graphs**\\nAn **Euler Trail** (path) visits every edge exactly once; it exists in a connected graph if and only if **exactly 0 or 2 vertices have odd degree**. An **Euler Circuit** is a closed Euler trail returning to the start; it exists if and only if **all vertices have even degrees**.\\nA **Hamiltonian Path** visits every vertex exactly once, while a **Hamiltonian Cycle** returns to the starting vertex. Unlike Eulerian graphs, there is no simple degree-parity rule. Dirac\\'s condition ($\\\\text{deg}(v) \\\\ge n/2$) and Ore\\'s condition ($\\\\text{deg}(u) + \\\\text{deg}(v) \\\\ge n$) are **sufficient conditions** for a simple graph to be Hamiltonian, but not necessary.\\n\\n**4. Planar Graphs & Euler\\'s Formula**\\nA planar graph can be drawn in a plane such that no two edges cross. For any connected planar graph, Euler\\'s formula states: $V - E + F = 2$, where $F$ includes the single outer unbounded face.\\nFor simple planar graphs with $V \\\\ge 3$: $E \\\\le 3V - 6$. For triangle-free (such as bipartite) simple planar graphs with $V \\\\ge 3$: $E \\\\le 2V - 4$. Minimal non-planar benchmark graphs are $K_5$ ($V=5, E=10$) and $K_{3,3}$ ($V=6, E=9$).\\n\\n**5. Graph Coloring & Matching**\\nThe **chromatic number** $\\\\chi(G)$ is the minimum number of colors needed to color vertices so that no two adjacent vertices share the same color. Standard values: Trees $\\\\chi = 2$; Bipartite graphs $\\\\chi = 2$; Even cycles $\\\\chi = 2$; Odd cycles $\\\\chi = 3$; Complete graphs $\\\\chi(K_n) = n$. Planar graphs require at most $4$ colors ($\\\\chi \\\\le 4$).\\nA **matching** is a set of edges without common endpoints. A **perfect matching** covers every vertex; it contains exactly $|V|/2$ edges and is only possible when $|V|$ is an even integer.\\n\\n**6. Graph Isomorphism**\\nTwo graphs $G_1$ and $G_2$ are isomorphic ($G_1 \\\\cong G_2$) if there is a structure-preserving bijection between their vertex sets. Invariants: isomorphic graphs must have the same number of vertices, edges, degree sequence, and cycles. Matching degree sequences is a necessary condition, but not sufficient.",
      "keyPoints": [
        "Handshaking Lemma: $\\\\sum \\\\text{deg}(v) = 2E$. In any graph, the number of odd-degree vertices must be even.",
        "Euler Circuit Condition: A connected graph has a closed Euler circuit $\\\\iff$ ALL vertex degrees are even.",
        "Euler Trail (Path) Condition: A connected graph has an open Euler trail $\\\\iff$ EXACTLY 2 vertices have odd degree (path starts at one and ends at the other).",
        "Hamiltonian Sufficient Conditions: Dirac\\'s condition ($\\\\text{deg}(v) \\\\ge n/2$) and Ore\\'s condition ($\\\\text{deg}(u) + \\\\text{deg}(v) \\\\ge n$) are sufficient (not necessary) tests for a simple graph with $n \\\\ge 3$ to be Hamiltonian.",
        "Euler\\'s Planar Formula: $V - E + F = 2$ for every connected planar graph ($F$ includes the 1 outer unbounded face).",
        "Simple Planar Edge Bounds: For simple planar graphs with $V \\\\ge 3$: $E \\\\le 3V - 6$. For triangle-free (or bipartite) simple planar graphs: $E \\\\le 2V - 4$.",
        "Kuratowski\\'s Benchmark Graphs: Complete graph $K_5$ ($V=5, E=10$) and complete bipartite graph $K_{3,3}$ ($V=6, E=9$) are the two classic minimal non-planar graphs.",
        "Standard Chromatic Numbers $\\\\chi(G)$: Bipartite graphs and Trees $= 2$; Cycle $C_n = 2$ ($n$ even), $3$ ($n$ odd); Complete graph $K_n = n$; Planar graphs $\\\\le 4$.",
        "Perfect Matching Parity Rule: A perfect matching requires an even number of vertices ($|V|$ must be even) and contains exactly $|V|/2$ edges.",
        "Isomorphism Invariants: Isomorphic graphs must have identical $|V|$, $|E|$, and degree sequences. Identical degree sequences is necessary, but NOT sufficient."
      ],
      "tables": [
        {
          "caption": "Summary: Properties of Standard Graph Families",
          "headers": [
            "Graph Family",
            "Vertices ($V$)",
            "Edges ($E$)",
            "Chromatic No. ($\\chi$)",
            "Planar?",
            "Euler Circuit?"
          ],
          "rows": [
            [
              "Complete Graph $K_n$",
              "$n$",
              "$\\\\frac{n(n-1)}{2}$",
              "$n$",
              "Yes ($n \\\\le 4$)",
              "Yes (if $n$ is odd, $n \\\\ge 3$)"
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
              "Yes (if $m \\\\le 2$ or $n \\\\le 2$)",
              "Yes (if both $m, n$ are even)"
            ],
            [
              "Tree $T_n$",
              "$n$",
              "$n - 1$",
              "$2$ (for $n \\\\ge 2$)",
              "Always Yes",
              "No (only for $n \\\\le 2$, no cycles)"
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
              "Closed Traversal Name",
              "Euler Circuit (Euler Tour)",
              "Hamiltonian Cycle"
            ],
            [
              "Exact Condition",
              "All vertex degrees must be even",
              "No simple parity rule (degree tests are only sufficient)"
            ],
            [
              "Open Path Condition",
              "Exactly 2 vertices have odd degree",
              "Visits all vertices without returning to start"
            ],
            [
              "Classic Test Theorem",
              "Euler\\'s Theorem (degree parity)",
              "Dirac\\'s Theorem ($\\\\text{deg}(v) \\\\ge n/2$ is a sufficient condition)"
            ]
          ]
        }
      ],
      "examples": [
        {
          "question": "A simple undirected connected graph has $8$ vertices. Three vertices have degree $4$, and the remaining five vertices have degree $2$. Find the total number of edges in this graph.",
          "steps": [
            "Step 1: Calculate the sum of all vertex degrees: $\\\\sum \\\\text{deg}(v) = (3 \\\\times 4) + (5 \\\\times 2) = 12 + 10 = 22$.",
            "Step 2: Apply the Handshaking Lemma: $\\\\sum \\\\text{deg}(v) = 2E \\\\implies 22 = 2E$.",
            "Step 3: Solve for $E$: $E = 22 / 2 = 11$."
          ],
          "answer": "The graph has $11$ edges."
        },
        {
          "question": "A connected planar graph has $10$ vertices and $15$ edges. Into how many regions (faces) does this graph divide the plane?",
          "steps": [
            "Step 1: State Euler\\'s planar formula: $V - E + F = 2$.",
            "Step 2: Substitute $V = 10$ and $E = 15$: $10 - 15 + F = 2$.",
            "Step 3: Solve for $F$: $-5 + F = 2 \\\\implies F = 7$."
          ],
          "answer": "The graph divides the plane into $7$ faces (including the 1 exterior unbounded region)."
        },
        {
          "question": "A connected graph has vertex degrees: $\\\\{2, 2, 3, 3, 4, 4\\\\}$. Determine whether it contains an Euler circuit, an Euler path (trail), or neither.",
          "steps": [
            "Step 1: Count vertices with odd degree: $2$ (even), $2$ (even), $3$ (odd), $3$ (odd), $4$ (even), $4$ (even). Exactly two vertices have odd degree.",
            "Step 2: Check Euler Circuit condition: An Euler circuit requires $0$ odd vertices. Since there are $2$ odd vertices, no Euler circuit exists.",
            "Step 3: Check Euler Path condition: An Euler path requires exactly $2$ odd vertices in a connected graph. Since there are exactly $2$, an Euler path exists."
          ],
          "answer": "The graph contains an Euler path (trail), but does NOT contain an Euler circuit."
        }
      ],
      "traps": [
        "Trap 1 (Euler Circuit vs Path Parity): An Euler Circuit requires ALL vertices to have even degrees (0 odd vertices). An Euler Path requires EXACTLY TWO vertices to have odd degrees. If there are 4 odd vertices, neither exists.",
        "Trap 2 (Degree Sequence Isomorphism Trap): Identical degree sequences do NOT guarantee isomorphism! A 6-cycle $C_6$ and two disjoint triangles $2C_3$ both have degree sequence $(2,2,2,2,2,2)$, but one is connected and the other is disconnected.",
        "Trap 3 (Planar Edge Bound Direction): The inequality $E \\\\le 3V - 6$ is a NECESSARY condition for a simple planar graph, not a sufficient one. $K_{3,3}$ has $V=6, E=9$, which satisfies $9 \\\\le 3(6)-6 = 12$, yet $K_{3,3}$ is non-planar (it fails the triangle-free bound $E \\\\le 2V - 4 = 8$).",
        "Trap 4 (Exterior Face in Euler\\'s Formula): In $V - E + F = 2$, $F$ INCLUDES the outer unbounded face. If an exam question asks for \"interior regions only\", remember to subtract 1 ($F_{\\\\text{interior}} = F - 1$).",
        "Trap 5 (Bipartite Chromatic Threshold): A graph has chromatic number $\\\\chi = 2$ if and only if it is bipartite, which means it contains NO odd cycles. If even a single 3-cycle or 5-cycle is present, $\\\\chi \\\\ge 3$."
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
          "why": "For a simple planar graph with $V \\\\ge 3$, $E_{\\\\max} = 3V - 6$. For $V = 7$, $E_{\\\\max} = 3(7) - 6 = 21 - 6 = 15$."
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
          "why": "Euler\\'s theorem states that a connected graph has a closed Euler circuit if and only if every vertex has an even degree."
        },
        {
          "q": "What is the chromatic number $\\\\chi(G)$ of the cycle graph $C_7$?",
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
          "why": "Using Euler\\'s formula $V - E + F = 2$: $8 - E + 6 = 2 \\\\implies 14 - E = 2 \\\\implies E = 12$."
        },
        {
          "q": "According to Kuratowski\\'s theorem, a graph is non-planar if and only if it contains a subgraph homeomorphic to:",
          "options": [
            "$K_4$ or $K_{3,2}$",
            "$K_5$ or $K_{3,3}$",
            "$C_5$ or $K_6$",
            "$K_{4,4}$ only"
          ],
          "answer": 1,
          "why": "Kuratowski\\'s theorem establishes that a finite graph is planar if and only if it contains no subgraph homeomorphic to $K_5$ or $K_{3,3}$."
        },
        {
          "q": "Which of the following provides a SUFFICIENT condition for a simple undirected graph with $n \\\\ge 3$ vertices to contain a Hamiltonian cycle?",
          "options": [
            "All vertices have even degrees",
            "The graph contains no cycles",
            "The degree of every vertex is at least $n/2$",
            "The chromatic number of the graph is 2"
          ],
          "answer": 2,
          "why": "Dirac\\'s theorem states that if $\\\\text{deg}(v) \\\\ge n/2$ for every vertex in a simple graph with $n \\\\ge 3$, the graph is Hamiltonian. Note: this is a sufficient condition, not a necessary one."
        },
        {
          "q": "In an undirected graph with $10$ vertices, the degrees of $9$ vertices are $3, 3, 3, 2, 2, 2, 4, 4, 1$. Which of the following could be the degree of the $10^{\\\\text{th}}$ vertex?",
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
    },
    {
      "id": "eng-math-linear-algebra",
      "title": "Linear Algebra",
      "status": "done",
      "explanation": "Linear Algebra forms the computational core of engineering mathematics, computer graphics, optimization, and machine learning. For SSC JE and Scientific Assistant (IMD) Paper-I, prioritize matrix operations, determinant formulas, rank conditions for linear systems, eigenvalue properties, and the mechanics of LU decomposition.\\n\\n**1. Matrices & Special Matrix Types**\\nA matrix of order $m \\times n$ has $m$ rows and $n$ columns. Special square matrices of order $n$ include:\\n- **Symmetric Matrix**: $A^T = A$ ($a_{ij} = a_{ji}$). All eigenvalues are strictly real.\\n- **Skew-Symmetric Matrix**: $A^T = -A$ ($a_{ij} = -a_{ji}$ and diagonal entries $a_{ii} = 0$). For odd order $n$, $|A| = 0$.\\n- **Orthogonal Matrix**: $A^T A = A A^T = I \\implies A^{-1} = A^T$. Its determinant is $|A| = \\pm 1$, and all eigenvalues satisfy $|\\lambda| = 1$.\\n- **Idempotent Matrix**: $A^2 = A$. Eigenvalues are exclusively $0$ or $1$.\\n- **Involutory Matrix**: $A^2 = I \\implies A^{-1} = A$. Eigenvalues are $+1$ or $-1$.\\n- **Nilpotent Matrix**: $A^k = 0$ for some positive integer $k$. All eigenvalues are strictly $0$, and $|A| = 0$.\\n- **Rank of a Matrix $\\text{rank}(A)$**: The maximum number of linearly independent rows or columns. For $A_{m \\times n}$, $\\text{rank}(A) \\le \\min(m, n)$ and $\\text{rank}(AB) \\le \\min(\\text{rank}(A), \\text{rank}(B))$.\\n\\n**2. Determinants & Core Operational Laws**\\nDeterminants are defined exclusively for square matrices. Essential operational properties:\\n- $|A^T| = |A|$ and $|AB| = |A||B|$.\\n- **Scalar Multiple Rule**: For an $n \\times n$ matrix $A$, $|kA| = k^n |A|$ (critical exam pitfall!).\\n- If two rows or columns are identical or proportional, $|A| = 0$.\\n- Interchanging any two rows or columns changes the sign: $|A'| = -|A|$.\\n- For an invertible matrix: $|A^{-1}| = 1 / |A|$.\\n- **Adjoint Formulas**: $A \\cdot \\text{adj}(A) = |A| I$. For order $n$, $|\\text{adj}(A)| = |A|^{n-1}$ and $|\\text{adj}(\\text{adj}(A))| = |A|^{(n-1)^2}$.\\n\\n**3. System of Linear Equations**\\nConsider a linear system of $m$ equations in $n$ variables represented as $AX = B$ with augmented matrix $[A | B]$:\\n- **Non-Homogeneous System ($AX = B, B \\ne 0$)**:\\n  1. **Inconsistent (No Solution)**: $\\text{rank}(A) \\ne \\text{rank}(A | B)$.\\n  2. **Consistent (Unique Solution)**: $\\text{rank}(A) = \\text{rank}(A | B) = n$. For a square system ($n \\times n$), this requires $|A| \\ne 0$.\\n  3. **Consistent (Infinitely Many Solutions)**: $\\text{rank}(A) = \\text{rank}(A | B) = r < n$. The number of independent (free) parameters is $n - r$.\\n- **Homogeneous System ($AX = 0$)**: Always consistent since $X = 0$ is a solution.\\n  1. **Unique Trivial Solution ($X = 0$)**: $\\text{rank}(A) = n \\iff |A| \\ne 0$.\\n  2. **Infinitely Many Non-Trivial Solutions**: $\\text{rank}(A) < n \\iff |A| = 0$.\\n\\n**4. Eigenvalues & Eigenvectors**\\nFor square matrix $A$, scalar $\\lambda$ and non-zero vector $X$ satisfying $AX = \\lambda X$ are eigenvalues and eigenvectors. The characteristic equation is $|A - \\lambda I| = 0$.\\n- **Fundamental Invariants**:\\n  1. $\\sum \\lambda_i = \\text{Trace}(A) = \\sum a_{ii}$ (Sum of eigenvalues equals sum of principal diagonal entries).\\n  2. $\\prod \\lambda_i = |A|$ (Product of eigenvalues equals determinant).\\n- **Triangular & Diagonal Matrices**: Eigenvalues are simply the entries on the principal diagonal.\\n- **Eigenvalue Transformations**: If $A$ has eigenvalue $\\lambda$, then $A^k$ has $\\lambda^k$, $A^{-1}$ has $1/\\lambda$ (if $|A| \\ne 0$), $kA$ has $k\\lambda$, and $(A + cI)$ has $\\lambda + c$.\\n- **Cayley-Hamilton Theorem**: Every square matrix satisfies its own characteristic equation: $P(A) = 0$. Used to quickly compute $A^{-1}$ and higher powers $A^m$.\\n\\n**5. LU Decomposition**\\nLU decomposition factors a square matrix $A$ into the product of a lower triangular matrix $L$ and an upper triangular matrix $U$: $A = LU$.\\n- **Doolittle\\'s Method**: $L$ has unit diagonal entries ($l_{ii} = 1$).\\n- **Crout\\'s Method**: $U$ has unit diagonal entries ($u_{ii} = 1$).\\n- **Existence**: $A$ has an LU decomposition without row permutations if all leading principal minors of $A$ are non-zero.\\n- **Solving $AX = B$**: Done in two rapid steps: forward substitution $LY = B$ for $Y$, followed by back substitution $UX = Y$ for $X$.",
      "keyPoints": [
        "Eigenvalue Sum & Product Rules: Sum of eigenvalues equals the matrix trace ($\\sum \\lambda_i = \\text{Tr}(A)$); Product of eigenvalues equals the determinant ($\\prod \\lambda_i = |A|$).",
        "Triangular Matrix Eigenvalues: The eigenvalues of any upper triangular, lower triangular, or diagonal matrix are simply its principal diagonal elements.",
        "Scalar Determinant Scaling: For an $n \\times n$ matrix $A$, $|kA| = k^n |A|$. For a $3 \\times 3$ matrix, $|2A| = 2^3 |A| = 8|A|$.",
        "Adjoint Determinant Formulas: For an $n \\times n$ matrix $A$, $|\\text{adj}(A)| = |A|^{n-1}$ and $|\\text{adj}(\\text{adj}(A))| = |A|^{(n-1)^2}$.",
        "System $AX=B$ Consistency: Consistent if and only if $\\text{rank}(A) = \\text{rank}(A|B)$. Unique solution if rank $= n$; Infinitely many solutions if rank $< n$; Inconsistent (no solution) if $\\text{rank}(A) \\ne \\text{rank}(A|B)$.",
        "Homogeneous System $AX=0$: Possesses non-trivial (non-zero) solutions if and only if $\\text{rank}(A) < n \\iff |A| = 0$. If $|A| \\ne 0$, only the trivial solution ($X = 0$) exists.",
        "Special Matrix Eigenvalue Rules: Real symmetric matrices have strictly real eigenvalues. Skew-symmetric matrices have pure imaginary or zero eigenvalues. Orthogonal matrices have $|\\lambda| = 1$. Idempotent matrices have eigenvalues only $0$ or $1$.",
        "Eigenvalue Power & Inverse Rules: If $\\lambda$ is an eigenvalue of $A$, then $A^k \\implies \\lambda^k$, $A^{-1} \\implies \\lambda^{-1}$, $kA \\implies k\\lambda$, and $A + cI \\implies \\lambda + c$.",
        "Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic equation ($P(A) = 0$). Multiplying by $A^{-1}$ allows expressing $A^{-1}$ as a linear combination of lower powers of $A$.",
        "LU Decomposition Structure: Factors $A = LU$ (Doolittle uses $l_{ii} = 1$). Used to solve $AX = B$ via forward substitution ($LY = B$) followed by back substitution ($UX = Y$)."
      ],
      "tables": [
        {
          "caption": "Summary: Properties and Eigenvalues of Special Matrix Types",
          "headers": [
            "Matrix Type",
            "Defining Condition",
            "Determinant ($|A|$)",
            "Nature of Eigenvalues"
          ],
          "rows": [
            [
              "Symmetric Matrix",
              "$A^T = A$",
              "Real",
              "All strictly real"
            ],
            [
              "Skew-Symmetric Matrix",
              "$A^T = -A$ ($a_{ii} = 0$)",
              "$0$ (if order $n$ is odd)",
              "Pure imaginary or zero"
            ],
            [
              "Orthogonal Matrix",
              "$A^T A = I$ ($A^{-1} = A^T$)",
              "$\\pm 1$",
              "Modulus $|\\lambda| = 1$"
            ],
            [
              "Idempotent Matrix",
              "$A^2 = A$",
              "$0$ or $1$",
              "Only $0$ or $1$"
            ],
            [
              "Involutory Matrix",
              "$A^2 = I$ ($A^{-1} = A$)",
              "$\\pm 1$",
              "Only $+1$ or $-1$"
            ],
            [
              "Nilpotent Matrix",
              "$A^k = 0$ (for some $k$)",
              "$0$",
              "All strictly $0$"
            ]
          ]
        },
        {
          "caption": "Classification: Solution Criteria for Linear Systems",
          "headers": [
            "System Type",
            "Rank Condition",
            "Determinant Criterion",
            "Nature of Solutions"
          ],
          "rows": [
            [
              "Non-Homogeneous ($AX = B$)",
              "$\\text{rank}(A) = \\text{rank}(A|B) = n$",
              "$|A| \\ne 0$ (if square)",
              "Unique Solution (Consistent)"
            ],
            [
              "Non-Homogeneous ($AX = B$)",
              "$\\text{rank}(A) = \\text{rank}(A|B) = r < n$",
              "$|A| = 0$ (if square)",
              "Infinitely Many Solutions ($n - r$ free variables)"
            ],
            [
              "Non-Homogeneous ($AX = B$)",
              "$\\text{rank}(A) \\ne \\text{rank}(A|B)$",
              "N/A",
              "No Solution (Inconsistent)"
            ],
            [
              "Homogeneous ($AX = 0$)",
              "$\\text{rank}(A) = n$",
              "$|A| \\ne 0$",
              "Unique Trivial Solution ($X = 0$)"
            ],
            [
              "Homogeneous ($AX = 0$)",
              "$\\text{rank}(A) < n$",
              "$|A| = 0$",
              "Infinitely Many Non-Trivial Solutions"
            ]
          ]
        }
      ],
      "examples": [
        {
          "question": "A $2 \\times 2$ matrix $A$ has trace $\\text{Tr}(A) = 7$ and determinant $|A| = 12$. Find the eigenvalues of $A$ and the eigenvalues of $A^2$.",
          "steps": [
            "Step 1: Set up the characteristic equation using trace and determinant: $\\lambda^2 - \\text{Tr}(A)\\lambda + |A| = 0 \\implies \\lambda^2 - 7\\lambda + 12 = 0$.",
            "Step 2: Factor the quadratic equation: $(\\lambda - 3)(\\lambda - 4) = 0 \\implies \\lambda_1 = 3, \\lambda_2 = 4$.",
            "Step 3: Apply the eigenvalue power property: the eigenvalues of $A^2$ are $\\lambda_1^2 = 3^2 = 9$ and $\\lambda_2^2 = 4^2 = 16$."
          ],
          "answer": "The eigenvalues of $A$ are $3$ and $4$; the eigenvalues of $A^2$ are $9$ and $16$."
        },
        {
          "question": "Let $A$ be a $3 \\times 3$ matrix with determinant $|A| = 4$. Find the value of $|2A|$ and $|\\text{adj}(A)|$.",
          "steps": [
            "Step 1: Apply the scalar determinant formula $|kA| = k^n |A|$ with $n = 3$: $|2A| = 2^3 |A| = 8 \\times 4 = 32$.",
            "Step 2: Apply the adjoint determinant formula $|\\text{adj}(A)| = |A|^{n-1}$ with $n = 3$: $|\\text{adj}(A)| = |A|^{3-1} = |A|^2$.",
            "Step 3: Evaluate: $|\\text{adj}(A)| = 4^2 = 16$."
          ],
          "answer": "$|2A| = 32$ and $|\\text{adj}(A)| = 16$."
        },
        {
          "question": "Determine the condition on parameter $k$ for the system to have a unique solution: $x + y + z = 6$, $x + 2y + 3z = 10$, $x + 2y + kz = 12$.",
          "steps": [
            "Step 1: Write the coefficient matrix $A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 2 & k \\end{pmatrix}$. A square system has a unique solution if and only if $|A| \\ne 0$.",
            "Step 2: Compute $|A|$ using elementary row operations: $R_2 \\to R_2 - R_1 \\implies (0, 1, 2)$ and $R_3 \\to R_3 - R_2 \\implies (0, 0, k-3)$.",
            "Step 3: The triangular determinant is $1 \\times 1 \\times (k - 3) = k - 3$. For a unique solution, $k - 3 \\ne 0 \\implies k \\ne 3$."
          ],
          "answer": "The system has a unique solution if and only if $k \\ne 3$."
        }
      ],
      "traps": [
        "Trap 1 (Scalar Multiple Determinant Exponent): Multiplying an $n \\times n$ matrix by scalar $k$ multiplies every row by $k$, so $|kA| = k^n |A|$, NOT $k|A|$. For order $3$, $|3A| = 27|A|$, not $3|A|$ or $9|A|$.",
        "Trap 2 (Trace and Determinant Sign Rule): In the characteristic equation $\\lambda^2 - \\text{Tr}(A)\\lambda + |A| = 0$, note the negative sign before trace. If an equation is $\\lambda^2 + 5\\lambda + 6 = 0$, the trace is $-5$, NOT $+5$.",
        "Trap 3 (Homogeneous System Consistency): A homogeneous system $AX = 0$ can NEVER have 'no solution'. It is always consistent because $X = 0$ is always a solution. It only alternates between unique trivial ($|A| \\ne 0$) and infinitely many non-trivial ($|A| = 0$).",
        "Trap 4 (Sum of Matrices Eigenvalue Fallacy): While $\\lambda(A^k) = \\lambda^k$ and $\\lambda(A + cI) = \\lambda + c$, in general $\\lambda(A + B) \\ne \\lambda(A) + \\lambda(B)$ unless $A$ and $B$ share identical eigenvectors (they commute).",
        "Trap 5 (Singular Matrix Rank): If $|A| = 0$ for an $n \\times n$ matrix, its rank is strictly less than $n$ ($\\text{rank}(A) \\le n - 1$). However, the rank is NOT zero unless $A$ is the all-zero null matrix."
      ],
      "practice": [
        {
          "q": "The eigenvalues of a $2 \\times 2$ matrix $A$ have sum equal to $6$ and product equal to $8$. What are the eigenvalues of $A$?",
          "options": [
            "$2$ and $4$",
            "$1$ and $5$",
            "$-2$ and $-4$",
            "$3$ and $3$"
          ],
          "answer": 0,
          "why": "The characteristic equation is $\\lambda^2 - \\text{Tr}(A)\\lambda + |A| = 0 \\implies \\lambda^2 - 6\\lambda + 8 = 0 \\implies (\\lambda - 2)(\\lambda - 4) = 0$. Thus $\\lambda = 2, 4$."
        },
        {
          "q": "If $A$ is a $3 \\times 3$ matrix with determinant $|A| = 5$, what is the value of $|-2A|$?",
          "options": [
            "$-10$",
            "$-40$",
            "$40$",
            "$20$"
          ],
          "answer": 1,
          "why": "For an $n \\times n$ matrix, $|kA| = k^n |A|$. Here $n = 3$, so $|-2A| = (-2)^3 |A| = -8 \\times 5 = -40$."
        },
        {
          "q": "Under which condition does a homogeneous system of $n$ linear equations in $n$ variables, $AX = 0$, possess a non-trivial (non-zero) solution?",
          "options": [
            "$|A| \\ne 0$",
            "$\\text{rank}(A) = n$",
            "$|A| = 0$",
            "$A$ is an identity matrix"
          ],
          "answer": 2,
          "why": "A homogeneous system $AX = 0$ has non-trivial solutions if and only if the coefficient matrix is singular, i.e., $|A| = 0$ (meaning $\\text{rank}(A) < n$)."
        },
        {
          "q": "What is the determinant of any skew-symmetric matrix of odd order (such as $3 \\times 3$ or $5 \\times 5$)?",
          "options": [
            "$1$",
            "$-1$",
            "Undetermined",
            "$0$"
          ],
          "answer": 3,
          "why": "For skew-symmetric $A$, $A^T = -A$. Taking determinants: $|A| = |A^T| = |-A| = (-1)^n |A|$. When $n$ is odd, $|A| = -|A| \\implies 2|A| = 0 \\implies |A| = 0$."
        },
        {
          "q": "If $\\lambda = 2$ is an eigenvalue of an invertible matrix $A$, which of the following is guaranteed to be an eigenvalue of $A^{-1} + 3I$?",
          "options": [
            "$5$",
            "$3.5$",
            "$2.5$",
            "$4$"
          ],
          "answer": 1,
          "why": "If $\\lambda$ is an eigenvalue of $A$, then an eigenvalue of $A^{-1}$ is $1/\\lambda = 1/2 = 0.5$. Adding $3I$ shifts the eigenvalue by $+3$: $0.5 + 3 = 3.5$."
        },
        {
          "q": "If $A$ is a square matrix of order $4 \\times 4$ with determinant $|A| = 3$, what is the determinant of its adjoint matrix, $|\\text{adj}(A)|$?",
          "options": [
            "$81$",
            "$9$",
            "$27$",
            "$12$"
          ],
          "answer": 2,
          "why": "For an $n \\times n$ matrix, $|\\text{adj}(A)| = |A|^{n-1}$. For $n = 4$ and $|A| = 3$: $|\\text{adj}(A)| = 3^{4-1} = 3^3 = 27$."
        },
        {
          "q": "In LU decomposition of a matrix $A$ ($A = LU$), solving the system $AX = B$ is carried out in two successive steps. What is the correct order of these steps?",
          "options": [
            "Solve $LY = B$ by forward substitution, then solve $UX = Y$ by back substitution",
            "Solve $UY = B$ by back substitution, then solve $LX = Y$ by forward substitution",
            "Invert $U$ directly, then multiply by $L^{-1}$",
            "Solve $UX = B$ first, then multiply by $L$"
          ],
          "answer": 0,
          "why": "Since $A = LU$, $AX = B \\implies L(UX) = B$. Setting $Y = UX$, one first solves the lower-triangular system $LY = B$ using forward substitution, and then solves the upper-triangular system $UX = Y$ using back substitution."
        },
        {
          "q": "If $P$ is an orthogonal matrix, what are the only possible values for its determinant $|P|$?",
          "options": [
            "$0$ only",
            "Any positive real number",
            "$0$ or $1$",
            "$+1$ or $-1$"
          ],
          "answer": 3,
          "why": "For an orthogonal matrix, $P^T P = I$. Taking determinants: $|P^T||P| = |I| \\implies |P|^2 = 1 \\implies |P| = \\pm 1$."
        }
      ]
    }
  ]
};
