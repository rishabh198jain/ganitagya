export const numberTheoryData = {
  sections: [
    {
      id: "prime-numbers",
      title: "Prime Numbers",
      formulas: [
        {
          id: "prime-definition",
          name: "Prime Number Definition",
          formula: "p \\text{ is prime if } p > 1 \\text{ and has exactly two divisors: } 1 \\text{ and } p",
          description: "A prime number has no positive divisors other than 1 and itself",
          example: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29 are the first 10 prime numbers"
        },
        {
          id: "fundamental-theorem",
          name: "Fundamental Theorem of Arithmetic",
          formula: "n = p_1^{a_1} \\times p_2^{a_2} \\times \\cdots \\times p_k^{a_k}",
          description: "Every integer greater than 1 has a unique prime factorization",
          example: "60 = 2² × 3¹ × 5¹, 100 = 2² × 5²"
        },
        {
          id: "sieve-eratosthenes",
          name: "Sieve of Eratosthenes",
          formula: "\\text{Mark multiples of each prime starting from } p^2",
          description: "Algorithm to find all primes up to a given number",
          example: "To find primes ≤ 30: Start with 2, mark 4,6,8...; then 3, mark 9,15,21...; then 5, mark 25..."
        }
      ]
    },
    {
      id: "divisibility-rules",
      title: "Divisibility Rules",
      formulas: [
        {
          id: "divisibility-by-2",
          name: "Divisibility by 2",
          formula: "n \\equiv 0 \\pmod{2} \\iff \\text{last digit is even}",
          description: "A number is divisible by 2 if its last digit is even",
          example: "124, 356, 1008 are divisible by 2"
        },
        {
          id: "divisibility-by-3",
          name: "Divisibility by 3",
          formula: "n \\equiv 0 \\pmod{3} \\iff \\text{sum of digits} \\equiv 0 \\pmod{3}",
          description: "A number is divisible by 3 if the sum of its digits is divisible by 3",
          example: "123: 1+2+3=6, divisible by 3. 456: 4+5+6=15, divisible by 3"
        },
        {
          id: "divisibility-by-9",
          name: "Divisibility by 9",
          formula: "n \\equiv 0 \\pmod{9} \\iff \\text{sum of digits} \\equiv 0 \\pmod{9}",
          description: "A number is divisible by 9 if the sum of its digits is divisible by 9",
          example: "729: 7+2+9=18, divisible by 9. 1458: 1+4+5+8=18, divisible by 9"
        },
        {
          id: "divisibility-by-11",
          name: "Divisibility by 11",
          formula: "n \\equiv 0 \\pmod{11} \\iff \\text{alternating sum of digits} \\equiv 0 \\pmod{11}",
          description: "A number is divisible by 11 if the alternating sum of digits is divisible by 11",
          example: "1331: 1-3+3-1=0, divisible by 11. 2728: 2-7+2-8=-11, divisible by 11"
        }
      ]
    },
    {
      id: "modular-arithmetic",
      title: "Modular Arithmetic",
      formulas: [
        {
          id: "congruence-definition",
          name: "Congruence Definition",
          formula: "a \\equiv b \\pmod{m} \\iff m \\mid (a-b)",
          description: "Two numbers are congruent modulo m if their difference is divisible by m",
          example: "17 ≡ 5 (mod 12) because 17-5=12 is divisible by 12"
        },
        {
          id: "modular-addition",
          name: "Modular Addition",
          formula: "(a + b) \\bmod m = ((a \\bmod m) + (b \\bmod m)) \\bmod m",
          description: "Addition in modular arithmetic",
          example: "(23 + 19) mod 7 = (2 + 5) mod 7 = 0"
        },
        {
          id: "fermats-little-theorem",
          name: "Fermat's Little Theorem",
          formula: "\\text{If } p \\text{ is prime and } \\gcd(a,p)=1, \\text{ then } a^{p-1} \\equiv 1 \\pmod{p}",
          description: "Important theorem in modular arithmetic",
          example: "3⁴ ≡ 1 (mod 5) since 3⁴ = 81 = 16×5 + 1"
        }
      ]
    },
    {
      id: "number-patterns",
      title: "Number Patterns",
      formulas: [
        {
          id: "fibonacci-sequence",
          name: "Fibonacci Sequence",
          formula: "F_n = F_{n-1} + F_{n-2}, \\text{ with } F_0=0, F_1=1",
          description: "Each number is the sum of the two preceding ones",
          example: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89..."
        },
        {
          id: "triangular-numbers",
          name: "Triangular Numbers",
          formula: "T_n = \\frac{n(n+1)}{2}",
          description: "Numbers that can form an equilateral triangle",
          example: "T₁=1, T₂=3, T₃=6, T₄=10, T₅=15, T₆=21..."
        },
        {
          id: "perfect-numbers",
          name: "Perfect Numbers",
          formula: "n = \\sum_{d|n, d<n} d",
          description: "A number equal to the sum of its proper divisors",
          example: "6 = 1+2+3, 28 = 1+2+4+7+14, 496 = 1+2+4+8+16+31+62+124+248"
        },
        {
          id: "euclidean-algorithm",
          name: "Euclidean Algorithm (GCD)",
          formula: "\\gcd(a,b) = \\gcd(b, a \\bmod b)",
          description: "Algorithm to find the greatest common divisor",
          example: "gcd(48,18): 48=2×18+12, 18=1×12+6, 12=2×6+0, so gcd(48,18)=6"
        }
      ]
    }
  ]
};
