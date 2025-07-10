// Application constants and configuration
export const APP_CONFIG = {
  name: 'Ganitagya',
  version: '1.0.0',
  description: 'Mathematics Education Platform',
  author: 'Dr. Ganitagya',
  email: 'info@ganitagya.com',
  website: 'https://ganitagya.com'
} as const;

export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    signup: '/api/auth/signup',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password'
  },
  users: {
    profile: '/api/users/profile',
    update: '/api/users/update',
    delete: '/api/users/delete'
  },
  courses: {
    list: '/api/courses',
    details: '/api/courses/:id',
    enroll: '/api/courses/:id/enroll',
    progress: '/api/courses/:id/progress'
  },
  payments: {
    plans: '/api/payments/plans',
    subscribe: '/api/payments/subscribe',
    cancel: '/api/payments/cancel',
    history: '/api/payments/history'
  }
} as const;

export const STORAGE_KEYS = {
  authToken: 'authToken',
  refreshToken: 'refreshToken',
  userProfile: 'userProfile',
  preferences: 'preferences',
  theme: 'theme',
  language: 'language'
} as const;

export const ROUTES = {
  home: '/',
  about: '/about-me',
  profile: '/profile',
  contact: '/contact',
  auth: '/auth',
  forgotPassword: '/forgot-password',
  dashboard: {
    student: '/dashboard',
    educator: '/teacher/dashboard',
    admin: '/admin/dashboard'
  },
  pricing: '/pricing'
} as const;

export const USER_ROLES = {
  student: 'student',
  teacher: 'teacher',
  admin: 'admin'
} as const;

export const SUBSCRIPTION_PLANS = {
  free: 'free',
  premium: 'premium',
  lifetime: 'lifetime'
} as const;

export const COURSE_LEVELS = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced'
} as const;

export const PAYMENT_STATUS = {
  pending: 'pending',
  completed: 'completed',
  failed: 'failed',
  cancelled: 'cancelled'
} as const;

export const NOTIFICATION_TYPES = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
} as const;

export const BREAKPOINTS = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
} as const;

export const COLORS = {
  primary: {
    50: '#f0f4ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81'
  },
  secondary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75'
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d'
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d'
  }
} as const;

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500
} as const;

export const Z_INDEX = {
  dropdown: 1000,
  modal: 1050,
  tooltip: 1070,
  toast: 1080
} as const;

export const REGEX_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
} as const;

export const DEFAULT_PAGINATION = {
  page: 1,
  limit: 10,
  maxLimit: 100
} as const;

export const FILE_UPLOAD = {
  maxSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.pdf']
} as const;
