// Offline fallback for file:// protocol
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["digital-logic"] = {
  "id": "digital-logic",
  "order": 2,
  "title": "Digital Logic",
  "icon": "⚡",
  "description": "Boolean Algebra, Combinational & Sequential Circuits, Number Representations.",
  "topics": [
    {
      "id": "digital-logic-boolean-algebra",
      "title": "Boolean Algebra",
      "status": "done",
      "explanation": "Boolean Algebra provides the mathematical foundation for analyzing, designing, and optimizing digital logic circuits. For SSC JE and Scientific Assistant (IMD) Paper-I, master universal gate equivalences, Boolean simplification rules (consensus, absorption, distributivity), canonical forms, K-map variable elimination mechanics, and the tabular Quine-McCluskey method.\\n\\n**1. Basic, Universal & Special Logic Gates**\\n- **Basic Gates**: AND ($A \\cdot B$), OR ($A + B$), NOT ($\\bar{A}$).\\n- **Universal Gates**: NAND ($\\overline{AB}$) and NOR ($\\overline{A+B}$) can implement any Boolean function. Minimum gate counts:\\n  - NOT: $1$ NAND, $1$ NOR\\n  - AND: $2$ NAND, $3$ NOR\\n  - OR: $3$ NAND, $2$ NOR\\n  - XOR: $4$ NAND, $5$ NOR\\n  - XNOR: $5$ NAND, $4$ NOR\\n- **Special Gates**:\\n  - XOR: $A \\oplus B = A\\bar{B} + \\bar{A}B$. Properties: $A \\oplus 0 = A$, $A \\oplus 1 = \\bar{A}$, $A \\oplus A = 0$, $A \\oplus \\bar{A} = 1$. Acts as an odd-parity detector and programmable inverter.\\n  - XNOR: $A \\odot B = AB + \\bar{A}\\bar{B} = \\overline{A \\oplus B}$. Acts as an equivalence / even-parity detector.\\n\\n**2. Boolean Algebra Laws & Minimization**\\n- **Distributive Laws**: $A(B + C) = AB + AC$ and the critical dual $A + BC = (A + B)(A + C)$ (high-frequency exam trap!).\\n- **De Morgan\\'s Laws**: $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$ and $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$.\\n- **Absorption Laws**: $A + AB = A$ and $A(A + B) = A$. Redundant literal: $A + \\bar{A}B = A + B$.\\n- **Consensus Theorem**: $AB + \\bar{A}C + BC = AB + \\bar{A}C$ (dual: $(A + B)(\\bar{A} + C)(B + C) = (A + B)(\\bar{A} + C)$). The term $BC$ is redundant.\\n- **Duality Principle**: Replace AND with OR, OR with AND, $0$ with $1$, and $1$ with $0$. Variables remain unchanged.\\n- **Self-Dual Functions**: A function equals its dual ($f = f^D$). For $n$ variables, there are $2^{2^{n-1}}$ self-dual functions.\\n\\n**3. Canonical Forms (SOP and POS)**\\n- **Minterm ($m_i$)**: Product of all literals where uncomplemented variable $= 1$ and complemented $= 0$. Canonical SOP: $f = \\sum m(\\dots)$.\\n- **Maxterm ($M_i$)**: Sum of all literals where uncomplemented variable $= 0$ and complemented $= 1$. Canonical POS: $f = \\prod M(\\dots)$.\\n- **Duality / Complement**: $m_i = \\overline{M_i}$. For an $n$-variable function, $\\sum m(x_1, \\dots) = \\prod M(\\text{remaining indices})$.\\n- **Don\\'t Care Conditions ($d$)**: Input combinations that never occur or whose outputs are irrelevant. Used in K-maps to expand groupings.\\n\\n**4. Karnaugh Maps (K-Maps) & Implicants**\\n- **Gray Code Ordering**: Cell coordinates change by exactly $1$ bit between adjacent cells ($00, 01, 11, 10$).\\n- **Group Elimination Rule**: An isolated cell ($2^0=1$) eliminates $0$ variables; a pair ($2^1=2$) eliminates $1$ variable; a quad ($2^2=4$) eliminates $2$ variables; an octet ($2^3=8$) eliminates $3$ variables.\\n- **Definitions**:\\n  - **Implicant**: Any product term covering at least one minterm.\\n  - **Prime Implicant (PI)**: A maximal group that cannot be combined with another to eliminate more literals.\\n  - **Essential Prime Implicant (EPI)**: A PI that covers at least one minterm that is not covered by any other PI.\\n\\n**5. Quine-McCluskey (Tabular) Method**\\n- A deterministic, tabular method for finding the minimal SOP of functions with $n \\ge 5$ variables where K-maps become unwieldy.\\n- **Phase 1**: Group minterms by the count of $1$s (Hamming weight); combine terms differing in exactly one bit position (introducing dashes) until all Prime Implicants are determined.\\n- **Phase 2**: Construct a Prime Implicant chart to identify EPIs (columns with a single checkmark) and apply row/column dominance to achieve a minimal cover.",
      "keyPoints": [
        "Universal Gate Counts for XOR/XNOR: A $2$-input XOR requires $4$ NAND or $5$ NOR gates. A $2$-input XNOR requires $5$ NAND or $4$ NOR gates.",
        "Second Distributive Law: $A + BC = (A + B)(A + C)$. High-yield exam formula for factoring and simplifying expressions.",
        "Consensus Theorem: In $AB + \\bar{A}C + BC$, the term $BC$ is redundant because $B$ and $C$ accompany opposite polarities of $A$.",
        "Absorption & Redundant Literals: $A + AB = A$ and $A + \\bar{A}B = A + B$. Dually: $A(A + B) = A$ and $A(\\bar{A} + B) = AB$.",
        "Canonical SOP vs POS Indices: For $n$ variables, indices range from $0$ to $2^n - 1$. The POS form contains exactly the indices absent from the SOP form: $\\sum m(0, 2, 3) = \\prod M(1, 4, 5, 6, 7)$ for $n = 3$.",
        "K-Map Group Reduction Power: In an $n$-variable K-map, a group of $2^k$ cells eliminates $k$ variables and yields a term of $n - k$ literals.",
        "Essential Prime Implicant (EPI) Criterion: An EPI must contain at least one $'1'$ (minterm) that is not included in any other prime implicant.",
        "Don\\'t Care Grouping Rule: Don\\'t care cells ($d$) should be grouped ONLY if they enlarge a group of $1$s to eliminate variables. Never create a group containing only don\\'t cares.",
        "Self-Dual Functions Count: The number of self-dual functions of $n$ variables is $2^{2^{n-1}}$. For $n = 3$, it is $2^{2^2} = 2^4 = 16$.",
        "XOR Logic Behavior: $A \\oplus B = 1$ when $A \\ne B$ (odd parity detector). $A \\oplus 0 = A$, $A \\oplus 1 = \\bar{A}$, $A \\oplus A = 0$, and $A \\oplus \\bar{A} = 1$."
      ],
      "tables": [
        {
          "caption": "Summary: Universal Gate Realization Requirements",
          "headers": [
            "Target Logic Gate / Function",
            "Min. 2-Input NAND Gates",
            "Min. 2-Input NOR Gates",
            "Key Realization Logic"
          ],
          "rows": [
            [
              "NOT Gate (Inverter)",
              "$1$",
              "$1$",
              "Tie both inputs together: $\\overline{AA} = \\bar{A}$"
            ],
            [
              "AND Gate",
              "$2$",
              "$3$",
              "NAND followed by inverter: $\\overline{\\overline{AB}} = AB$"
            ],
            [
              "OR Gate",
              "$3$",
              "$2$",
              "Invert inputs before NAND / NOR followed by inverter"
            ],
            [
              "NOR Gate",
              "$4$",
              "$1$",
              "OR followed by inverter / native NOR"
            ],
            [
              "NAND Gate",
              "$1$",
              "$4$",
              "Native NAND / AND followed by inverter"
            ],
            [
              "XOR Gate",
              "$4$",
              "$5$",
              "$A\\bar{B} + \\bar{A}B$ (cross-coupled NAND structure)"
            ],
            [
              "XNOR Gate",
              "$5$",
              "$4$",
              "$AB + \\bar{A}\\bar{B}$ (cross-coupled NOR structure)"
            ]
          ]
        },
        {
          "caption": "Comparison: K-Map Group Sizes and Variable Reduction (4-Variable Map)",
          "headers": [
            "Group Name",
            "Cell Count ($2^k$)",
            "Variables Eliminated ($k$)",
            "Term Type ($n - k$ Literals)",
            "Geometric Representation"
          ],
          "rows": [
            [
              "Single Cell",
              "$1 = 2^0$",
              "$0$",
              "Minterm ($4$ literals)",
              "Single isolated $'1'$"
            ],
            [
              "Pair",
              "$2 = 2^1$",
              "$1$",
              "$3$ literals",
              "Two adjacent cells"
            ],
            [
              "Quad",
              "$4 = 2^2$",
              "$2$",
              "$2$ literals",
              "$2 \\times 2$ block, row, column, or $4$ corners"
            ],
            [
              "Octet",
              "$8 = 2^3$",
              "$3$",
              "$1$ literal",
              "Two full adjacent rows or columns ($2 \\times 4$)"
            ],
            [
              "Full Map",
              "$16 = 2^4$",
              "$4$",
              "Constant $1$",
              "All $16$ cells occupied"
            ]
          ]
        }
      ],
      "examples": [
        {
          "question": "Simplify the Boolean expression using algebraic theorems: $F = AB + \\bar{A}C + BC + \\bar{B}C$.",
          "steps": [
            "Step 1: Identify the consensus term: In $AB + \\bar{A}C + BC$, the term $BC$ is redundant by the Consensus Theorem ($AB + \\bar{A}C + BC = AB + \\bar{A}C$).",
            "Step 2: Substitute back into the expression: $F = AB + \\bar{A}C + \\bar{B}C$.",
            "Step 3: Combine terms containing $C$: $\\bar{A}C + \\bar{B}C = (\\bar{A} + \\bar{B})C = \\overline{AB} \\cdot C$ (or combine $C(\\bar{A} + \\bar{B})$). Using absorption with $AB$: $F = AB + C(\\bar{A} + \\bar{B}) = AB + \\overline{AB} \\cdot C = AB + C$."
          ],
          "answer": "The simplified expression is $F = AB + C$."
        },
        {
          "question": "In a $4$-variable K-map with variables $A, B, C, D$, the minterms are $m(0, 2, 8, 10)$ and don\\'t cares are $d(5, 15)$. Find the minimal SOP expression.",
          "steps": [
            "Step 1: Map the given minterms: $m(0) = 0000$, $m(2) = 0010$, $m(8) = 1000$, $m(10) = 1010$. These are the four corners of the K-map.",
            "Step 2: Check adjacency: The four corners form a valid Quad of size $4$ ($2^2$).",
            "Step 3: Determine common literals: Across the $4$ corners, $B = 0$ (rows $00$ and $10$) and $D = 0$ (columns $00$ and $10$). Don\\'t cares at $5$ and $15$ are left unused because they cannot form a larger group with the corners."
          ],
          "answer": "The minimal SOP expression is $F = \\bar{B}\\bar{D}$."
        },
        {
          "question": "Find the minimum number of $2$-input NAND gates required to implement the function $F = A + \\bar{B}C$.",
          "steps": [
            "Step 1: Apply double negation to use De Morgan\\'s laws: $F = \\overline{\\overline{A + \\bar{B}C}} = \\overline{\\bar{A} \\cdot \\overline{\\bar{B}C}}$.",
            "Step 2: Count NAND operations: Gate 1 generates $\\bar{B}$ from $B$ ($1$ gate). Gate 2 computes $\\overline{\\bar{B}C}$ ($1$ gate). Gate 3 generates $\\bar{A}$ from $A$ ($1$ gate). Gate 4 computes $\\overline{\\bar{A} \\cdot \\overline{\\bar{B}C}}$ ($1$ gate).",
            "Step 3: Sum the gates: $1 + 1 + 1 + 1 = 4$ NAND gates (or $3$ if complemented inputs $\\bar{A}, \\bar{B}$ are available)."
          ],
          "answer": "$4$ two-input NAND gates are required (assuming uncomplemented inputs $A, B, C$)."
        }
      ],
      "traps": [
        "Trap 1 (Distributive Law over Addition): $A + BC = (A + B)(A + C)$. Many students falsely assume that multiplication distributes over addition only ($A(B+C) = AB+AC$), forgetting that in Boolean algebra, addition also distributes over multiplication.",
        "Trap 2 (Duality vs Complement): Taking the dual of an expression replaces AND $\\leftrightarrow$ OR and $0 \\leftrightarrow 1$, but NEVER inverts the literals. For example, the dual of $A + \\bar{B}C$ is $A( \\bar{B} + C)$, NOT $\\bar{A}(\\bar{B} + C)$.",
        "Trap 3 (Maxterm Variable Complementation): In minterms ($m$), an uncomplemented letter represents $1$ and complemented represents $0$. In maxterms ($M$), the reverse holds: $A = 0$ and $\\bar{A} = 1$. Thus, $M(0) = A + B + C$, NOT $\\bar{A} + \\bar{B} + \\bar{C}$.",
        "Trap 4 (Unnecessary Don\\'t Care Inclusion): Don\\'t care cells ($d$) are optional. They should ONLY be included if grouping them enlarges a group of $1$s to eliminate variables. Never create a group consisting solely of don\\'t care cells.",
        "Trap 5 (Consensus Term Recognition): In $XY + \\bar{X}Z + YZ$, the consensus term is $YZ$. Notice that $X$ appears in both true ($X$) and complemented ($\\bar{X}$) forms, and $YZ$ combines their companion variables. If $X$ is not complemented in one term, consensus does not apply."
      ],
      "practice": [
        {
          "q": "What is the minimum number of $2$-input NAND gates required to implement a $2$-input Exclusive-OR (XOR) gate?",
          "options": [
            "$4$",
            "$3$",
            "$5$",
            "$6$"
          ],
          "answer": 0,
          "why": "A $2$-input XOR gate ($A \\oplus B = A\\bar{B} + \\bar{A}B$) requires exactly $4$ two-input NAND gates (or $5$ two-input NOR gates)."
        },
        {
          "q": "Simplify the Boolean expression: $Y = (A + B)(A + \\bar{B})$.",
          "options": [
            "$A + B$",
            "$A$",
            "$AB$",
            "$B$"
          ],
          "answer": 1,
          "why": "By the second distributive law: $(A + B)(A + \\bar{B}) = A + B\\bar{B}$. Since $B\\bar{B} = 0$, $Y = A + 0 = A$."
        },
        {
          "q": "A $3$-variable Boolean function $f(A, B, C)$ is expressed in canonical SOP form as $\\sum m(0, 2, 4, 6)$. What is its equivalent canonical POS representation?",
          "options": [
            "$\\prod M(0, 2, 4, 6)$",
            "$\\sum m(1, 3, 5, 7)$",
            "$\\prod M(1, 3, 5, 7)$",
            "$\\prod M(1, 2, 3, 5)$"
          ],
          "answer": 2,
          "why": "A function's maxterm list contains all indices from the full domain ($0$ to $2^3 - 1 = 7$) that are NOT present in its minterm list. Missing indices are $\\{1, 3, 5, 7\\}$, so $f = \\prod M(1, 3, 5, 7)$."
        },
        {
          "q": "In a $4$-variable Karnaugh Map ($A, B, C, D$), an octet (a group of $8$ adjacent cells) eliminates how many variables from the resulting product term?",
          "options": [
            "$1$",
            "$2$",
            "$4$",
            "$3$"
          ],
          "answer": 3,
          "why": "A group of $2^k$ adjacent cells in a K-map eliminates $k$ variables. For an octet, $2^k = 8 = 2^3 \\implies k = 3$ variables are eliminated, leaving a single-literal term ($4 - 3 = 1$ literal)."
        },
        {
          "q": "According to the Boolean Consensus Theorem, which term is redundant and can be eliminated from the expression: $f = AB + \\bar{A}C + BC$?",
          "options": [
            "$AB$",
            "$BC$",
            "$\\bar{A}C$",
            "None of the above"
          ],
          "answer": 1,
          "why": "The Consensus Theorem states $AB + \\bar{A}C + BC = AB + \\bar{A}C$. The term $BC$ is formed from the non-complemented and complemented variable $A$'s companions ($B$ and $C$), making $BC$ completely redundant."
        },
        {
          "q": "What is the total number of self-dual Boolean functions possible for $n = 3$ variables?",
          "options": [
            "$256$",
            "$8$",
            "$16$",
            "$64$"
          ],
          "answer": 2,
          "why": "The number of self-dual functions of $n$ variables is $2^{2^{n-1}}$. For $n = 3$, it is $2^{2^{3-1}} = 2^{2^2} = 2^4 = 16$."
        },
        {
          "q": "What is the dual of the Boolean expression $X + YZ$?",
          "options": [
            "$X(Y + Z)$",
            "$\\bar{X} + \\bar{Y}\\bar{Z}$",
            "$\\bar{X}(\\bar{Y} + \\bar{Z})$",
            "$XY + Z$"
          ],
          "answer": 0,
          "why": "To find the dual of an algebraic expression, replace every AND with OR, and every OR with AND, keeping all variables unchanged: $X + (Y \\cdot Z) \\to X \\cdot (Y + Z)$."
        },
        {
          "q": "What is the primary advantage of the Quine-McCluskey (tabular) method over Karnaugh Maps in digital logic minimization?",
          "options": [
            "It uses fewer logic gates in implementation",
            "It eliminates the need for prime implicants",
            "It only works for $2$-variable circuits",
            "It is systematic and easily programmable on computers for functions with $5$ or more variables"
          ],
          "answer": 3,
          "why": "While K-maps become visually unwieldy and error-prone for $5$ or more variables, the Quine-McCluskey tabular method provides a deterministic algorithmic procedure suitable for software automation."
        }
      ]
    }
  ]
};
