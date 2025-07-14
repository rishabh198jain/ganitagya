export const arithmeticData = {
  sections: [
    {
      id: "basic-operations",
      title: "Basic Operations",
      formulas: [
        {
          id: "addition",
          name: "Addition",
          formula: "a + b = c",
          description: "Combining two or more numbers to get their sum",
          example: "5 + 3 = 8, 12 + 7 = 19, 25 + 15 = 40"
        },
        {
          id: "subtraction",
          name: "Subtraction",
          formula: "a - b = c",
          description: "Finding the difference between two numbers",
          example: "10 - 4 = 6, 20 - 8 = 12, 50 - 23 = 27"
        },
        {
          id: "multiplication",
          name: "Multiplication",
          formula: "a \\times b = c",
          description: "Repeated addition or finding the product of numbers",
          example: "4 × 6 = 24, 7 × 8 = 56, 12 × 5 = 60"
        },
        {
          id: "division",
          name: "Division",
          formula: "a \\div b = c",
          description: "Splitting a number into equal parts",
          example: "15 ÷ 3 = 5, 24 ÷ 6 = 4, 48 ÷ 8 = 6"
        }
      ]
    },
    {
      id: "fractions-decimals",
      title: "Fractions & Decimals",
      formulas: [
        {
          id: "fraction-addition",
          name: "Adding Fractions",
          formula: "\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}",
          description: "Adding fractions with the same denominator",
          example: "1/4 + 2/4 = 3/4, 2/5 + 1/5 = 3/5"
        },
        {
          id: "fraction-multiplication",
          name: "Multiplying Fractions",
          formula: "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}",
          description: "Multiply numerators and denominators separately",
          example: "2/3 × 3/4 = 6/12 = 1/2"
        },
        {
          id: "decimal-operations",
          name: "Decimal Operations",
          formula: "0.5 + 0.3 = 0.8",
          description: "Operations with decimal numbers",
          example: "2.5 + 1.3 = 3.8, 4.2 - 1.7 = 2.5, 0.6 × 0.4 = 0.24"
        }
      ]
    },
    {
      id: "percentages",
      title: "Percentages",
      formulas: [
        {
          id: "percentage-formula",
          name: "Percentage Formula",
          formula: "\\text{Percentage} = \\frac{\\text{Part}}{\\text{Whole}} \\times 100\\%",
          description: "Converting a fraction to a percentage",
          example: "25 out of 100 = 25/100 × 100% = 25%"
        },
        {
          id: "percentage-increase",
          name: "Percentage Increase",
          formula: "\\text{Increase} = \\frac{\\text{New Value} - \\text{Old Value}}{\\text{Old Value}} \\times 100\\%",
          description: "Calculating percentage increase",
          example: "Price increased from $20 to $25: (25-20)/20 × 100% = 25%"
        },
        {
          id: "percentage-of-number",
          name: "Finding Percentage of a Number",
          formula: "x\\% \\text{ of } n = \\frac{x}{100} \\times n",
          description: "Calculate a percentage of a given number",
          example: "20% of 50 = 20/100 × 50 = 10"
        }
      ]
    },
    {
      id: "number-properties",
      title: "Number Properties",
      formulas: [
        {
          id: "even-odd",
          name: "Even and Odd Numbers",
          formula: "\\text{Even: } 2n, \\text{ Odd: } 2n+1",
          description: "Properties of even and odd numbers",
          example: "Even: 2, 4, 6, 8... Odd: 1, 3, 5, 7..."
        },
        {
          id: "prime-composite",
          name: "Prime and Composite Numbers",
          formula: "\\text{Prime has exactly 2 factors: 1 and itself}",
          description: "Numbers with specific factor properties",
          example: "Prime: 2, 3, 5, 7, 11... Composite: 4, 6, 8, 9, 10..."
        },
        {
          id: "factors-multiples",
          name: "Factors and Multiples",
          formula: "\\text{If } a \\times b = c, \\text{ then } a \\text{ and } b \\text{ are factors of } c",
          description: "Understanding factors and multiples",
          example: "Factors of 12: 1, 2, 3, 4, 6, 12. Multiples of 3: 3, 6, 9, 12, 15..."
        }
      ]
    }
  ]
};
