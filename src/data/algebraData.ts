import { MathSection } from "../components/shared/MathPageTemplate";

export const algebraSections: MathSection[] = [
  {
    id: "linear-equations",
    title: "Linear",
    description: "Equations with variables raised to the first power",
    items: [
      {
        id: "one-variable",
        name: "One variable",
        formula: "$ax + b = 0 \\Rightarrow x = -\\frac{b}{a}$",
        example: {
          problem: "Solve $3x + 6 = 0$",
          solution: "$x = -2$",
          steps: [
            "Given equation: $3x + 6 = 0$",
            "Subtract 6 from both sides: $3x = -6$",
            "Divide both sides by 3: $x = \\frac{-6}{3}$",
            "Simplify: $x = -2$",
          ],
        },
      },
      {
        id: "two-variables",
        name: "Two variables",
        formula: "$ax + by = c$ (solved using substitution or elimination)",
        example: {
          problem: "Solve $2x + 3y = 7$ and $x - y = 1$",
          solution: "$x = 2, y = 1$",
          steps: [
            "From second equation: $x = y + 1$",
            "Substitute into first equation: $2(y + 1) + 3y = 7$",
            "Expand: $2y + 2 + 3y = 7$",
            "Combine like terms: $5y = 5$",
            "Solve for y: $y = 1$",
            "Substitute back: $x = 1 + 1 = 2$",
          ],
        },
      },
    ],
  },
  {
    id: "quadratic-equations",
    title: "Quadratic",
    description: "Second-degree polynomial equations and their properties",
    items: [
      {
        id: "general-form",
        name: "General form",
        formula: "$ax^2 + bx + c = 0$",
        example: {
          problem: "Identify coefficients in $2x^2 - 5x + 3 = 0$",
          solution: "$a = 2, b = -5, c = 3$",
          steps: [
            "Compare with standard form $ax^2 + bx + c = 0$",
            "Coefficient of $x^2$: $a = 2$",
            "Coefficient of $x$: $b = -5$",
            "Constant term: $c = 3$",
          ],
        },
      },
      {
        id: "quadratic-formula",
        name: "Roots of quadratic equation",
        formula: "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
        example: {
          problem: "Solve $x^2 - 5x + 6 = 0$",
          solution: "$x = 2$ or $x = 3$",
          steps: [
            "Identify: $a = 1, b = -5, c = 6$",
            "Apply formula: $x = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4(1)(6)}}{2(1)}$",
            "Simplify: $x = \\frac{5 \\pm \\sqrt{25 - 24}}{2}$",
            "Calculate: $x = \\frac{5 \\pm 1}{2}$",
            "Solutions: $x = 3$ or $x = 2$",
          ],
        },
      },
      {
        id: "discriminant",
        name: "Discriminant (D)",
        formula: "$D = b^2 - 4ac$",
        example: {
          problem: "Find discriminant of $x^2 - 4x + 4 = 0$",
          solution: "$D = 0$ (Real & equal roots)",
          steps: [
            "Identify: $a = 1, b = -4, c = 4$",
            "Apply formula: $D = (-4)^2 - 4(1)(4)$",
            "Calculate: $D = 16 - 16 = 0$",
            "Since $D = 0$, roots are real and equal",
          ],
        },
      },
      {
        id: "nature-of-roots",
        name: "Nature of roots",
        formula:
          "If $D > 0$ → Real & distinct; If $D = 0$ → Real & equal; If $D < 0$ → Imaginary",
        example: {
          problem: "Determine nature of roots for $x^2 + 2x + 5 = 0$",
          solution: "Imaginary roots",
          steps: [
            "Calculate discriminant: $D = 2^2 - 4(1)(5) = 4 - 20 = -16$",
            "Since $D = -16 < 0$, roots are imaginary",
            "The equation has no real solutions",
          ],
        },
      },
    ],
  },
  {
    id: "algebraic-laws",
    title: "Laws",
    description: "Fundamental laws governing algebraic operations",
    items: [
      {
        id: "distributive-law",
        name: "Distributive law",
        formula: "$a(b + c) = ab + ac$",
        example: {
          problem: "Expand $3(x + 4)$",
          solution: "$3x + 12$",
          steps: [
            "Apply distributive law: $a(b + c) = ab + ac$",
            "Here $a = 3, b = x, c = 4$",
            "$3(x + 4) = 3 \\cdot x + 3 \\cdot 4$",
            "Simplify: $3x + 12$",
          ],
        },
      },
      {
        id: "commutative-law",
        name: "Commutative law",
        formula: "$ab = ba$",
        example: {
          problem: "Show that $5 \\times 7 = 7 \\times 5$",
          solution: "Both equal 35",
          steps: [
            "Calculate left side: $5 \\times 7 = 35$",
            "Calculate right side: $7 \\times 5 = 35$",
            "Since both equal 35, commutative law is verified",
            "Order of multiplication does not matter",
          ],
        },
      },
      {
        id: "associative-law",
        name: "Associative law",
        formula: "$a + (b + c) = (a + b) + c$",
        example: {
          problem: "Verify $2 + (3 + 4) = (2 + 3) + 4$",
          solution: "Both equal 9",
          steps: [
            "Left side: $2 + (3 + 4) = 2 + 7 = 9$",
            "Right side: $(2 + 3) + 4 = 5 + 4 = 9$",
            "Since both equal 9, associative law is verified",
            "Grouping does not affect the sum",
          ],
        },
      },
    ],
  },
  {
    id: "exponent-rules",
    title: "Exponents",
    description: "Rules for operations involving exponents and powers",
    items: [
      {
        id: "product-rule",
        name: "Product rule",
        formula: "$a^m \\cdot a^n = a^{m+n}$",
        example: {
          problem: "Simplify $x^3 \\cdot x^5$",
          solution: "$x^8$",
          steps: [
            "Apply product rule: $a^m \\cdot a^n = a^{m+n}$",
            "Here $a = x, m = 3, n = 5$",
            "$x^3 \\cdot x^5 = x^{3+5}$",
            "Simplify: $x^8$",
          ],
        },
      },
      {
        id: "division-rule",
        name: "Division rule",
        formula: "$\\frac{a^m}{a^n} = a^{m-n}$",
        example: {
          problem: "Simplify $\\frac{y^7}{y^3}$",
          solution: "$y^4$",
          steps: [
            "Apply division rule: $\\frac{a^m}{a^n} = a^{m-n}$",
            "Here $a = y, m = 7, n = 3$",
            "$\\frac{y^7}{y^3} = y^{7-3}$",
            "Simplify: $y^4$",
          ],
        },
      },
      {
        id: "power-of-power",
        name: "Power of a power",
        formula: "$(a^m)^n = a^{mn}$",
        example: {
          problem: "Simplify $(z^2)^4$",
          solution: "$z^8$",
          steps: [
            "Apply power rule: $(a^m)^n = a^{mn}$",
            "Here $a = z, m = 2, n = 4$",
            "$(z^2)^4 = z^{2 \\times 4}$",
            "Simplify: $z^8$",
          ],
        },
      },
      {
        id: "power-of-product",
        name: "Power of a product",
        formula: "$(ab)^m = a^m b^m$",
        example: {
          problem: "Expand $(3x)^2$",
          solution: "$9x^2$",
          steps: [
            "Apply power of product rule: $(ab)^m = a^m b^m$",
            "Here $a = 3, b = x, m = 2$",
            "$(3x)^2 = 3^2 \\cdot x^2$",
            "Simplify: $9x^2$",
          ],
        },
      },
    ],
  },
  {
    id: "algebraic-identities",
    title: "Identities",
    description:
      "Fundamental algebraic identities for expansion and factorization",
    items: [
      {
        id: "square-sum",
        name: "Square of sum",
        formula: "$(a + b)^2 = a^2 + 2ab + b^2$",
        example: {
          problem: "Expand $(3 + 4)^2$",
          solution: "$49$",
          steps: [
            "Using $(a + b)^2 = a^2 + 2ab + b^2$ where $a = 3$ and $b = 4$",
            "$(3 + 4)^2 = 3^2 + 2(3)(4) + 4^2$",
            "$= 9 + 24 + 16$",
            "$= 49$",
          ],
        },
      },
      {
        id: "square-difference",
        name: "Square of difference",
        formula: "$(a - b)^2 = a^2 - 2ab + b^2$",
        example: {
          problem: "Expand $(5 - 2)^2$",
          solution: "$9$",
          steps: [
            "Using $(a - b)^2 = a^2 - 2ab + b^2$ where $a = 5$ and $b = 2$",
            "$(5 - 2)^2 = 5^2 - 2(5)(2) + 2^2$",
            "$= 25 - 20 + 4$",
            "$= 9$",
          ],
        },
      },
      {
        id: "perfect-square-trinomial-positive",
        name: "Perfect square trinomial (positive)",
        formula: "$a^2 + 2ab + b^2 = (a + b)^2$",
        example: {
          problem: "Factor $x^2 + 6x + 9$",
          solution: "$(x + 3)^2$",
          steps: [
            "Identify the pattern: $x^2 + 6x + 9$",
            "Check if it matches $a^2 + 2ab + b^2$ where $a = x$ and $b = 3$",
            "$x^2 + 2(x)(3) + 3^2 = x^2 + 6x + 9$ ✓",
            "Therefore: $x^2 + 6x + 9 = (x + 3)^2$",
          ],
        },
      },
      {
        id: "perfect-square-trinomial-negative",
        name: "Perfect square trinomial (negative)",
        formula: "$a^2 - 2ab + b^2 = (a - b)^2$",
        example: {
          problem: "Factor $4x^2 - 12x + 9$",
          solution: "$(2x - 3)^2$",
          steps: [
            "Identify the pattern: $4x^2 - 12x + 9$",
            "Recognize $4x^2 = (2x)^2$ and $9 = 3^2$",
            "Check: $(2x)^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9$ ✓",
            "Therefore: $4x^2 - 12x + 9 = (2x - 3)^2$",
          ],
        },
      },
      {
        id: "difference-of-squares-factorization",
        name: "Difference of squares (factorization)",
        formula: "$a^2 - b^2 = (a + b)(a - b)$",
        example: {
          problem: "Factor $16x^2 - 25$",
          solution: "$(4x + 5)(4x - 5)$",
          steps: [
            "Recognize this as difference of squares: $16x^2 - 25$",
            "Identify $a^2 = 16x^2 = (4x)^2$ and $b^2 = 25 = 5^2$",
            "So $a = 4x$ and $b = 5$",
            "Apply formula: $(4x)^2 - 5^2 = (4x + 5)(4x - 5)$",
          ],
        },
      },
    ],
  },
];
