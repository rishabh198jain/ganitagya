import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './AdminLoginHelper.css';

const AdminLoginHelper: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const adminCredentials = {
    email: 'admin@ganitagya.com',
    password: 'password123'
  };

  const handleQuickLogin = async () => {
    setIsLoading(true);
    setMessage('');

    try {
      const result = await login(adminCredentials.email, adminCredentials.password);
      
      if (result.success) {
        setMessage('✅ Admin login successful! Redirecting to dashboard...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        setMessage(`❌ Login failed: ${result.error}`);
      }
    } catch (error) {
      setMessage('❌ Login error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setMessage(`📋 ${type} copied to clipboard!`);
      setTimeout(() => setMessage(''), 2000);
    });
  };

  return (
    <div className="admin-login-helper">
      <div className="helper-container">
        <div className="helper-header">
          <h2>🔐 Admin Login Helper</h2>
          <p>Use these credentials to access the admin dashboard</p>
        </div>

        <div className="credentials-section">
          <h3>Admin Credentials</h3>
          
          <div className="credential-item">
            <label>Email:</label>
            <div className="credential-value">
              <code>{adminCredentials.email}</code>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(adminCredentials.email, 'Email')}
                title="Copy email"
              >
                📋
              </button>
            </div>
          </div>

          <div className="credential-item">
            <label>Password:</label>
            <div className="credential-value">
              <code>{adminCredentials.password}</code>
              <button 
                className="copy-btn"
                onClick={() => copyToClipboard(adminCredentials.password, 'Password')}
                title="Copy password"
              >
                📋
              </button>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <button 
            className="quick-login-btn"
            onClick={handleQuickLogin}
            disabled={isLoading}
          >
            {isLoading ? '🔄 Logging in...' : '🚀 Quick Admin Login'}
          </button>
          
          <button 
            className="manual-login-btn"
            onClick={() => navigate('/login')}
          >
            📝 Go to Login Page
          </button>
        </div>

        {message && (
          <div className={`message ${message.includes('✅') ? 'success' : message.includes('❌') ? 'error' : 'info'}`}>
            {message}
          </div>
        )}

        <div className="other-accounts">
          <h4>Other Demo Accounts</h4>
          <div className="demo-accounts-grid">
            <div className="demo-account">
              <h5>👩‍🏫 Educator Account</h5>
              <p><strong>Email:</strong> teacher@ganitagya.com</p>
              <p><strong>Password:</strong> password123</p>
            </div>
            
            <div className="demo-account">
              <h5>👨‍🎓 Student Account</h5>
              <p><strong>Email:</strong> student@example.com</p>
              <p><strong>Password:</strong> password123</p>
            </div>
          </div>
        </div>

        <div className="helper-footer">
          <div className="note">
            <h4>📝 Note:</h4>
            <ul>
              <li>These are demo credentials for testing purposes</li>
              <li>Admin account has full access to all features</li>
              <li>In production, use secure authentication</li>
              <li>Change default passwords before deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginHelper;
