// Math topics data for the MathSections component
export const mathTopics = [
  {
    id: "arithmetic",
    title: "Arithmetic",
    description:
      "Master the fundamental operations of mathematics including addition, subtraction, multiplication, and division with whole numbers, fractions, and decimals.",
    icon: "🔢",
    formula: "a + b = c",
    features: [
      "Basic Operations",
      "Fractions & Decimals",
      "Percentages",
      "Number Properties",
    ],
    difficulty: "Beginner",
    estimatedTime: "1-2 weeks",
  },
  {
    id: "algebra",
    title: "Algebra",
    description:
      "Master equations, functions, and algebraic structures with comprehensive examples and step-by-step solutions.",
    icon: "�",
    formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    features: [
      "Linear & Quadratic Equations",
      "Algebraic Laws & Identities",
      "Exponent Rules",
      "Interactive Examples",
    ],
    difficulty: "Beginner to Intermediate",
    estimatedTime: "2-4 weeks",
  },
  {
    id: "geometry",
    title: "Geometry",
    description:
      "Explore shapes, angles, and spatial relationships from basic concepts to advanced theorems.",
    icon: "�",
    formula: "a^2 + b^2 = c^2",
    features: [
      "Angles & Triangles",
      "Circles & Polygons",
      "Solid Geometry",
      "Coordinate Geometry",
    ],
    difficulty: "Beginner to Advanced",
    estimatedTime: "3-5 weeks",
  },
  {
    id: "trigonometry",
    title: "Trigonometry",
    description:
      "Study the relationships between angles and sides in triangles, with applications in physics, engineering, and navigation.",
    icon: "🧊",
    formula: "\\sin^2\\theta + \\cos^2\\theta = 1",
    features: [
      "Trigonometric Ratios",
      "Identities & Equations",
      "Inverse Functions",
      "Applications",
    ],
    difficulty: "Intermediate",
    estimatedTime: "3-4 weeks",
  },
  {
    id: "mensuration",
    title: "Mensuration",
    description:
      "Learn to calculate areas, volumes, and surface areas of various geometric shapes and solids.",
    icon: "📉",
    formula: "V = \\frac{4}{3}\\pi r^3",
    features: [
      "Area Calculations",
      "Volume & Surface Area",
      "2D & 3D Shapes",
      "Real-world Applications",
    ],
    difficulty: "Beginner to Intermediate",
    estimatedTime: "2-3 weeks",
  },
  {
    id: "statistics",
    title: "Statistics",
    description:
      "Analyze data and understand statistical measures with practical examples and real-world applications.",
    icon: "�",
    formula: "\\sigma = \\sqrt{\\frac{\\sum(x_i - \\mu)^2}{N}}",
    features: [
      "Central Tendency",
      "Dispersion Measures",
      "Data Representation",
      "Statistical Analysis",
    ],
    difficulty: "Beginner to Intermediate",
    estimatedTime: "3-4 weeks",
  },
  {
    id: "calculus",
    title: "Calculus",
    description:
      "Dive into limits, derivatives, and integrals with comprehensive coverage of differential and integral calculus.",
    icon: "📈",
    formula: "\\frac{d}{dx}(x^n) = nx^{n-1}",
    features: [
      "Limits & Continuity",
      "Derivatives & Rules",
      "Integration Techniques",
      "Applications",
    ],
    difficulty: "Intermediate to Advanced",
    estimatedTime: "4-6 weeks",
  },
  {
    id: "number-theory",
    title: "Number Theory",
    description:
      "Explore the fascinating properties of integers, prime numbers, and mathematical patterns in number systems.",
    icon: "🧠",
    formula: "p \\equiv 1 \\pmod{4}",
    features: [
      "Prime Numbers",
      "Divisibility Rules",
      "Modular Arithmetic",
      "Number Patterns",
    ],
    difficulty: "Intermediate to Advanced",
    estimatedTime: "4-5 weeks",
  },
  {
    id: "logical-reasoning",
    title: "Logical Reasoning",
    description:
      "Develop critical thinking skills through mathematical logic, proofs, and systematic problem-solving techniques.",
    icon: "🔍",
    formula: "P \\rightarrow Q",
    features: [
      "Logical Statements",
      "Proof Techniques",
      "Set Theory",
      "Problem Solving",
    ],
    difficulty: "Intermediate",
    estimatedTime: "3-4 weeks",
  },
  {
    id: "probability",
    title: "Probability",
    description:
      "Understand chance, randomness, and uncertainty through mathematical probability theory and practical applications.",
    icon: "🎲",
    formula: "P(A \\cap B) = P(A) \\cdot P(B|A)",
    features: [
      "Basic Probability",
      "Conditional Probability",
      "Distributions",
      "Real-world Applications",
    ],
    difficulty: "Beginner to Intermediate",
    estimatedTime: "3-4 weeks",
  },
];

// Famous mathematicians data for inspiration section
export const famousMathematicians = [
  {
    id: "euler",
    name: "Leonhard Euler",
    period: "1707-1783",
    contribution:
      "Made foundational contributions to calculus, graph theory, and number theory",
    quote:
      "Mathematics is the queen of sciences and number theory is the queen of mathematics.",
    field: "Analysis, Number Theory",
    nationality: "Swiss",
    image: "🧮",
  },
  {
    id: "gauss",
    name: "Carl Friedrich Gauss",
    period: "1777-1855",
    contribution:
      'Known as the "Prince of Mathematics" for contributions to algebra, statistics, and geometry',
    quote: "Mathematics is the queen of the sciences.",
    field: "Algebra, Statistics, Geometry",
    nationality: "German",
    image: "👑",
  },
  {
    id: "newton",
    name: "Isaac Newton",
    period: "1643-1727",
    contribution:
      "Co-inventor of calculus and formulated the laws of motion and universal gravitation",
    quote:
      "If I have seen further it is by standing on the shoulders of giants.",
    field: "Calculus, Physics",
    nationality: "English",
    image: "🍎",
  },
  {
    id: "archimedes",
    name: "Archimedes",
    period: "287-212 BC",
    contribution:
      "Pioneer in geometry, calculus, and hydrostatics; calculated π accurately",
    quote:
      "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.",
    field: "Geometry, Physics",
    nationality: "Greek",
    image: "⚖️",
  },
  {
    id: "pythagoras",
    name: "Pythagoras",
    period: "570-495 BC",
    contribution:
      "Famous for the Pythagorean theorem and contributions to number theory",
    quote: "Numbers rule the universe.",
    field: "Geometry, Number Theory",
    nationality: "Greek",
    image: "📐",
  },
  {
    id: "fibonacci",
    name: "Leonardo Fibonacci",
    period: "1170-1250",
    contribution:
      "Introduced the Fibonacci sequence and helped popularize Hindu-Arabic numerals in Europe",
    quote: "Learning and understanding are the true riches of life.",
    field: "Number Theory, Sequences",
    nationality: "Italian",
    image: "🌀",
  },
];

// Additional math constants for various components
export const mathConstants = {
  pi: {
    symbol: "π",
    value: 3.14159265359,
    description: "The ratio of a circle's circumference to its diameter",
  },
  e: {
    symbol: "e",
    value: 2.71828182846,
    description: "Euler's number, the base of natural logarithms",
  },
  phi: {
    symbol: "φ",
    value: 1.61803398875,
    description: "The golden ratio, found in nature and art",
  },
  sqrt2: {
    symbol: "√2",
    value: 1.41421356237,
    description: "The square root of 2, first known irrational number",
  },
};

// Learning paths for different skill levels
export const learningPaths = [
  {
    id: "beginner",
    title: "Beginner Path",
    description: "Start your mathematical journey with fundamental concepts",
    subjects: ["algebra", "geometry"],
    duration: "2-3 months",
    prerequisites: "Basic arithmetic",
  },
  {
    id: "intermediate",
    title: "Intermediate Path",
    description: "Build on your foundation with more advanced topics",
    subjects: ["algebra", "geometry", "statistics"],
    duration: "3-4 months",
    prerequisites: "Completed beginner path",
  },
  {
    id: "advanced",
    title: "Advanced Path",
    description: "Master complex mathematical concepts and applications",
    subjects: ["calculus", "statistics", "advanced-algebra"],
    duration: "4-6 months",
    prerequisites: "Strong algebra and geometry foundation",
  },
];

// Study tips and strategies
export const studyTips = [
  {
    id: "practice",
    title: "Practice Regularly",
    description:
      "Consistent practice is key to mastering mathematical concepts",
    icon: "💪",
  },
  {
    id: "understand",
    title: "Focus on Understanding",
    description:
      "Don't just memorize formulas - understand the underlying concepts",
    icon: "🧠",
  },
  {
    id: "examples",
    title: "Work Through Examples",
    description: "Step-by-step examples help solidify your understanding",
    icon: "📝",
  },
  {
    id: "mistakes",
    title: "Learn from Mistakes",
    description: "Mistakes are valuable learning opportunities",
    icon: "🎯",
  },
];

// Hero section buttons data
export const heroButtons = [
  {
    id: "get-started",
    text: "Get Started",
    type: "primary",
    action: "navigate",
    target: "/algebra",
  },
  {
    id: "learn-more",
    text: "Learn More",
    type: "secondary",
    action: "scroll",
    target: "#math-sections",
  },
];

// Math formulas for hero section display
export const mathFormulas = [
  {
    id: "einstein",
    formula: "E = mc^2",
    name: "Einstein's Mass-Energy Equivalence",
  },
  {
    id: "pythagorean",
    formula: "a^2 + b^2 = c^2",
    name: "Pythagorean Theorem",
  },
  {
    id: "derivative",
    formula: "\\frac{d}{dx}(x^n) = nx^{n-1}",
    name: "Power Rule for Derivatives",
  },
  {
    id: "integral",
    formula: "\\int x dx = \\frac{x^2}{2} + C",
    name: "Basic Integration",
  },
];

// Math symbols for decorative elements
export const mathSymbols = [
  { symbol: "∑", name: "Summation" },
  { symbol: "∫", name: "Integral" },
  { symbol: "∂", name: "Partial Derivative" },
  { symbol: "∞", name: "Infinity" },
  { symbol: "π", name: "Pi" },
  { symbol: "√", name: "Square Root" },
  { symbol: "±", name: "Plus Minus" },
  { symbol: "≠", name: "Not Equal" },
  { symbol: "≤", name: "Less Than or Equal" },
  { symbol: "≥", name: "Greater Than or Equal" },
  { symbol: "∈", name: "Element Of" },
  { symbol: "∀", name: "For All" },
  { symbol: "∃", name: "There Exists" },
  { symbol: "∅", name: "Empty Set" },
  { symbol: "∪", name: "Union" },
  { symbol: "∩", name: "Intersection" },
];
