import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [step, setStep] = useState('email') // 'email', 'verification', 'reset', 'success'
  const [formData, setFormData] = useState({
    email: '',
    verificationCode: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('');
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Simulate API call to send verification code
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock validation
      if (!formData.email) {
        throw new Error('Email is required')
      }
      
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        throw new Error('Please enter a valid email address')
      }

      setMessage('Verification code sent to your email!')
      setStep('verification')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Simulate API call to verify code
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      if (!formData.verificationCode) {
        throw new Error('Verification code is required')
      }
      
      // Mock verification (in real app, this would be validated by server)
      if (formData.verificationCode !== '123456') {
        throw new Error('Invalid verification code')
      }

      setMessage('Code verified! Please set your new password.')
      setStep('reset')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Validate passwords
      if (!formData.newPassword) {
        throw new Error('New password is required')
      }
      
      if (formData.newPassword.length < 6) {
        throw new Error('Password must be at least 6 characters long')
      }
      
      if (formData.newPassword !== formData.confirmPassword) {
        throw new Error('Passwords do not match')
      }

      // Simulate API call to reset password
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setMessage('Password reset successfully!');
      setStep('success');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resendCode = async () => {
    setLoading(true)
    setError('')
    
    try {
      // Simulate resending code
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessage('New verification code sent!')
    } catch (err) {
      setError('Failed to resend code. Please try again.')
    } finally {
      setLoading(false);
    }
  };

  const renderEmailStep = () => (
    <form onSubmit={handleEmailSubmit} className="forgot-password-form">
      <div className="step-header">
        <h2>Reset Your Password</h2>
        <p>Enter your email address and we'll send you a verification code</p>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Verification Code'}
      </button>
    </form>
  )

  const renderVerificationStep = () => (
    <form onSubmit={handleVerificationSubmit} className="forgot-password-form">
      <div className="step-header">
        <h2>Enter Verification Code</h2>
        <p>We've sent a 6-digit code to {formData.email}</p>
      </div>

      <div className="form-group">
        <label htmlFor="verificationCode">Verification Code</label>
        <input
          type="text"
          id="verificationCode"
          name="verificationCode"
          value={formData.verificationCode}
          onChange={handleChange}
          placeholder="Enter 6-digit code"
          maxLength="6"
          required
        />
        <small className="form-hint">Demo code: 123456</small>
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={loading}
      >
        {loading ? 'Verifying...' : 'Verify Code'}
      </button>

      <div className="form-actions">
        <button
          type="button"
          className="link-btn"
          onClick={resendCode}
          disabled={loading}
        >
          Resend Code
        </button>
        <button
          type="button"
          className="link-btn"
          onClick={() => setStep('email')}
        >
          Change Email
        </button>
      </div>
    </form>
  )

  const renderResetStep = () => (
    <form onSubmit={handlePasswordReset} className="forgot-password-form">
      <div className="step-header">
        <h2>Set New Password</h2>
        <p>Choose a strong password for your account</p>
      </div>

      <div className="form-group">
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="Enter new password"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm new password"
          required
        />
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={loading}
      >
        {loading ? 'Resetting...' : 'Reset Password'}
      </button>
    </form>
  )

  const renderSuccessStep = () => (
    <div className="success-message">
      <div className="success-icon">✅</div>
      <h2>Password Reset Successful!</h2>
      <p>Your password has been reset successfully. You can now log in with your new password.</p>
      <Link to="/login" className="success-btn">
        Go to Login
      </Link>
    </div>
  )

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <div className="progress-indicator">
          <div className={`progress-step ${step === 'email' ? 'active' : step !== 'email' ? 'completed' : ''}`}>
            <span>1</span>
            <label>Email</label>
          </div>
          <div className={`progress-step ${step === 'verification' ? 'active' : step === 'reset' || step === 'success' ? 'completed' : ''}`}>
            <span>2</span>
            <label>Verify</label>
          </div>
          <div className={`progress-step ${step === 'reset' ? 'active' : step === 'success' ? 'completed' : ''}`}>
            <span>3</span>
            <label>Reset</label>
          </div>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {message && (
          <div className="success-message-small">
            {message}
          </div>
        )}

        {step === 'email' && renderEmailStep()}
        {step === 'verification' && renderVerificationStep()}
        {step === 'reset' && renderResetStep()}
        {step === 'success' && renderSuccessStep()}

        <div className="back-to-login">
          <Link to="/login" className="back-link">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
