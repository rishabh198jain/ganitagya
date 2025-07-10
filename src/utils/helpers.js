/**
 * Utility functions for the Ganitagya application
 */

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates form data
 * @param {Object} formData - Form data to validate
 * @returns {Object} - Validation errors object
 */
export const validateContactForm = (formData) => {
  const errors = {}

  if (!formData.name?.trim()) {
    errors.name = 'Name is required'
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required'
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!formData.subject?.trim()) {
    errors.subject = 'Subject is required'
  }

  if (!formData.message?.trim()) {
    errors.message = 'Message is required'
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
  }

  return errors
}

/**
 * Formats a number with appropriate suffix (K, M, B)
 * @param {number} num - Number to format
 * @returns {string} - Formatted number string
 */
export const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B'
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of element to scroll to
 * @param {number} offset - Offset from top (default: 80px for header)
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

/**
 * Generate a random mathematical fact or quote
 * @returns {string} - Random mathematical fact
 */
export const getRandomMathFact = () => {
  const facts = [
    "The number π (pi) has been calculated to over 31 trillion decimal places.",
    "Zero is the only number that cannot be represented in Roman numerals.",
    "The word 'mathematics' comes from the Greek word 'mathema' meaning 'knowledge'.",
    "Aryabhata was the first to use zero as a placeholder and in mathematical operations.",
    "The Fibonacci sequence appears frequently in nature, from flower petals to spiral galaxies.",
    "Euler's identity e^(iπ) + 1 = 0 is considered the most beautiful equation in mathematics."
  ]
  
  return facts[Math.floor(Math.random() * facts.length)]
}

/**
 * Check if user prefers dark mode
 * @returns {boolean} - True if dark mode is preferred
 */
export const prefersDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Success status
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy text: ', err)
    return false
  }
}
