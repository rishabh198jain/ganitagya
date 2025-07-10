import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI, apiUtils } from '@/utils/api';
import type { User, AuthContextType, SignupData, AuthResponse } from '@/types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    const userData = localStorage.getItem('userData')

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
        // Set token in API client
        apiUtils.setToken(token)
      } catch (err) {
        console.error('Error parsing user data:', err)
        localStorage.removeItem('authToken')
        localStorage.removeItem('userData')
        apiUtils.clearToken()
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password, userType = 'student') => {
    setLoading(true)
    setError(null)

    try {
      // Check if API is available, fallback to mock if not
      const isApiAvailable = await apiUtils.isApiAvailable()

      let response
      if (isApiAvailable) {
        // Use real API
        response = await authAPI.login(email, password, userType)
      } else {
        // Fallback to mock authentication
        response = await mockLogin(email, password, userType)
      }

      if (response.success) {
        const userData = {
          id: response.data.user.id,
          email: response.data.user.email,
          name: response.data.user.name,
          role: response.data.user.role,
          avatar: response.data.user.avatar,
          subscription: response.data.user.subscription
        }

        setUser(userData)
        localStorage.setItem('authToken', response.data.token)
        localStorage.setItem('userData', JSON.stringify(userData))

        return { success: true, user: userData }
      } else {
        throw new Error(response.message)
      }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  const signup = async (userData) => {
    setLoading(true)
    setError(null)

    try {
      // Check if API is available, fallback to mock if not
      const isApiAvailable = await apiUtils.isApiAvailable()

      let response
      if (isApiAvailable) {
        // Use real API
        response = await authAPI.register(userData)
      } else {
        // Fallback to mock registration
        response = await mockSignup(userData)
      }

      if (response.success) {
        const newUser = {
          id: response.data.user.id,
          email: response.data.user.email,
          name: response.data.user.name,
          role: response.data.user.role,
          avatar: response.data.user.avatar,
          subscription: response.data.user.subscription
        }

        setUser(newUser)
        localStorage.setItem('authToken', response.data.token)
        localStorage.setItem('userData', JSON.stringify(newUser))

        return { success: true, user: newUser }
      } else {
        throw new Error(response.message)
      }
    } catch (err) {
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      // Try to logout via API
      await authAPI.logout()
    } catch (error) {
      console.log('API logout failed, clearing local data anyway')
    }

    setUser(null)
    setError(null)
    localStorage.removeItem('authToken')
    localStorage.removeItem('userData')
    apiUtils.clearToken()
  }

  const updateUser = async (updatedData) => {
    try {
      // Check if API is available
      const isApiAvailable = await apiUtils.isApiAvailable()

      if (isApiAvailable) {
        // Use real API
        const response = await authAPI.updateUser(updatedData)
        if (response.success) {
          const updatedUser = { ...user, ...response.data.user }
          setUser(updatedUser)
          localStorage.setItem('userData', JSON.stringify(updatedUser))
          return { success: true, user: updatedUser }
        } else {
          throw new Error(response.message)
        }
      } else {
        // Fallback to local update
        const updatedUser = { ...user, ...updatedData }
        setUser(updatedUser)
        localStorage.setItem('userData', JSON.stringify(updatedUser))
        return { success: true, user: updatedUser }
      }
    } catch (error) {
      setError(error.message)
      return { success: false, error: error.message }
    }
  }

  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
    updateUser,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isEducator: user?.role === 'teacher',
    isStudent: user?.role === 'student'
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Mock authentication functions - replace with actual API calls
const mockLogin = async (email, password, userType) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock user data
  const mockUsers = {
    'admin@ganitagya.com': {
      id: 'admin-1',
      email: 'admin@ganitagya.com',
      name: 'Dr. Ganitagya',
      role: 'admin',
      avatar: '👨‍🏫',
      subscription: 'premium'
    },
    'teacher@ganitagya.com': {
      id: 'teacher-1',
      email: 'teacher@ganitagya.com',
      name: 'Prof. Sarah Wilson',
      role: 'teacher',
      avatar: '👩‍🏫',
      subscription: 'premium'
    },
    'student@example.com': {
      id: 'student-1',
      email: 'student@example.com',
      name: 'John Doe',
      role: 'student',
      avatar: '👨‍🎓',
      subscription: 'free'
    }
  }
  
  if (mockUsers[email] && password === 'password123') {
    return {
      success: true,
      user: mockUsers[email],
      token: 'mock-jwt-token-' + Date.now()
    }
  }
  
  return {
    success: false,
    message: 'Invalid email or password'
  }
}

const mockSignup = async (userData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Check if email already exists (mock check)
  if (userData.email === 'admin@ganitagya.com' || userData.email === 'student@example.com' || userData.email === 'teacher@ganitagya.com') {
    return {
      success: false,
      message: 'Email already exists'
    }
  }

  const getAvatarByRole = (role) => {
    switch (role) {
      case 'admin': return '👨‍🏫'
      case 'teacher': return '👩‍🏫'
      case 'student': return '👨‍🎓'
      default: return '👨‍🎓'
    }
  }

  const newUser = {
    id: 'user-' + Date.now(),
    email: userData.email,
    name: userData.name,
    role: userData.role || 'student',
    avatar: getAvatarByRole(userData.role || 'student'),
    subscription: 'free'
  }
  
  return {
    success: true,
    user: newUser,
    token: 'mock-jwt-token-' + Date.now()
  }
}
