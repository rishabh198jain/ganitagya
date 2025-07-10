// API configuration and utilities for Ganitagya frontend

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001/api";

// API client class
class ApiClient {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem("authToken");
  }

  // Set authentication token
  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem("authToken", token);
    } else {
      localStorage.removeItem("authToken");
    }
  }

  // Get authentication headers
  getHeaders() {
    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    return headers;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || `HTTP error! status: ${response.status}`
        );
      }

      return data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // GET request
  async get(endpoint) {
    return this.request(endpoint, { method: "GET" });
  }

  // POST request
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // PUT request
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, { method: "DELETE" });
  }
}

// Create API client instance
const apiClient = new ApiClient();

// Authentication API methods
export const authAPI = {
  // Register new user
  register: async (userData) => {
    try {
      const response = await apiClient.post("/auth/register", userData);
      if (response.success && response.data.token) {
        apiClient.setToken(response.data.token);
      }
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message || "Registration failed",
      };
    }
  },

  // Login user
  login: async (email, password, userType) => {
    try {
      const response = await apiClient.post("/auth/login", {
        email,
        password,
        userType,
      });
      if (response.success && response.data.token) {
        apiClient.setToken(response.data.token);
      }
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message || "Login failed",
      };
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      return await apiClient.get("/auth/me");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to get user data",
      };
    }
  },

  // Update user
  updateUser: async (userData) => {
    try {
      return await apiClient.put("/auth/me", userData);
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to update user",
      };
    }
  },

  // Logout user
  logout: async () => {
    try {
      const response = await apiClient.post("/auth/logout");
      apiClient.setToken(null);
      return response;
    } catch (error) {
      // Even if the API call fails, clear local token
      apiClient.setToken(null);
      return {
        success: true,
        message: "Logged out successfully",
      };
    }
  },
};

// User management API methods (admin only)
export const userAPI = {
  // Get all users
  getAllUsers: async () => {
    try {
      return await apiClient.get("/users");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to get users",
      };
    }
  },
};

// Health check API
export const healthAPI = {
  // Check API health
  check: async () => {
    try {
      return await apiClient.get("/health");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Health check failed",
      };
    }
  },
};

// Utility functions
export const apiUtils = {
  // Check if API is available
  isApiAvailable: async () => {
    try {
      const response = await healthAPI.check();
      return response.success;
    } catch (error) {
      return false;
    }
  },

  // Get API base URL
  getBaseURL: () => API_BASE_URL,

  // Set API token manually
  setToken: (token) => {
    apiClient.setToken(token);
  },

  // Get current token
  getToken: () => {
    return apiClient.token;
  },

  // Clear token
  clearToken: () => {
    apiClient.setToken(null);
  },
};

// Error handling utilities
export const apiErrors = {
  // Handle common API errors
  handleError: (error) => {
    if (error.message.includes("401")) {
      // Unauthorized - clear token and redirect to login
      apiUtils.clearToken();
      window.location.href = "/login";
      return "Session expired. Please log in again.";
    }

    if (error.message.includes("403")) {
      return "Access denied. You do not have permission to perform this action.";
    }

    if (error.message.includes("404")) {
      return "Resource not found.";
    }

    if (error.message.includes("429")) {
      return "Too many requests. Please try again later.";
    }

    if (error.message.includes("500")) {
      return "Server error. Please try again later.";
    }

    return error.message || "An unexpected error occurred.";
  },
};

// Content API methods
export const contentAPI = {
  // Get all math topics
  getTopics: async () => {
    try {
      return await apiClient.get("/topics");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch topics",
      };
    }
  },

  // Get specific topic by ID
  getTopic: async (topicId) => {
    try {
      return await apiClient.get(`/topics/${topicId}`);
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch topic",
      };
    }
  },

  // Search content
  searchContent: async (query, filters = {}) => {
    try {
      const params = new URLSearchParams({ q: query, ...filters });
      return await apiClient.get(`/content/search?${params}`);
    } catch (error) {
      return {
        success: false,
        message: error.message || "Search failed",
      };
    }
  },

  // Get exercises
  getExercises: async (topicId = null) => {
    try {
      const endpoint = topicId ? `/exercises/${topicId}` : "/exercises";
      return await apiClient.get(endpoint);
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch exercises",
      };
    }
  },
};

// Course API methods
export const courseAPI = {
  // Get all courses
  getCourses: async () => {
    try {
      return await apiClient.get("/courses");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch courses",
      };
    }
  },

  // Get specific course by ID
  getCourse: async (courseId) => {
    try {
      return await apiClient.get(`/courses/${courseId}`);
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch course",
      };
    }
  },

  // Get course modules
  getCourseModules: async (courseId) => {
    try {
      return await apiClient.get(`/courses/${courseId}/modules`);
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch course modules",
      };
    }
  },
};

// Pricing API methods
export const pricingAPI = {
  // Get all pricing plans
  getPlans: async () => {
    try {
      return await apiClient.get("/pricing/plans");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch pricing plans",
      };
    }
  },

  // Get specific pricing plan
  getPlan: async (planId) => {
    try {
      return await apiClient.get(`/pricing/plans/${planId}`);
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch pricing plan",
      };
    }
  },
};

// Company API methods
export const companyAPI = {
  // Get company information
  getInfo: async () => {
    try {
      return await apiClient.get("/company/info");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch company info",
      };
    }
  },

  // Get contact information
  getContact: async () => {
    try {
      return await apiClient.get("/company/contact");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch contact info",
      };
    }
  },

  // Get social media links
  getSocialMedia: async () => {
    try {
      return await apiClient.get("/company/social");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch social media links",
      };
    }
  },
};

// Navigation API methods
export const navigationAPI = {
  // Get navigation structure
  getNavigation: async () => {
    try {
      return await apiClient.get("/navigation");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch navigation",
      };
    }
  },

  // Get main menu
  getMainMenu: async () => {
    try {
      return await apiClient.get("/navigation/menu");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch main menu",
      };
    }
  },

  // Get footer links
  getFooterLinks: async () => {
    try {
      return await apiClient.get("/navigation/footer");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch footer links",
      };
    }
  },

  // Get user role menu
  getUserMenu: async (role) => {
    try {
      return await apiClient.get(`/navigation/user/${role}`);
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch user menu",
      };
    }
  },
};

// Legal API methods
export const legalAPI = {
  // Get all legal documents
  getDocuments: async () => {
    try {
      return await apiClient.get("/legal/documents");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch legal documents",
      };
    }
  },

  // Get privacy policy
  getPrivacyPolicy: async () => {
    try {
      return await apiClient.get("/legal/privacy");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch privacy policy",
      };
    }
  },

  // Get terms and conditions
  getTermsConditions: async () => {
    try {
      return await apiClient.get("/legal/terms");
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to fetch terms and conditions",
      };
    }
  },
};

// Export the API client for direct use if needed
export { apiClient };

// Default export
export default {
  auth: authAPI,
  users: userAPI,
  health: healthAPI,
  content: contentAPI,
  courses: courseAPI,
  pricing: pricingAPI,
  company: companyAPI,
  navigation: navigationAPI,
  legal: legalAPI,
  utils: apiUtils,
  errors: apiErrors,
  client: apiClient,
};
