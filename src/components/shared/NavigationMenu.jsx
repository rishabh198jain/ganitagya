import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationMenu = ({ 
  items, 
  className = '', 
  itemClassName = '',
  activeClassName = 'active',
  onClick,
  renderItem
}) => {
  const location = useLocation();

  const defaultRenderItem = (item, index, isActive) => {
    const ItemComponent = item.external ? 'a' : Link;
    const itemProps = item.external 
      ? { href: item.path, target: '_blank', rel: 'noopener noreferrer' }
      : { to: item.path };

    return (
      <ItemComponent
        key={item.id || index}
        {...itemProps}
        className={`${itemClassName} ${isActive ? activeClassName : ''}`}
        onClick={() => onClick && onClick(item)}
      >
        {item.icon && <span className="nav-icon">{item.icon}</span>}
        <span className="nav-text">{item.label}</span>
        {item.badge && <span className="nav-badge">{item.badge}</span>}
      </ItemComponent>
    );
  };

  return (
    <nav className={`navigation-menu ${className}`}>
      {items.map((item, index) => {
        const isActive = location.pathname === item.path;
        
        if (renderItem) {
          return renderItem(item, index, isActive);
        }
        
        return defaultRenderItem(item, index, isActive);
      })}
    </nav>
  );
};

// Navigation data configurations
export const mainNavItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'algebra', label: 'Algebra', path: '/algebra' },
  { id: 'geometry', label: 'Geometry', path: '/geometry' },
  { id: 'calculus', label: 'Calculus', path: '/calculus' },
  { id: 'statistics', label: 'Statistics', path: '/statistics' },
  { id: 'about', label: 'About Me', path: '/about-me' },
  { id: 'contact', label: 'Contact Us', path: '/contact-us' }
];

export const authNavItems = [
  { id: 'login', label: 'Login', path: '/login' },
  { id: 'signup', label: 'Sign Up', path: '/signup' }
];

export const userNavItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: '📊' },
  { id: 'profile', label: 'Profile', path: '/profile', icon: '👤' },
  { id: 'settings', label: 'Settings', path: '/settings', icon: '⚙️' }
];

export const footerNavItems = [
  {
    title: 'Quick Links',
    items: [
      { id: 'home', label: 'Home', path: '/' },
      { id: 'about', label: 'About Me', path: '/about-me' },
      { id: 'contact', label: 'Contact Us', path: '/contact-us' }
    ]
  },
  {
    title: 'Math Topics',
    items: [
      { id: 'algebra', label: 'Algebra', path: '/algebra' },
      { id: 'geometry', label: 'Geometry', path: '/geometry' },
      { id: 'calculus', label: 'Calculus', path: '/calculus' },
      { id: 'statistics', label: 'Statistics', path: '/statistics' }
    ]
  },
  {
    title: 'Resources',
    items: [
      { id: 'formulas', label: 'Formula Reference', path: '/formulas' },
      { id: 'practice', label: 'Practice Problems', path: '/practice' },
      { id: 'tutorials', label: 'Video Tutorials', path: '/tutorials' }
    ]
  }
];

export default NavigationMenu;
