// Set test environment
process.env.NODE_ENV = 'test';

// Set test-specific environment variables
process.env.JWT_SECRET = 'test-secret-key';
process.env.FRONTEND_URL = 'http://localhost:3000';

// Increase timeout for async operations
jest.setTimeout(10000);

// Global test setup
beforeAll(() => {
  // Any global setup can go here
});

// Global test cleanup
afterAll(() => {
  // Any global cleanup can go here
});
