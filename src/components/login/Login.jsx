import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import '../shared/Auth.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'student'
  })
  const [showPassword, setShowPassword] = useState(false)
  const { login, loading, error } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/dashboard'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await login(formData.email, formData.password, formData.userType)
    
    if (result.success) {
      // Redirect based on user role
      if (result.user.role === 'admin') {
        navigate('/admin/dashboard')
      } else if (result.user.role === 'teacher') {
        navigate('/teacher/dashboard')
      } else {
        navigate(from)
      }
    }
  }

  const demoCredentials = [
    { type: 'Admin', email: 'admin@ganitagya.com', password: 'password123' },
    { type: 'Teacher', email: 'teacher@ganitagya.com', password: 'password123' },
    { type: 'Student', email: 'student@example.com', password: 'password123' }
  ]

  const fillDemoCredentials = (email, password, userType) => {
    setFormData({
      email,
      password,
      userType: userType.toLowerCase()
    })
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your Ganitagya account</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="user-type-selector">
            <label className={`user-type-option ${formData.userType === 'student' ? 'active' : ''}`}>
              <input
                type="radio"
                name="userType"
                value="student"
                checked={formData.userType === 'student'}
                onChange={handleChange}
              />
              <span className="user-type-icon">👨‍🎓</span>
              <span>Student</span>
            </label>
            <label className={`user-type-option ${formData.userType === 'teacher' ? 'active' : ''}`}>
              <input
                type="radio"
                name="userType"
                value="teacher"
                checked={formData.userType === 'teacher'}
                onChange={handleChange}
              />
              <span className="user-type-icon">👩‍🏫</span>
              <span>Teacher</span>
            </label>
            <label className={`user-type-option ${formData.userType === 'admin' ? 'active' : ''}`}>
              <input
                type="radio"
                name="userType"
                value="admin"
                checked={formData.userType === 'admin'}
                onChange={handleChange}
              />
              <span className="user-type-icon">👨‍🏫</span>
              <span>Admin</span>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/forgot-password" className="forgot-password">
            Forgot your password?
          </Link>
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">
              Sign up here
            </Link>
          </p>
        </div>

        <div className="demo-credentials">
          <h3>Demo Credentials</h3>
          <div className="demo-grid">
            {demoCredentials.map((demo, index) => (
              <div key={index} className="demo-card">
                <h4>{demo.type} Account</h4>
                <p>Email: {demo.email}</p>
                <p>Password: {demo.password}</p>
                <button
                  type="button"
                  className="demo-fill-btn"
                  onClick={() => fillDemoCredentials(demo.email, demo.password, demo.type)}
                >
                  Use {demo.type} Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
