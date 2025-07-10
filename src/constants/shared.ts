// Shared constants across the application

// Color Palette
export const COLORS = {
  primary: '#667eea',
  primaryDark: '#764ba2',
  secondary: '#d946ef',
  accent: '#22c55e',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
  
  // Text Colors
  textDark: '#1f2937',
  textLight: '#4b5563',
  textMuted: '#6b7280',
  
  // Background Colors
  bgLight: '#f9fafb',
  bgWhite: '#ffffff',
  bgGray: '#f8f9fa',
  
  // Border Colors
  borderLight: '#e5e7eb',
  borderMedium: '#d1d5db',
  borderDark: '#9ca3af',
} as const;

// Gradients
export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: 'linear-gradient(135deg, #d946ef 0%, #c026d3 100%)',
  success: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  warning: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  danger: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
  page: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  card: 'linear-gradient(135deg, #f0f4ff 0%, #e6f3ff 100%)',
} as const;

// Breakpoints
export const BREAKPOINTS = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px',
} as const;

// Z-Index Scale
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070,
} as const;

// Animation Durations
export const ANIMATIONS = {
  fast: '0.15s',
  normal: '0.3s',
  slow: '0.6s',
  slower: '1s',
} as const;

// Common Spacing
export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
} as const;

// Border Radius
export const BORDER_RADIUS = {
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '20px',
  full: '50%',
} as const;

// Box Shadows
export const SHADOWS = {
  sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
  md: '0 4px 12px rgba(0, 0, 0, 0.1)',
  lg: '0 8px 25px rgba(0, 0, 0, 0.15)',
  xl: '0 20px 40px rgba(0, 0, 0, 0.1)',
} as const;

// Font Weights
export const FONT_WEIGHTS = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

// Font Sizes
export const FONT_SIZES = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
} as const;

// API Configuration
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  timeout: 10000,
  retryAttempts: 3,
  retryDelay: 1000,
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  authToken: 'ganitagya_auth_token',
  userProfile: 'ganitagya_user_profile',
  preferences: 'ganitagya_preferences',
  theme: 'ganitagya_theme',
  language: 'ganitagya_language',
} as const;

// Route Paths
export const ROUTES = {
  home: '/',
  login: '/login',
  signup: '/signup',
  dashboard: '/dashboard',
  profile: '/profile',
  algebra: '/algebra',
  geometry: '/geometry',
  calculus: '/calculus',
  statistics: '/statistics',
  aboutMe: '/about-me',
  contactUs: '/contact-us',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
} as const;

// User Roles
export const USER_ROLES = {
  student: 'student',
  educator: 'educator',
  admin: 'admin',
} as const;

// Math Topics
export const MATH_TOPICS = {
  algebra: 'algebra',
  geometry: 'geometry',
  calculus: 'calculus',
  statistics: 'statistics',
  trigonometry: 'trigonometry',
  probability: 'probability',
} as const;

// Form Validation
export const VALIDATION = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    message: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character',
  },
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    message: 'Name must contain only letters and spaces',
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  network: 'Network error. Please check your connection.',
  unauthorized: 'Session expired. Please log in again.',
  forbidden: 'Access denied. You do not have permission.',
  notFound: 'Resource not found.',
  serverError: 'Server error. Please try again later.',
  validation: 'Please check your input and try again.',
  unknown: 'An unexpected error occurred.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  login: 'Successfully logged in!',
  signup: 'Account created successfully!',
  logout: 'Successfully logged out!',
  profileUpdate: 'Profile updated successfully!',
  passwordReset: 'Password reset email sent!',
  passwordChange: 'Password changed successfully!',
} as const;
