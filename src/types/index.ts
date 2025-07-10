// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  avatar: string;
  subscription: 'free' | 'premium' | 'lifetime';
  createdAt?: Date;
  lastLogin?: Date;
}

// Authentication Types
export interface LoginCredentials {
  email: string;
  password: string;
  userType: 'student' | 'teacher' | 'admin';
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'teacher' | 'admin';
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  error?: string;
  message?: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string, userType: string) => Promise<AuthResponse>;
  signup: (userData: SignupData) => Promise<AuthResponse>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => Promise<AuthResponse>;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isEducator: boolean;
  isStudent: boolean;
}

// Course Types
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  progress: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  locked: boolean;
  thumbnail?: string;
  lessons?: number;
  students?: number;
}

// Achievement Types
export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: Date;
}

// Activity Types
export interface Activity {
  id: number;
  action: string;
  subject: string;
  time: string;
  type?: 'course' | 'achievement' | 'lesson';
}

// Statistics Types
export interface StudentStats {
  coursesCompleted: number;
  totalStudyTime: string;
  currentStreak: number;
  studyStreak: number;
  averageScore: number;
  totalStudyTime: string;
}

export interface EducatorStats {
  totalStudents: number;
  activeCourses: number;
  totalLessons: number;
  averageRating: number;
  totalRevenue: number;
  monthlyGrowth: number;
}

export interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  totalCourses: number;
  totalRevenue: number;
  monthlySignups: number;
  conversionRate: number;
}

// Pricing Types
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'year' | 'lifetime';
  features: string[];
  popular?: boolean;
  description: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ForgotPasswordData {
  email: string;
  code?: string;
  newPassword?: string;
  confirmPassword?: string;
}

// Navigation Types
export interface NavLink {
  path: string;
  label: string;
  icon?: string;
}

// Math Data Types
export interface MathTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Mathematician {
  id: string;
  name: string;
  period: string;
  contribution: string;
  image: string;
  description: string;
}

// Social Media Types
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Component Props Types
export interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string | null;
  redirectTo?: string;
}

export interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

// Dashboard Types
export interface DashboardTab {
  id: string;
  label: string;
  icon: string;
}

// Error Types
export interface ValidationErrors {
  [key: string]: string;
}

// Event Types
export interface FormChangeEvent {
  target: {
    name: string;
    value: string;
    type: string;
    checked?: boolean;
  };
}

// Utility Types
export type UserRole = 'student' | 'teacher' | 'admin';
export type SubscriptionType = 'free' | 'premium' | 'lifetime';
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type PricingPeriod = 'month' | 'year' | 'lifetime';
