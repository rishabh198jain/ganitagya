// Request validation middleware
const { body, param, query, validationResult } = require('express-validator');

// Handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg,
        value: error.value
      }))
    });
  }
  
  next();
};

// User registration validation
const validateUserRegistration = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email is required'),
  
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('role')
    .optional()
    .isIn(['student', 'teacher', 'admin'])
    .withMessage('Role must be student, teacher, or admin'),
  
  handleValidationErrors
];

// User login validation
const validateUserLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email is required'),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  
  body('userType')
    .optional()
    .isIn(['student', 'teacher', 'admin'])
    .withMessage('User type must be student, teacher, or admin'),
  
  handleValidationErrors
];

// Course validation
const validateCourse = [
  body('title')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Course title must be between 5 and 200 characters'),
  
  body('description')
    .trim()
    .isLength({ min: 20, max: 2000 })
    .withMessage('Course description must be between 20 and 2000 characters'),
  
  body('difficulty')
    .isIn(['beginner', 'intermediate', 'advanced'])
    .withMessage('Difficulty must be beginner, intermediate, or advanced'),
  
  body('category')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Category must be between 2 and 50 characters'),
  
  body('price')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  
  body('duration')
    .optional()
    .isLength({ min: 3, max: 50 })
    .withMessage('Duration must be between 3 and 50 characters'),
  
  body('prerequisites')
    .optional()
    .isArray()
    .withMessage('Prerequisites must be an array'),
  
  body('learningOutcomes')
    .optional()
    .isArray()
    .withMessage('Learning outcomes must be an array'),
  
  body('lessons')
    .optional()
    .isArray()
    .withMessage('Lessons must be an array'),
  
  body('lessons.*.title')
    .optional()
    .trim()
    .isLength({ min: 3, max: 200 })
    .withMessage('Lesson title must be between 3 and 200 characters'),
  
  body('lessons.*.content')
    .optional()
    .trim()
    .isLength({ min: 10 })
    .withMessage('Lesson content must be at least 10 characters'),
  
  handleValidationErrors
];

// Course enrollment validation
const validateEnrollment = [
  param('id')
    .isMongoId()
    .withMessage('Valid course ID is required'),
  
  handleValidationErrors
];

// AI tutor request validation
const validateAITutorRequest = [
  body('question')
    .trim()
    .isLength({ min: 5, max: 1000 })
    .withMessage('Question must be between 5 and 1000 characters'),
  
  body('context')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Context must be less than 500 characters'),
  
  body('session_id')
    .optional()
    .isUUID()
    .withMessage('Session ID must be a valid UUID'),
  
  handleValidationErrors
];

// Course generation validation
const validateCourseGeneration = [
  body('topic')
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage('Topic must be between 3 and 100 characters'),
  
  body('difficulty')
    .isIn(['beginner', 'intermediate', 'advanced'])
    .withMessage('Difficulty must be beginner, intermediate, or advanced'),
  
  body('targetAudience')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Target audience must be between 5 and 100 characters'),
  
  body('duration')
    .optional()
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage('Duration must be between 3 and 50 characters'),
  
  body('includeExercises')
    .optional()
    .isBoolean()
    .withMessage('Include exercises must be a boolean'),
  
  body('includeVideos')
    .optional()
    .isBoolean()
    .withMessage('Include videos must be a boolean'),
  
  handleValidationErrors
];

// User profile update validation
const validateProfileUpdate = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .optional()
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email is required'),
  
  body('avatar')
    .optional()
    .isLength({ min: 1, max: 10 })
    .withMessage('Avatar must be between 1 and 10 characters'),
  
  handleValidationErrors
];

// Password change validation
const validatePasswordChange = [
  body('currentPassword')
    .notEmpty()
    .withMessage('Current password is required'),
  
  body('newPassword')
    .isLength({ min: 8 })
    .withMessage('New password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage('New password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  
  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error('Password confirmation does not match');
      }
      return true;
    }),
  
  handleValidationErrors
];

// Pagination validation
const validatePagination = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  
  query('sort')
    .optional()
    .isIn(['created_at', 'updated_at', 'title', 'price', 'difficulty'])
    .withMessage('Invalid sort field'),
  
  query('order')
    .optional()
    .isIn(['asc', 'desc'])
    .withMessage('Order must be asc or desc'),
  
  handleValidationErrors
];

// Search validation
const validateSearch = [
  query('search')
    .optional()
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Search query must be between 1 and 100 characters'),
  
  query('category')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Category must be between 2 and 50 characters'),
  
  query('difficulty')
    .optional()
    .isIn(['beginner', 'intermediate', 'advanced'])
    .withMessage('Difficulty must be beginner, intermediate, or advanced'),
  
  handleValidationErrors
];

// Generic ID validation
const validateId = (paramName = 'id') => [
  param(paramName)
    .isMongoId()
    .withMessage(`Valid ${paramName} is required`),
  
  handleValidationErrors
];

// UUID validation
const validateUUID = (paramName = 'id') => [
  param(paramName)
    .isUUID()
    .withMessage(`Valid ${paramName} is required`),
  
  handleValidationErrors
];

module.exports = {
  validateUserRegistration,
  validateUserLogin,
  validateCourse,
  validateEnrollment,
  validateAITutorRequest,
  validateCourseGeneration,
  validateProfileUpdate,
  validatePasswordChange,
  validatePagination,
  validateSearch,
  validateId,
  validateUUID,
  handleValidationErrors
};
