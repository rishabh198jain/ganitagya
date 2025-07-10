import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Enhanced mathematical content data
const mathTopics = [
  {
    id: "algebra",
    title: "Algebra",
    description:
      "Master the art of solving equations and working with variables.",
    difficulty: "intermediate",
    estimatedTime: "2 hours",
    prerequisites: ["basic-math"],
    category: "algebra",
    formulas: [
      {
        id: "quadratic",
        name: "Quadratic Formula",
        formula: "x = (-b ± √(b² - 4ac)) / 2a",
        explanation:
          "Used to solve quadratic equations of the form ax² + bx + c = 0",
        example: "For x² + 5x + 6 = 0: a=1, b=5, c=6",
      },
      {
        id: "linear",
        name: "Linear Equation",
        formula: "y = mx + b",
        explanation:
          "Represents a straight line where m is slope and b is y-intercept",
        example: "y = 2x + 3 has slope 2 and y-intercept 3",
      },
      {
        id: "factoring",
        name: "Factoring",
        formula: "a² - b² = (a + b)(a - b)",
        explanation: "Difference of squares factorization",
        example: "x² - 9 = (x + 3)(x - 3)",
      },
    ],
    exercises: [
      {
        id: "alg-ex-1",
        question: "Solve: x² + 5x + 6 = 0",
        answer: "x = -2, -3",
        difficulty: "easy",
        hints: ["Use the quadratic formula", "Factor if possible"],
      },
    ],
  },
  {
    id: "geometry",
    title: "Geometry",
    description: "Explore shapes, angles, and spatial relationships.",
    difficulty: "beginner",
    estimatedTime: "1.5 hours",
    prerequisites: [],
    category: "geometry",
    formulas: [
      {
        id: "circle-area",
        name: "Circle Area",
        formula: "A = πr²",
        explanation: "Area of a circle where r is the radius",
        example: "Circle with radius 5: A = π(5)² = 25π",
      },
      {
        id: "triangle-area",
        name: "Triangle Area",
        formula: "A = ½bh",
        explanation: "Area of a triangle where b is base and h is height",
        example: "Triangle with base 6 and height 4: A = ½(6)(4) = 12",
      },
      {
        id: "pythagorean",
        name: "Pythagorean Theorem",
        formula: "a² + b² = c²",
        explanation:
          "In a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides",
        example:
          "Triangle with sides 3, 4: c² = 3² + 4² = 9 + 16 = 25, so c = 5",
      },
    ],
    exercises: [
      {
        id: "geo-ex-1",
        question: "Find the area of a circle with radius 7",
        answer: "49π or approximately 153.94",
        difficulty: "easy",
        hints: ["Use A = πr²", "Substitute r = 7"],
      },
    ],
  },
  {
    id: "calculus",
    title: "Calculus",
    description: "Understand rates of change and areas under curves.",
    difficulty: "advanced",
    estimatedTime: "3 hours",
    prerequisites: ["algebra", "geometry"],
    category: "calculus",
    formulas: [
      {
        id: "derivative",
        name: "Derivative",
        formula: "f'(x) = lim(h→0) [f(x+h) - f(x)] / h",
        explanation:
          "The derivative represents the instantaneous rate of change",
        example: "For f(x) = x², f'(x) = 2x",
      },
      {
        id: "integral",
        name: "Integral",
        formula: "∫ f(x)dx = F(x) + C",
        explanation: "The integral represents the area under a curve",
        example: "∫ 2x dx = x² + C",
      },
      {
        id: "chain-rule",
        name: "Chain Rule",
        formula: "(f∘g)'(x) = f'(g(x)) · g'(x)",
        explanation: "Used to differentiate composite functions",
        example: "For f(x) = (x² + 1)³, f'(x) = 3(x² + 1)² · 2x",
      },
    ],
    exercises: [
      {
        id: "calc-ex-1",
        question: "Find the derivative of f(x) = x³ + 2x² - 5x + 1",
        answer: "f'(x) = 3x² + 4x - 5",
        difficulty: "medium",
        hints: ["Use power rule", "Derivative of constant is 0"],
      },
    ],
  },
];

const mathematicians = [
  {
    name: "Aryabhata",
    period: "476-550 CE",
    contribution:
      "Ancient Indian mathematician and astronomer, introduced concept of zero",
    achievements: ["Place value system", "Approximation of π", "Trigonometry"],
  },
  {
    name: "Brahmagupta",
    period: "628 CE",
    contribution:
      "Pioneered rules for computing with negative numbers and zero",
    achievements: ["Rules for zero", "Negative numbers", "Quadratic equations"],
  },
  {
    name: "Srinivasa Ramanujan",
    period: "1887-1920",
    contribution: "Self-taught genius in number theory and infinite series",
    achievements: [
      "Partition function",
      "Mock theta functions",
      "Infinite series",
    ],
  },
  {
    name: "Bhaskara II",
    period: "1114-1185",
    contribution: "Medieval mathematician, known for early calculus concepts",
    achievements: [
      "Differential calculus",
      "Pell equation",
      "Astronomical calculations",
    ],
  },
];

// Course structure data
const courses = [
  {
    id: "basic-algebra",
    title: "Basic Algebra Mastery",
    description: "Complete algebra course for beginners",
    instructor: "Dr. Ganitagya",
    duration: "8 weeks",
    difficulty: "beginner",
    rating: 4.8,
    enrolledStudents: 1250,
    price: 999,
    currency: "INR",
    modules: [
      {
        id: "module-1",
        title: "Introduction to Variables",
        lessons: [
          {
            id: "lesson-1",
            title: "What are Variables?",
            duration: "15 min",
            type: "video",
          },
          {
            id: "lesson-2",
            title: "Practice Problems",
            duration: "30 min",
            type: "exercise",
          },
        ],
      },
      {
        id: "module-2",
        title: "Solving Linear Equations",
        lessons: [
          {
            id: "lesson-3",
            title: "One-Step Equations",
            duration: "20 min",
            type: "video",
          },
          {
            id: "lesson-4",
            title: "Multi-Step Equations",
            duration: "25 min",
            type: "video",
          },
        ],
      },
    ],
    prerequisites: [],
    learningOutcomes: [
      "Understand variables and algebraic expressions",
      "Solve linear equations confidently",
      "Apply algebra to real-world problems",
    ],
  },
  {
    id: "geometry-fundamentals",
    title: "Geometry Fundamentals",
    description: "Master shapes, angles, and spatial relationships",
    instructor: "Prof. Sarah Wilson",
    duration: "6 weeks",
    difficulty: "beginner",
    rating: 4.7,
    enrolledStudents: 980,
    price: 799,
    currency: "INR",
    modules: [
      {
        id: "geo-module-1",
        title: "Basic Shapes and Properties",
        lessons: [
          {
            id: "geo-lesson-1",
            title: "Points, Lines, and Planes",
            duration: "18 min",
            type: "video",
          },
          {
            id: "geo-lesson-2",
            title: "Angles and Their Types",
            duration: "22 min",
            type: "video",
          },
        ],
      },
    ],
    prerequisites: [],
    learningOutcomes: [
      "Identify and classify geometric shapes",
      "Calculate areas and perimeters",
      "Understand geometric relationships",
    ],
  },
];

// Pricing plans data
const pricingPlans = [
  {
    id: "free",
    name: "Free Plan",
    price: 0,
    currency: "INR",
    interval: "month",
    popular: false,
    features: [
      { name: "Basic Math Topics", included: true },
      { name: "Limited Practice Problems", included: true, limit: 10 },
      { name: "Progress Tracking", included: false },
      { name: "Video Tutorials", included: false },
      { name: "Certificate", included: false },
    ],
    limitations: {
      topicsPerMonth: 3,
      practiceProblems: 10,
      videoAccess: false,
    },
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: 999,
    currency: "INR",
    interval: "month",
    popular: true,
    features: [
      { name: "All Math Topics", included: true },
      { name: "Unlimited Practice", included: true },
      { name: "Video Tutorials", included: true },
      { name: "Progress Analytics", included: true },
      { name: "Certificate", included: true },
      { name: "Priority Support", included: true },
    ],
    limitations: {},
  },
  {
    id: "annual",
    name: "Annual Premium",
    price: 9999,
    currency: "INR",
    interval: "year",
    popular: false,
    discount: 17, // 2 months free
    features: [
      { name: "All Premium Features", included: true },
      { name: "2 Months Free", included: true },
      { name: "Exclusive Content", included: true },
      { name: "1-on-1 Sessions", included: true, limit: 2 },
    ],
  },
];

// Company information data
const companyInfo = {
  contact: {
    email: "contact@ganitagya.com",
    phone: "+91-11-1234-5678",
    address: {
      street: "Mathematics Institute",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      pincode: "110001",
    },
    businessHours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed",
    },
  },
  socialMedia: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/ganitagya",
      active: true,
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/@ganitagya",
      active: true,
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/ganitagya",
      active: true,
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/ganitagya",
      active: true,
    },
    { platform: "Twitter", url: "https://twitter.com/ganitagya", active: true },
  ],
  aboutUs: {
    mission: "Making mathematics accessible to everyone",
    vision: "To be the leading mathematics education platform in India",
    foundedYear: 2024,
    teamSize: 25,
    studentsServed: 10000,
  },
};

// Navigation structure data
const navigationStructure = {
  mainMenu: [
    {
      name: "Courses",
      href: "/courses",
      submenu: [
        { name: "Algebra", href: "/courses/algebra" },
        { name: "Geometry", href: "/courses/geometry" },
        { name: "Calculus", href: "/courses/calculus" },
      ],
    },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  footerLinks: {
    quickLinks: [
      { name: "Help Center", href: "/help" },
      { name: "Contact", href: "/contact" },
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Community", href: "/community" },
      { name: "Support", href: "/support" },
    ],
  },
  userRoleMenus: {
    student: ["dashboard", "courses", "progress", "profile"],
    teacher: ["dashboard", "courses", "students", "analytics", "profile"],
    admin: ["dashboard", "users", "content", "analytics", "settings"],
  },
};

// Legal documents data
const legalDocuments = {
  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: new Date().toLocaleDateString(),
    content: `PRIVACY POLICY

Last Updated: ${new Date().toLocaleDateString()}

1. INTRODUCTION

Welcome to Ganitagya ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our mathematics education platform.

2. INFORMATION WE COLLECT

2.1 Personal Information
- Name and contact information (email address, phone number)
- Account credentials (username, password)
- Profile information (educational background, preferences)
- Payment information (processed securely through third-party providers)

2.2 Usage Information
- Learning progress and performance data
- Course completion statistics
- Time spent on platform
- Device and browser information
- IP address and location data

2.3 Cookies and Tracking Technologies
We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.

3. HOW WE USE YOUR INFORMATION

3.1 To Provide Services
- Create and manage your account
- Deliver educational content and courses
- Track learning progress
- Process payments and subscriptions

3.2 To Improve Our Platform
- Analyze usage patterns
- Develop new features
- Enhance user experience
- Conduct research and analytics

3.3 To Communicate
- Send course updates and notifications
- Provide customer support
- Share educational resources
- Send marketing communications (with consent)

4. INFORMATION SHARING

We do not sell, trade, or rent your personal information. We may share information in these circumstances:

4.1 Service Providers
- Payment processors
- Cloud hosting services
- Analytics providers
- Customer support tools

4.2 Legal Requirements
- Comply with legal obligations
- Protect our rights and property
- Ensure user safety
- Respond to legal requests

5. DATA SECURITY

We implement appropriate security measures to protect your information:
- Encryption of sensitive data
- Secure server infrastructure
- Regular security audits
- Access controls and authentication

6. YOUR RIGHTS

You have the right to:
- Access your personal information
- Correct inaccurate data
- Delete your account and data
- Opt-out of marketing communications
- Data portability

7. CHILDREN'S PRIVACY

Our platform is designed for users 13 years and older. We do not knowingly collect information from children under 13.

8. INTERNATIONAL TRANSFERS

Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place.

9. CHANGES TO THIS POLICY

We may update this Privacy Policy periodically. We will notify you of significant changes via email or platform notification.

10. CONTACT US

For questions about this Privacy Policy, contact us at:
Email: privacy@ganitagya.com
Address: Mathematics Institute, New Delhi, India 110001

This Privacy Policy is effective as of the date listed above and governs your use of the Ganitagya platform.`,
  },
  termsConditions: {
    title: "Terms and Conditions",
    lastUpdated: new Date().toLocaleDateString(),
    content: `TERMS AND CONDITIONS

Last Updated: ${new Date().toLocaleDateString()}

1. ACCEPTANCE OF TERMS

By accessing and using the Ganitagya platform ("Service"), you accept and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Service.

2. DESCRIPTION OF SERVICE

Ganitagya is an online mathematics education platform that provides:
- Interactive mathematics courses
- Educational resources and materials
- Progress tracking and analytics
- Community features for learners

3. USER ACCOUNTS

3.1 Account Creation
- You must provide accurate and complete information
- You are responsible for maintaining account security
- You must be at least 13 years old to create an account
- One person may not maintain multiple accounts

3.2 Account Responsibilities
- Keep your login credentials secure
- Notify us immediately of unauthorized access
- You are responsible for all activities under your account
- Do not share your account with others

4. ACCEPTABLE USE

4.1 Permitted Uses
- Access educational content for personal learning
- Participate in community discussions respectfully
- Use platform features as intended
- Provide feedback and suggestions

4.2 Prohibited Activities
- Violate any applicable laws or regulations
- Infringe on intellectual property rights
- Share inappropriate or offensive content
- Attempt to hack or disrupt the platform
- Use the service for commercial purposes without permission
- Create fake accounts or impersonate others

5. INTELLECTUAL PROPERTY

5.1 Our Content
- All course materials, videos, and resources are our property
- You may not reproduce, distribute, or modify our content
- Limited license granted for personal educational use only

5.2 User Content
- You retain ownership of content you create
- You grant us license to use your content on the platform
- You represent that your content does not infringe on others' rights

6. PAYMENT AND SUBSCRIPTIONS

6.1 Subscription Plans
- Various subscription tiers available
- Prices subject to change with notice
- Automatic renewal unless cancelled

6.2 Payment Terms
- Payment due in advance
- Refunds subject to our refund policy
- Failure to pay may result in service suspension

6.3 Cancellation
- You may cancel your subscription at any time
- Cancellation takes effect at the end of current billing period
- No refunds for partial periods

7. PRIVACY

Your privacy is important to us. Please review our Privacy Policy, which governs the collection and use of your information.

8. DISCLAIMERS

8.1 Service Availability
- Service provided "as is" without warranties
- We do not guarantee uninterrupted access
- Content may contain errors or inaccuracies

8.2 Educational Outcomes
- We do not guarantee specific learning outcomes
- Success depends on individual effort and circumstances
- Our content supplements but does not replace formal education

9. LIMITATION OF LIABILITY

To the maximum extent permitted by law:
- We are not liable for indirect or consequential damages
- Our total liability is limited to the amount you paid for the service
- We are not responsible for third-party content or services

10. INDEMNIFICATION

You agree to indemnify and hold us harmless from claims arising from:
- Your use of the service
- Your violation of these Terms
- Your infringement of others' rights

11. TERMINATION

11.1 By You
- You may terminate your account at any time
- Termination does not relieve payment obligations

11.2 By Us
- We may terminate accounts for Terms violations
- We may suspend service for maintenance or legal reasons
- We will provide notice when reasonably possible

12. CHANGES TO TERMS

We may modify these Terms at any time. Continued use of the service constitutes acceptance of modified Terms.

13. GOVERNING LAW

These Terms are governed by the laws of India. Disputes will be resolved in the courts of New Delhi, India.

14. CONTACT INFORMATION

For questions about these Terms, contact us at:
Email: legal@ganitagya.com
Address: Mathematics Institute, New Delhi, India 110001

By using Ganitagya, you acknowledge that you have read, understood, and agree to these Terms and Conditions.`,
  },
};

// API Routes
app.get("/api/topics", (req, res) => {
  res.json(mathTopics);
});

app.get("/api/topics/:id", (req, res) => {
  const topic = mathTopics.find((t) => t.id === req.params.id);
  if (topic) {
    res.json(topic);
  } else {
    res.status(404).json({ error: "Topic not found" });
  }
});

app.get("/api/mathematicians", (req, res) => {
  res.json(mathematicians);
});

app.get("/api/formula-of-the-day", (req, res) => {
  const allFormulas = mathTopics.flatMap((topic) => topic.formulas);
  const randomFormula =
    allFormulas[Math.floor(Math.random() * allFormulas.length)];
  res.json(randomFormula);
});

// Course API endpoints
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === req.params.id);
  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

app.get("/api/courses/:id/modules", (req, res) => {
  const course = courses.find((c) => c.id === req.params.id);
  if (course) {
    res.json(course.modules);
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

// Pricing API endpoints
app.get("/api/pricing/plans", (req, res) => {
  res.json(pricingPlans);
});

app.get("/api/pricing/plans/:id", (req, res) => {
  const plan = pricingPlans.find((p) => p.id === req.params.id);
  if (plan) {
    res.json(plan);
  } else {
    res.status(404).json({ error: "Pricing plan not found" });
  }
});

// Company information API endpoints
app.get("/api/company/info", (req, res) => {
  res.json(companyInfo);
});

app.get("/api/company/contact", (req, res) => {
  res.json(companyInfo.contact);
});

app.get("/api/company/social", (req, res) => {
  res.json(companyInfo.socialMedia);
});

// Navigation API endpoints
app.get("/api/navigation", (req, res) => {
  res.json(navigationStructure);
});

app.get("/api/navigation/menu", (req, res) => {
  res.json(navigationStructure.mainMenu);
});

app.get("/api/navigation/footer", (req, res) => {
  res.json(navigationStructure.footerLinks);
});

app.get("/api/navigation/user/:role", (req, res) => {
  const role = req.params.role;
  const userMenu = navigationStructure.userRoleMenus[role];
  if (userMenu) {
    res.json(userMenu);
  } else {
    res.status(404).json({ error: "User role not found" });
  }
});

// Content search and filtering
app.get("/api/content/search", (req, res) => {
  const query = req.query.q?.toLowerCase();
  const difficulty = req.query.difficulty;
  const category = req.query.category;

  let results = mathTopics;

  if (query) {
    results = results.filter(
      (topic) =>
        topic.title.toLowerCase().includes(query) ||
        topic.description.toLowerCase().includes(query) ||
        topic.formulas.some(
          (formula) =>
            formula.name.toLowerCase().includes(query) ||
            formula.explanation.toLowerCase().includes(query)
        )
    );
  }

  if (difficulty) {
    results = results.filter((topic) => topic.difficulty === difficulty);
  }

  if (category) {
    results = results.filter((topic) => topic.category === category);
  }

  res.json(results);
});

// Exercise API endpoints
app.get("/api/exercises", (req, res) => {
  const allExercises = mathTopics.flatMap((topic) =>
    topic.exercises.map((exercise) => ({
      ...exercise,
      topicId: topic.id,
      topicTitle: topic.title,
    }))
  );
  res.json(allExercises);
});

app.get("/api/exercises/:topicId", (req, res) => {
  const topic = mathTopics.find((t) => t.id === req.params.topicId);
  if (topic) {
    res.json(topic.exercises);
  } else {
    res.status(404).json({ error: "Topic not found" });
  }
});

// Legal documents API endpoints
app.get("/api/legal/documents", (req, res) => {
  res.json(legalDocuments);
});

app.get("/api/legal/privacy", (req, res) => {
  res.json(legalDocuments.privacyPolicy);
});

app.get("/api/legal/terms", (req, res) => {
  res.json(legalDocuments.termsConditions);
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Ganitagya API is running!" });
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`🧮 Ganitagya server running on port ${PORT}`);
  console.log(`📊 API endpoints available at http://localhost:${PORT}/api/`);
});
