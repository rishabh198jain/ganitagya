export const probabilityData = {
  sections: [
    {
      id: "basic-probability",
      title: "Basic Probability",
      formulas: [
        {
          id: "probability-definition",
          name: "Probability Definition",
          formula: "P(A) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}}",
          description: "Basic definition of probability for equally likely outcomes",
          example: "Rolling a die: P(getting 3) = 1/6, P(getting even) = 3/6 = 1/2"
        },
        {
          id: "probability-rules",
          name: "Basic Probability Rules",
          formula: "0 \\leq P(A) \\leq 1, P(\\Omega) = 1, P(\\emptyset) = 0",
          description: "Fundamental properties of probability",
          example: "P(impossible event) = 0, P(certain event) = 1, P(any event) is between 0 and 1"
        },
        {
          id: "complement-rule",
          name: "Complement Rule",
          formula: "P(A^c) = 1 - P(A)",
          description: "Probability of the complement of an event",
          example: "If P(rain) = 0.3, then P(no rain) = 1 - 0.3 = 0.7"
        }
      ]
    },
    {
      id: "conditional-probability",
      title: "Conditional Probability",
      formulas: [
        {
          id: "conditional-definition",
          name: "Conditional Probability",
          formula: "P(A|B) = \\frac{P(A \\cap B)}{P(B)}",
          description: "Probability of A given that B has occurred",
          example: "P(ace|red card) = P(red ace)/P(red card) = 2/52 ÷ 26/52 = 2/26 = 1/13"
        },
        {
          id: "multiplication-rule",
          name: "Multiplication Rule",
          formula: "P(A \\cap B) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B)",
          description: "Probability of both events occurring",
          example: "P(two aces without replacement) = P(1st ace) × P(2nd ace|1st ace) = 4/52 × 3/51"
        },
        {
          id: "independence",
          name: "Independent Events",
          formula: "P(A \\cap B) = P(A) \\cdot P(B) \\text{ if A and B are independent}",
          description: "Events are independent if one doesn't affect the other",
          example: "Two coin flips: P(HH) = P(H) × P(H) = 1/2 × 1/2 = 1/4"
        },
        {
          id: "bayes-theorem",
          name: "Bayes' Theorem",
          formula: "P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}",
          description: "Update probability based on new evidence",
          example: "Medical test: P(disease|positive) = P(positive|disease) × P(disease) / P(positive)"
        }
      ]
    },
    {
      id: "distributions",
      title: "Distributions",
      formulas: [
        {
          id: "binomial-distribution",
          name: "Binomial Distribution",
          formula: "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}",
          description: "Probability of k successes in n independent trials",
          example: "10 coin flips, P(exactly 6 heads) = C(10,6) × (1/2)⁶ × (1/2)⁴ = 210/1024"
        },
        {
          id: "normal-distribution",
          name: "Normal Distribution",
          formula: "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}",
          description: "Bell-shaped continuous probability distribution",
          example: "Heights follow normal distribution: μ=170cm, σ=10cm. About 68% are between 160-180cm"
        },
        {
          id: "expected-value",
          name: "Expected Value",
          formula: "E(X) = \\sum_{i} x_i \\cdot P(X = x_i)",
          description: "Average value of a random variable",
          example: "Die roll: E(X) = 1×(1/6) + 2×(1/6) + ... + 6×(1/6) = 3.5"
        }
      ]
    },
    {
      id: "real-world-applications",
      title: "Real-world Applications",
      formulas: [
        {
          id: "gambling-odds",
          name: "Gambling and Odds",
          formula: "\\text{Odds} = \\frac{P(A)}{P(A^c)} = \\frac{P(A)}{1-P(A)}",
          description: "Converting between probability and odds",
          example: "If P(win) = 1/4, then odds = (1/4)/(3/4) = 1:3 or '3 to 1 against'"
        },
        {
          id: "insurance-risk",
          name: "Insurance and Risk",
          formula: "\\text{Premium} = \\text{Expected Loss} + \\text{Profit Margin}",
          description: "How insurance companies calculate premiums",
          example: "Car insurance: If 2% chance of $10,000 claim, expected loss = 0.02 × $10,000 = $200"
        },
        {
          id: "quality-control",
          name: "Quality Control",
          formula: "P(\\text{defective batch}) = P(\\text{sample defective}|\\text{batch defective}) \\times P(\\text{batch defective})",
          description: "Using sampling to assess product quality",
          example: "If 5% of items are defective, P(finding defect in sample of 20) = 1 - (0.95)²⁰ ≈ 0.64"
        },
        {
          id: "weather-forecasting",
          name: "Weather Forecasting",
          formula: "P(\\text{rain tomorrow}|\\text{conditions today}) = \\text{Historical frequency}",
          description: "Using historical data to predict weather",
          example: "'30% chance of rain' means that in similar conditions, it rained 30% of the time historically"
        }
      ]
    }
  ]
};
