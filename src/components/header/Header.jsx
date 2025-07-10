import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          {/* <h1>गणितज्ञ</h1>
          <span className="logo-subtitle">Ganitagya</span> */}
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                className={isActive('/') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-me"
                className={isActive('/about-me') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={isActive('/profile') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isActive('/contact') ? 'active' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li><a href="#algebra">Algebra</a></li>
            <li><a href="#geometry">Geometry</a></li>
            <li><a href="#calculus">Calculus</a></li>
            <li><a href="#statistics">Statistics</a></li>
          </ul>
        </nav>

        <div className="header-auth">
          {isAuthenticated ? (
            <div className="user-menu">
              <Link
                to={
                  user.role === 'admin' ? '/admin/dashboard' :
                  user.role === 'teacher' ? '/teacher/dashboard' :
                  '/dashboard'
                }
                className="user-profile"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="user-avatar">{user.avatar}</span>
                <span className="user-name">{user.name}</span>
              </Link>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/auth" className="auth-btn" onClick={() => setIsMenuOpen(false)}>
                Sign In / Sign Up
              </Link>
            </div>
          )}
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
