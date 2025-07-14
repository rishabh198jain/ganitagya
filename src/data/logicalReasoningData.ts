export const logicalReasoningData = {
  sections: [
    {
      id: "logical-statements",
      title: "Logical Statements",
      formulas: [
        {
          id: "logical-operators",
          name: "Logical Operators",
          formula: "\\neg P \\text{ (NOT)}, P \\land Q \\text{ (AND)}, P \\lor Q \\text{ (OR)}, P \\rightarrow Q \\text{ (IMPLIES)}",
          description: "Basic logical operators for combining statements",
          example: "If P: 'It's raining' and Q: 'I carry umbrella', then P→Q: 'If it's raining, then I carry umbrella'"
        },
        {
          id: "truth-tables",
          name: "Truth Tables",
          formula: "P \\rightarrow Q \\text{ is false only when } P \\text{ is true and } Q \\text{ is false}",
          description: "Tables showing truth values of compound statements",
          example: "P→Q: (T,T)→T, (T,F)→F, (F,T)→T, (F,F)→T"
        },
        {
          id: "logical-equivalence",
          name: "Logical Equivalence",
          formula: "P \\leftrightarrow Q \\equiv (P \\rightarrow Q) \\land (Q \\rightarrow P)",
          description: "Two statements are equivalent if they have the same truth value",
          example: "¬(P∧Q) ≡ (¬P∨¬Q) (De Morgan's Law)"
        }
      ]
    },
    {
      id: "proof-techniques",
      title: "Proof Techniques",
      formulas: [
        {
          id: "direct-proof",
          name: "Direct Proof",
          formula: "\\text{To prove } P \\rightarrow Q, \\text{ assume } P \\text{ and derive } Q",
          description: "Straightforward logical deduction from hypothesis to conclusion",
          example: "Prove: If n is even, then n² is even. Assume n=2k, then n²=(2k)²=4k²=2(2k²), so n² is even."
        },
        {
          id: "proof-by-contradiction",
          name: "Proof by Contradiction",
          formula: "\\text{To prove } P, \\text{ assume } \\neg P \\text{ and derive a contradiction}",
          description: "Assume the opposite and show it leads to impossibility",
          example: "Prove √2 is irrational: Assume √2=p/q in lowest terms, then 2q²=p², so p² is even, thus p is even..."
        },
        {
          id: "mathematical-induction",
          name: "Mathematical Induction",
          formula: "\\text{Base case: } P(1). \\text{ Inductive step: } P(k) \\rightarrow P(k+1)",
          description: "Prove a statement for all natural numbers",
          example: "Prove 1+2+...+n = n(n+1)/2: Base: 1=1(2)/2 ✓. Step: If true for k, then sum to k+1 = k(k+1)/2 + (k+1) = (k+1)(k+2)/2"
        }
      ]
    },
    {
      id: "set-theory",
      title: "Set Theory",
      formulas: [
        {
          id: "set-operations",
          name: "Set Operations",
          formula: "A \\cup B, A \\cap B, A \\setminus B, A^c",
          description: "Union, intersection, difference, and complement of sets",
          example: "A={1,2,3}, B={2,3,4}: A∪B={1,2,3,4}, A∩B={2,3}, A\\B={1}"
        },
        {
          id: "venn-diagrams",
          name: "Venn Diagrams",
          formula: "|A \\cup B| = |A| + |B| - |A \\cap B|",
          description: "Visual representation of set relationships",
          example: "If |A|=10, |B|=8, |A∩B|=3, then |A∪B|=10+8-3=15"
        },
        {
          id: "de-morgans-laws",
          name: "De Morgan's Laws",
          formula: "(A \\cup B)^c = A^c \\cap B^c, (A \\cap B)^c = A^c \\cup B^c",
          description: "Laws relating complement with union and intersection",
          example: "The complement of 'A or B' equals 'not A and not B'"
        }
      ]
    },
    {
      id: "problem-solving",
      title: "Problem Solving",
      formulas: [
        {
          id: "polya-method",
          name: "Polya's Problem Solving Steps",
          formula: "1. \\text{ Understand} \\rightarrow 2. \\text{ Plan} \\rightarrow 3. \\text{ Execute} \\rightarrow 4. \\text{ Review}",
          description: "Systematic approach to solving mathematical problems",
          example: "Problem: Find two numbers whose sum is 20 and product is 96. Understand: x+y=20, xy=96. Plan: Substitute y=20-x. Execute: x(20-x)=96..."
        },
        {
          id: "logical-puzzles",
          name: "Logical Puzzles",
          formula: "\\text{Use elimination, contradiction, and systematic reasoning}",
          description: "Strategies for solving logic puzzles and brain teasers",
          example: "Knights always tell truth, knaves always lie. A says 'B is a knave'. If A is knight, then B is knave. If A is knave, then B is knight."
        },
        {
          id: "pattern-recognition",
          name: "Pattern Recognition",
          formula: "\\text{Look for arithmetic, geometric, or recursive patterns}",
          description: "Identifying underlying patterns in sequences and problems",
          example: "Sequence: 2, 6, 12, 20, 30... Pattern: n(n+1) for n=1,2,3,4,5..."
        },
        {
          id: "proof-strategies",
          name: "Proof Strategies",
          formula: "\\text{Choose: Direct, Indirect, Contradiction, Induction, or Contrapositive}",
          description: "Selecting appropriate proof method for different types of statements",
          example: "To prove 'If n² is odd, then n is odd', use contrapositive: 'If n is even, then n² is even'"
        }
      ]
    }
  ]
};
