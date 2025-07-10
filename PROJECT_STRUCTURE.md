# 📁 Ganitagya Project Structure

Complete folder-wise organization of the Ganitagya mathematics education platform.

## 🏗️ Project Architecture

```
ganitagya/
├── 📁 public/                          # Static assets
│   ├── vite.svg                        # Vite logo
│   └── index.html                      # HTML template
│
├── 📁 src/                             # Source code
│   ├── 📁 components/                  # Reusable components
│   │   ├── 📁 layout/                  # Layout components
│   │   │   ├── Header.jsx              # Navigation header with auth
│   │   │   ├── Header.css              # Header styling
│   │   │   ├── Footer.jsx              # Site footer with links
│   │   │   └── Footer.css              # Footer styling
│   │   │
│   │   ├── 📁 sections/                # Page sections
│   │   │   ├── Hero.jsx                # Homepage hero section
│   │   │   ├── Hero.css                # Hero styling
│   │   │   ├── MathSections.jsx        # Math topics display
│   │   │   └── MathSections.css        # Math sections styling
│   │   │
│   │   ├── 📁 auth/                    # Authentication components
│   │   │   ├── Login.jsx               # Login form component
│   │   │   ├── Signup.jsx              # Registration form
│   │   │   ├── ProtectedRoute.jsx      # Route protection wrapper
│   │   │   └── Auth.css                # Authentication styling
│   │   │
│   │   ├── 📁 payment/                 # Payment components
│   │   │   ├── PricingPlans.jsx        # Subscription plans
│   │   │   └── Payment.css             # Payment styling
│   │   │
│   │   └── 📁 ui/                      # UI components (future)
│       │   ├── Button.jsx              # Reusable button
│       │   ├── Modal.jsx               # Modal component
│       │   └── LoadingSpinner.jsx      # Loading indicator
│   │
│   ├── 📁 pages/                       # Page components
│   │   ├── Home.jsx                    # Homepage component
│   │   ├── AboutMe.jsx                 # About page
│   │   ├── AboutMe.css                 # About page styling
│   │   ├── Profile.jsx                 # Professional profile
│   │   ├── Profile.css                 # Profile styling
│   │   ├── ContactUs.jsx               # Contact page
│   │   ├── ContactUs.css               # Contact styling
│   │   │
│   │   ├── 📁 dashboard/               # Dashboard pages
│   │   │   ├── StudentDashboard.jsx    # Student learning portal
│   │   │   ├── AdminDashboard.jsx      # Admin management panel
│   │   │   └── Dashboard.css           # Dashboard styling
│   │   │
│   │   └── 📁 auth/                    # Auth pages (future)
│       │   ├── LoginPage.jsx           # Login page wrapper
│       │   ├── SignupPage.jsx          # Signup page wrapper
│       │   └── ForgotPassword.jsx      # Password reset
│   │
│   ├── 📁 contexts/                    # React contexts
│   │   ├── AuthContext.jsx             # Authentication state
│   │   ├── ThemeContext.jsx            # Theme management (future)
│   │   └── CourseContext.jsx           # Course data (future)
│   │
│   ├── 📁 hooks/                       # Custom hooks
│   │   ├── useForm.js                  # Form handling hook
│   │   ├── useAuth.js                  # Authentication hook (future)
│   │   ├── useLocalStorage.js          # Local storage hook (future)
│   │   └── useApi.js                   # API calls hook (future)
│   │
│   ├── 📁 utils/                       # Utility functions
│   │   ├── helpers.js                  # General helper functions
│   │   ├── validation.js               # Form validation (future)
│   │   ├── api.js                      # API utilities (future)
│   │   └── constants.js                # App constants (future)
│   │
│   ├── 📁 constants/                   # Data constants
│   │   ├── mathData.js                 # Mathematical content
│   │   ├── profileData.js              # Profile information
│   │   ├── socialMedia.js              # Social media links
│   │   ├── contactData.js              # Contact information
│   │   └── courseData.js               # Course content (future)
│   │
│   ├── 📁 assets/                      # Static assets
│   │   ├── 📁 images/                  # Image files
│   │   │   ├── logo.png                # App logo
│   │   │   ├── hero-bg.jpg             # Hero background
│   │   │   └── mathematicians/         # Mathematician photos
│   │   │
│   │   ├── 📁 icons/                   # Icon files
│   │   │   ├── math-symbols.svg        # Math symbols
│   │   │   └── social-icons.svg        # Social media icons
│   │   │
│   │   └── 📁 fonts/                   # Custom fonts (future)
│       │   ├── math-font.woff2         # Mathematical font
│       │   └── display-font.woff2      # Display font
│   │
│   ├── 📁 styles/                      # Global styles (future)
│   │   ├── globals.css                 # Global CSS variables
│   │   ├── reset.css                   # CSS reset
│   │   ├── typography.css              # Typography styles
│   │   └── animations.css              # Animation definitions
│   │
│   ├── App.jsx                         # Main app component
│   ├── App.css                         # App-level styling
│   ├── main.jsx                        # App entry point
│   └── index.css                       # Global styles
│
├── 📁 server/                          # Backend (future expansion)
│   ├── 📁 routes/                      # API routes
│   │   ├── auth.js                     # Authentication routes
│   │   ├── courses.js                  # Course management
│   │   ├── users.js                    # User management
│   │   └── payments.js                 # Payment processing
│   │
│   ├── 📁 models/                      # Data models
│   │   ├── User.js                     # User model
│   │   ├── Course.js                   # Course model
│   │   └── Payment.js                  # Payment model
│   │
│   ├── 📁 middleware/                  # Express middleware
│   │   ├── auth.js                     # Authentication middleware
│   │   ├── validation.js               # Request validation
│   │   └── errorHandler.js             # Error handling
│   │
│   ├── 📁 config/                      # Configuration
│   │   ├── database.js                 # Database config
│   │   ├── auth.js                     # Auth config
│   │   └── payment.js                  # Payment config
│   │
│   └── server.js                       # Express server
│
├── 📁 tests/                           # Test files (future)
│   ├── 📁 components/                  # Component tests
│   ├── 📁 pages/                       # Page tests
│   ├── 📁 utils/                       # Utility tests
│   └── setup.js                       # Test setup
│
├── 📁 docs/                            # Documentation
│   ├── README.md                       # Main documentation
│   ├── AUTHENTICATION.md               # Auth system guide
│   ├── DEPLOYMENT.md                   # Deployment guide
│   ├── PROJECT_STRUCTURE.md            # This file
│   └── API.md                          # API documentation (future)
│
├── 📁 config/                          # Configuration files
│   ├── vite.config.js                  # Vite configuration
│   ├── eslint.config.js                # ESLint rules
│   ├── netlify.toml                    # Netlify config
│   ├── vercel.json                     # Vercel config
│   └── firebase.json                   # Firebase config
│
├── 📁 scripts/                         # Build scripts (future)
│   ├── build.js                        # Custom build script
│   ├── deploy.sh                       # Deployment script
│   └── test.js                         # Test runner
│
├── package.json                        # Dependencies and scripts
├── package-lock.json                   # Dependency lock file
├── .gitignore                          # Git ignore rules
├── .env.example                        # Environment variables template
└── LICENSE                             # Project license
```

## 📋 Component Categories

### 🎨 Layout Components (`src/components/layout/`)
- **Header.jsx**: Navigation with authentication menu
- **Footer.jsx**: Site footer with social links
- **Sidebar.jsx**: Side navigation (future)

### 🧩 Section Components (`src/components/sections/`)
- **Hero.jsx**: Homepage hero with math formulas
- **MathSections.jsx**: Mathematical topics display
- **Testimonials.jsx**: User testimonials (future)

### 🔐 Authentication Components (`src/components/auth/`)
- **Login.jsx**: User login form
- **Signup.jsx**: User registration form
- **ProtectedRoute.jsx**: Route protection wrapper

### 💳 Payment Components (`src/components/payment/`)
- **PricingPlans.jsx**: Subscription plan comparison
- **PaymentForm.jsx**: Payment processing form (future)
- **SubscriptionStatus.jsx**: Current plan display (future)

### 🎛️ UI Components (`src/components/ui/`)
- **Button.jsx**: Reusable button component (future)
- **Modal.jsx**: Modal dialog component (future)
- **LoadingSpinner.jsx**: Loading indicator (future)

## 📄 Page Structure (`src/pages/`)

### 🏠 Public Pages
- **Home.jsx**: Landing page with hero and math sections
- **AboutMe.jsx**: Personal biography and background
- **Profile.jsx**: Professional profile and achievements
- **ContactUs.jsx**: Contact form and information

### 📊 Dashboard Pages (`src/pages/dashboard/`)
- **StudentDashboard.jsx**: Student learning portal
- **AdminDashboard.jsx**: Admin management panel

## 🔧 Utility Organization

### 🎯 Constants (`src/constants/`)
- **mathData.js**: Mathematical content and formulas
- **profileData.js**: Personal and professional information
- **socialMedia.js**: Social media links and contact info
- **contactData.js**: Contact form and office details

### 🪝 Custom Hooks (`src/hooks/`)
- **useForm.js**: Form state and validation management
- **useAuth.js**: Authentication state management (future)
- **useLocalStorage.js**: Local storage operations (future)

### 🛠️ Utilities (`src/utils/`)
- **helpers.js**: General utility functions
- **validation.js**: Form validation functions (future)
- **api.js**: API call utilities (future)

## 🎨 Styling Strategy

### 📱 CSS Organization
- **Component-level CSS**: Each component has its own CSS file
- **Global styles**: `index.css` for app-wide styles
- **CSS Variables**: Consistent theming with custom properties
- **Responsive Design**: Mobile-first approach

### 🎭 Design System (Future)
- **Color Palette**: Defined in CSS variables
- **Typography Scale**: Consistent font sizes and weights
- **Spacing System**: Standardized margins and padding
- **Component Library**: Reusable UI components

## 🚀 Benefits of This Structure

### 🔍 Maintainability
- **Clear Separation**: Each component has a specific purpose
- **Easy Navigation**: Logical folder structure
- **Scalable Architecture**: Easy to add new features

### 👥 Team Collaboration
- **Consistent Patterns**: Standardized component structure
- **Clear Ownership**: Each folder has a specific responsibility
- **Easy Onboarding**: New developers can quickly understand the structure

### 🔄 Reusability
- **Component Library**: Reusable UI components
- **Shared Utilities**: Common functions in utils folder
- **Consistent Data**: Centralized constants and data

### 🧪 Testability
- **Isolated Components**: Easy to test individual components
- **Mock Data**: Centralized test data
- **Clear Dependencies**: Easy to mock external dependencies

---

This structure provides a solid foundation for scaling the Ganitagya platform while maintaining code quality and developer experience.
