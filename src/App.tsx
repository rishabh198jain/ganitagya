import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ProtectedRoute from './components/protected-route/ProtectedRoute'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Profile from './pages/Profile'
import ContactUs from './pages/ContactUs'
import AuthForm from './components/auth-unified/AuthForm'
import ForgotPassword from './components/forgot-password/ForgotPassword'
import StudentDashboard from './pages/dashboard/StudentDashboard'
import EducatorDashboard from './pages/dashboard/EducatorDashboard'
import AdminDashboard from './pages/dashboard/AdminDashboard'
import PricingPlans from './components/pricing-plans/PricingPlans'
import ArithmeticPage from './pages/ArithmeticPage'
import AlgebraPage from './pages/AlgebraPage'
import GeometryPage from './pages/GeometryPage'
import TrigonometryPage from './pages/TrigonometryPage'
import MensurationPage from './pages/MensurationPage'
import StatisticsPage from './pages/StatisticsPage'
import CalculusPage from './pages/CalculusPage'
import NumberTheoryPage from './pages/NumberTheoryPage'
import LogicalReasoningPage from './pages/LogicalReasoningPage'
import ProbabilityPage from './pages/ProbabilityPage'
import MathToolsPage from './pages/MathToolsPage'
import './App.css'

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/auth" element={<AuthForm />} />
              <Route path="/login" element={<AuthForm />} />
              <Route path="/signup" element={<AuthForm />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/pricing" element={<PricingPlans />} />
              <Route path="/arithmetic" element={<ArithmeticPage />} />
              <Route path="/algebra" element={<AlgebraPage />} />
              <Route path="/geometry" element={<GeometryPage />} />
              <Route path="/trigonometry" element={<TrigonometryPage />} />
              <Route path="/mensuration" element={<MensurationPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="/calculus" element={<CalculusPage />} />
              <Route path="/number-theory" element={<NumberTheoryPage />} />
              <Route path="/logical-reasoning" element={<LogicalReasoningPage />} />
              <Route path="/probability" element={<ProbabilityPage />} />
              <Route path="/math-tools" element={<MathToolsPage />} />

              {/* Protected Student Routes */}
              <Route
                path="/student-dashboard"
                element={
                  <ProtectedRoute allowedRoles={['student']}>
                    <StudentDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Protected Teacher Routes */}
              <Route
                path="/teacher-dashboard"
                element={
                  <ProtectedRoute allowedRoles={['teacher']}>
                    <EducatorDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Protected Admin Routes */}
              <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Protected Profile Route */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute allowedRoles={['student', 'teacher', 'admin']}>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
