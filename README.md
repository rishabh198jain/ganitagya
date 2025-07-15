# गणितज्ञ Ganitagya - The World of Mathematics 🧮

A beautiful, responsive website dedicated to mathematics, built with React, Node.js, and modern web technologies.

## 🌟 Features

### 🎓 Educational Platform
- **Modern React Frontend**: Built with React 19 and Vite for fast development
- **Multi-Page Navigation**: Home, About Me, Profile, and Contact Us pages with React Router
- **Responsive Design**: Mobile-first approach with beautiful CSS animations
- **Mathematical Content**: Comprehensive sections on Algebra, Geometry, Calculus, and Statistics
- **Indian Mathematical Heritage**: Featuring famous Indian mathematicians like Aryabhata, Brahmagupta, Ramanujan, and Bhaskara II
- **Interactive UI**: Smooth animations and hover effects

### 🔐 Authentication System
- **Dual Role Support**: Student and Admin authentication with role-based access
- **Secure Login/Signup**: Form validation, error handling, and demo credentials
- **Protected Routes**: Authentication-based route protection
- **Session Management**: Persistent login with localStorage
- **User Profiles**: Personalized user experience

### 📊 Dashboard System
- **Student Dashboard**: Progress tracking, course management, achievements, and analytics
- **Admin Dashboard**: User management, course administration, and platform analytics
- **Real-time Data**: Dynamic statistics and progress tracking
- **Interactive UI**: Modern dashboard design with tabs and cards

### 💳 Payment Integration
- **Flexible Pricing**: Free, Premium ($29/month), and Lifetime ($299) plans
- **Feature Comparison**: Clear plan benefits and limitations
- **Subscription Management**: Upgrade/downgrade functionality
- **Mock Payment**: Ready for Stripe integration

### 🌐 Social & Communication
- **Social Media Integration**: 8 platforms (LinkedIn, YouTube, Facebook, Instagram, Twitter, GitHub, Telegram, WhatsApp)
- **Contact Form**: Functional contact form with validation
- **Professional Pages**: Detailed biography, education, skills, and achievements
- **Node.js Backend**: RESTful API for mathematical content and formulas

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.14.0 or higher)
- npm (v10.7.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ganitagya
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
# Frontend only (recommended for development)
npm run dev

# Backend only (if needed)
npm run server:dev

# Both frontend and backend together
npm run full:dev
```

The frontend will be available at `http://localhost:5173/`
The backend API will be available at `http://localhost:3001/api/`

### 🔑 Demo Credentials

**Student Account:**
- Email: `student@example.com`
- Password: `password123`
- Access: Student dashboard, course content

**Admin Account:**
- Email: `admin@ganitagya.com`
- Password: `password123`
- Access: Admin dashboard, user management

## 🏗️ Project Structure

```
ganitagya/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx & Header.css
│   │   │   └── Footer.jsx & Footer.css
│   │   ├── sections/
│   │   │   ├── Hero.jsx & Hero.css
│   │   │   └── MathSections.jsx & MathSections.css
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── Auth.css
│   │   └── payment/
│   │       ├── PricingPlans.jsx
│   │       └── Payment.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutMe.jsx & AboutMe.css
│   │   ├── Profile.jsx & Profile.css
│   │   ├── ContactUs.jsx & ContactUs.css
│   │   └── dashboard/
│   │       ├── StudentDashboard.jsx
│   │       ├── AdminDashboard.jsx
│   │       └── Dashboard.css
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── constants/
│   │   ├── mathData.js
│   │   ├── profileData.js
│   │   ├── socialMedia.js
│   │   └── contactData.js
│   ├── hooks/
│   │   └── useForm.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx & App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── server.js (Node.js backend)
├── package.json
├── README.md
├── AUTHENTICATION.md
└── DEPLOYMENT.md
```

## 🎨 Design Features

- **Color Palette**: Modern gradient design with purple and blue tones
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth CSS animations and transitions
- **Mathematical Symbols**: Beautiful rendering of mathematical notation
- **Responsive Grid**: Flexible layouts that work on all devices

## 📚 Mathematical Content

### Topics Covered:
- **Algebra**: Linear equations, quadratic functions, polynomials
- **Geometry**: Triangles, circles, coordinate geometry
- **Calculus**: Derivatives, integrals, limits
- **Statistics**: Mean, median, probability, distributions

### Famous Mathematicians:
- **Aryabhata** (476-550 CE): Ancient Indian mathematician and astronomer
- **Brahmagupta** (628 CE): Pioneer of negative numbers and zero
- **Srinivasa Ramanujan** (1887-1920): Self-taught genius in number theory
- **Bhaskara II** (1114-1185): Medieval mathematician, early calculus concepts

## 🔧 API Endpoints

- `GET /api/health` - Health check
- `GET /api/topics` - Get all mathematical topics
- `GET /api/topics/:id` - Get specific topic details
- `GET /api/mathematicians` - Get famous mathematicians
- `GET /api/formula-of-the-day` - Get random mathematical formula

## 🛠️ Technologies Used

### Frontend Stack
- **React 19**: Latest React with modern features
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing and navigation
- **CSS3**: Modern styling with variables, flexbox, and grid
- **JavaScript ES6+**: Modern JavaScript features

### Backend & API
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **RESTful API**: Structured API endpoints

### Authentication & Security
- **Context API**: State management for authentication
- **Protected Routes**: Role-based access control
- **Form Validation**: Client-side input validation
- **Session Management**: Persistent user sessions

### Payment Integration
- **Stripe Ready**: Payment processing integration
- **Subscription Management**: Plan-based access control
- **Mock Payments**: Development-friendly payment simulation

### Development Tools
- **ESLint**: Code quality and consistency
- **Hot Module Replacement**: Fast development experience
- **Component Architecture**: Modular and reusable components
- **Custom Hooks**: Reusable logic patterns

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (< 768px)

## 📄 Pages

### 🏠 Home Page
- Hero section with animated mathematical formulas
- Mathematical topics overview (Algebra, Geometry, Calculus, Statistics)
- Famous Indian mathematicians showcase

### 👨‍🏫 About Me Page
- Professional biography and background
- Education timeline and qualifications
- Skills and expertise areas with progress bars
- Achievements and recognition timeline
- Teaching philosophy and approach

### 📞 Contact Us Page
- Contact information and office details
- Interactive contact form with validation
- Comprehensive social media links (8 platforms)
- Map section for location
- Professional contact details

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Free Hosting Options

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on deploying to:
- **Netlify** (Recommended)
- **Vercel**
- **GitHub Pages**
- **Firebase Hosting**
- **Surge.sh**

All platforms offer free hosting with custom domain support!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the rich mathematical heritage of India
- Mathematical formulas and concepts from various educational sources
- Modern web design principles and best practices

---

Made with ❤️ for mathematics enthusiasts worldwide
