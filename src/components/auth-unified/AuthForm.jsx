import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import DocumentPopup from '../ui/DocumentPopup';
import { getDocumentContent, DOCUMENT_TYPES } from '../../constants/legalDocuments';
import './AuthForm.css';

const AuthForm = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(location.pathname === '/signup' ? false : true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [documentPopup, setDocumentPopup] = useState({
    isOpen: false,
    type: null,
    title: '',
    content: ''
  });

  const { login, signup, loading, error } = useAuth();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/dashboard';

  // Document popup handlers
  const openDocumentPopup = (documentType) => {
    const document = getDocumentContent(documentType);
    setDocumentPopup({
      isOpen: true,
      type: documentType,
      title: document.title,
      content: document.content
    });
  };

  const closeDocumentPopup = () => {
    setDocumentPopup({
      isOpen: false,
      type: null,
      title: '',
      content: ''
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ''
      });
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setValidationErrors({});
    // Reset form data when switching modes
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: 'student',
      agreeToTerms: false
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!isLogin && !formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (!isLogin && formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!isLogin && !formData.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    let result;
    if (isLogin) {
      result = await login(formData.email, formData.password, formData.userType);
    } else {
      result = await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.userType
      });
    }

    if (result.success) {
      // Redirect based on user role
      if (result.user.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (result.user.role === 'teacher') {
        navigate('/teacher/dashboard');
      } else {
        navigate(from);
      }
    }
  };

  const demoCredentials = [
    { type: 'Admin', email: 'admin@ganitagya.com', password: 'password123' },
    { type: 'Educator', email: 'teacher@ganitagya.com', password: 'password123' },
    { type: 'Student', email: 'student@example.com', password: 'password123' }
  ];

  const fillDemoCredentials = (email, password, userType) => {
    setFormData({
      ...formData,
      email,
      password,
      userType: userType.toLowerCase()
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-toggle">
            <button
              type="button"
              className={`toggle-btn ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`toggle-btn ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
          <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p>
            {isLogin 
              ? 'Sign in to your Ganitagya account' 
              : 'Join Ganitagya and start your mathematical journey'
            }
          </p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="userType">I am a</label>
            <div className="dropdown-container">
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="user-type-dropdown"
              >
                <option value="student">👨‍🎓 Student</option>
                <option value="teacher">👩‍🏫 Educator</option>
                <option value="admin">👨‍🏫 Admin</option>
              </select>
              <div className="dropdown-arrow">▼</div>
            </div>
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={validationErrors.name ? 'error' : ''}
              />
              {validationErrors.name && (
                <span className="field-error">{validationErrors.name}</span>
              )}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={validationErrors.email ? 'error' : ''}
              required
            />
            {validationErrors.email && (
              <span className="field-error">{validationErrors.email}</span>
            )}
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
                placeholder={isLogin ? "Enter your password" : "Create a password"}
                className={validationErrors.password ? 'error' : ''}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {validationErrors.password && (
              <span className="field-error">{validationErrors.password}</span>
            )}
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={validationErrors.confirmPassword ? 'error' : ''}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {validationErrors.confirmPassword && (
                <span className="field-error">{validationErrors.confirmPassword}</span>
              )}
            </div>
          )}

          {!isLogin && (
            <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className={validationErrors.agreeToTerms ? 'error' : ''}
                  />
                  <span className="checkmark"></span>
                  <span className="checkbox-text" title="Please review and agree to our terms and conditions to create your account">
                    I agree to the <button
                      type="button"
                      className="document-link"
                      onClick={() => openDocumentPopup(DOCUMENT_TYPES.TERMS_CONDITIONS)}
                    >Terms of Service</button> and <button
                      type="button"
                      className="document-link"
                      onClick={() => openDocumentPopup(DOCUMENT_TYPES.PRIVACY_POLICY)}
                    >Privacy Policy</button>
                  </span>
                </label>
                {validationErrors.agreeToTerms && (
                  <span className="field-error">{validationErrors.agreeToTerms}</span>
                )}
              </div>
          )}

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading || (!isLogin && !formData.agreeToTerms)}
          >
            {loading ? (isLogin ? 'Signing In...' : 'Creating Account...') : (isLogin ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <div className="auth-links">
          {isLogin && (
            <Link to="/forgot-password" className="forgot-password">
              Forgot your password?
            </Link>
          )}
        </div>

        {isLogin && (
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
        )}
      </div>

      {/* Document Popup */}
      <DocumentPopup
        isOpen={documentPopup.isOpen}
        onClose={closeDocumentPopup}
        documentType={documentPopup.type}
        title={documentPopup.title}
        content={documentPopup.content}
      />
    </div>
  );
};

export default AuthForm;
