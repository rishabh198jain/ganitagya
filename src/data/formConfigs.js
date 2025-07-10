// Form configuration data to eliminate repetitive HTML

export const contactFormFields = [
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
    validation: {
      minLength: 2,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Name must contain only letters and spaces'
    }
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email address',
    required: true,
    validation: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    }
  },
  {
    name: 'subject',
    type: 'text',
    label: 'Subject',
    placeholder: 'What is this about?',
    required: true,
    validation: {
      minLength: 5,
      message: 'Subject must be at least 5 characters long'
    }
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'Message',
    placeholder: 'Tell us more about your inquiry...',
    required: true,
    rows: 6,
    validation: {
      minLength: 10,
      message: 'Message must be at least 10 characters long'
    }
  }
];

export const loginFormFields = [
  {
    name: 'email',
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email',
    required: true,
    validation: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    }
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    required: true,
    showPasswordToggle: true,
    validation: {
      minLength: 6,
      message: 'Password must be at least 6 characters long'
    }
  },
  {
    name: 'userType',
    type: 'radio',
    label: 'User Type',
    required: true,
    options: [
      { value: 'student', label: 'Student', icon: '👨‍🎓' },
      { value: 'teacher', label: 'Educator', icon: '👩‍🏫' },
      { value: 'admin', label: 'Admin', icon: '👨‍💼' }
    ]
  }
];

export const signupFormFields = [
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
    validation: {
      minLength: 2,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Name must contain only letters and spaces'
    }
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email',
    required: true,
    validation: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    }
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Create a password',
    required: true,
    showPasswordToggle: true,
    validation: {
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      message: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
    }
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    placeholder: 'Confirm your password',
    required: true,
    showPasswordToggle: true,
    validation: {
      match: 'password',
      message: 'Passwords do not match'
    }
  },
  {
    name: 'role',
    type: 'radio',
    label: 'User Role',
    required: true,
    options: [
      { value: 'student', label: 'Student', icon: '👨‍🎓' },
      { value: 'teacher', label: 'Educator', icon: '👩‍🏫' },
      { value: 'admin', label: 'Admin', icon: '👨‍💼' }
    ]
  },
  {
    name: 'agreeToTerms',
    type: 'checkbox',
    label: 'I agree to the Terms of Service and Privacy Policy',
    required: true,
    validation: {
      required: true,
      message: 'You must agree to the terms and conditions'
    }
  }
];

export const demoCredentials = [
  { 
    type: 'Admin', 
    email: 'admin@ganitagya.com', 
    password: 'password123',
    userType: 'admin',
    description: 'Full access to all features'
  },
  { 
    type: 'Teacher', 
    email: 'teacher@ganitagya.com', 
    password: 'password123',
    userType: 'teacher',
    description: 'Create and manage courses'
  },
  { 
    type: 'Student', 
    email: 'student@example.com', 
    password: 'password123',
    userType: 'student',
    description: 'Access learning materials'
  }
];

export const subjectOptions = [
  { value: '', label: 'Select a subject...' },
  { value: 'algebra', label: 'Algebra' },
  { value: 'geometry', label: 'Geometry' },
  { value: 'calculus', label: 'Calculus' },
  { value: 'statistics', label: 'Statistics' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'feedback', label: 'Feedback' }
];

// Validation helper functions
export const validateField = (field, value, formData = {}) => {
  const { validation } = field;
  if (!validation) return '';

  // Required validation
  if (field.required && (!value || value.toString().trim() === '')) {
    return `${field.label} is required`;
  }

  // Skip other validations if field is empty and not required
  if (!value || value.toString().trim() === '') return '';

  // Pattern validation
  if (validation.pattern && !validation.pattern.test(value)) {
    return validation.message || `Invalid ${field.label.toLowerCase()}`;
  }

  // Min length validation
  if (validation.minLength && value.length < validation.minLength) {
    return validation.message || `${field.label} must be at least ${validation.minLength} characters`;
  }

  // Max length validation
  if (validation.maxLength && value.length > validation.maxLength) {
    return validation.message || `${field.label} must be no more than ${validation.maxLength} characters`;
  }

  // Match validation (for confirm password)
  if (validation.match && formData[validation.match] !== value) {
    return validation.message || `${field.label} does not match`;
  }

  // Checkbox required validation
  if (field.type === 'checkbox' && validation.required && !value) {
    return validation.message || `${field.label} is required`;
  }

  return '';
};

// Form validation helper
export const validateForm = (fields, formData) => {
  const errors = {};
  
  fields.forEach(field => {
    const error = validateField(field, formData[field.name], formData);
    if (error) {
      errors[field.name] = error;
    }
  });

  return errors;
};
