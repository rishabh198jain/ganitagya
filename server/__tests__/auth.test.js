const request = require("supertest");
const app = require("../app");

describe("Authentication API", () => {
  let authToken;
  const testUser = {
    name: "Test User",
    email: `test${Date.now()}@example.com`, // Unique email to avoid conflicts
    password: "password123",
    role: "student",
  };

  describe("Registration", () => {
    test("should register a new user", async () => {
      const response = await request(app)
        .post("/api/auth/register")
        .send(testUser);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("User registered successfully");
      expect(response.body.data.user).toHaveProperty("id");
      expect(response.body.data.user.email).toBe(testUser.email);
      expect(response.body.data.user.role).toBe(testUser.role);
      expect(response.body.data.user).not.toHaveProperty("password");
      expect(response.body.data.token).toBeDefined();

      // Save token for subsequent tests
      authToken = response.body.data.token;
    });

    test("should reject registration with missing fields", async () => {
      const response = await request(app)
        .post("/api/auth/register")
        .send({ email: "incomplete@example.com" })
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe(
        "Name, email, and password are required"
      );
    });

    test("should reject registration with invalid email", async () => {
      const response = await request(app)
        .post("/api/auth/register")
        .send({
          name: "Invalid Email User",
          email: "invalid-email",
          password: "password123",
        })
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe(
        "Please provide a valid email address"
      );
    });

    test("should reject registration with short password", async () => {
      const response = await request(app)
        .post("/api/auth/register")
        .send({
          name: "Short Password User",
          email: "short@example.com",
          password: "12345",
        })
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe(
        "Password must be at least 6 characters long"
      );
    });

    test("should reject registration with duplicate email", async () => {
      // Try to register the same user again
      const response = await request(app)
        .post("/api/auth/register")
        .send(testUser)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("User with this email already exists");
    });
  });

  describe("Login", () => {
    test("should login with valid credentials", async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({
          email: testUser.email,
          password: testUser.password,
        })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("Login successful");
      expect(response.body.data.user.email).toBe(testUser.email);
      expect(response.body.data.user).not.toHaveProperty("password");
      expect(response.body.data.token).toBeDefined();

      // Save token for subsequent tests
      authToken = response.body.data.token;
    });

    test("should reject login with invalid email", async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({
          email: "nonexistent@example.com",
          password: "password123",
        })
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Invalid email or password");
    });

    test("should reject login with invalid password", async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({
          email: testUser.email,
          password: "wrongpassword",
        })
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Invalid email or password");
    });
  });

  describe("Get Current User", () => {
    test("should get current user with valid token", async () => {
      const response = await request(app)
        .get("/api/auth/me")
        .set("Authorization", `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.user.email).toBe(testUser.email);
      expect(response.body.data.user).not.toHaveProperty("password");
    });

    test("should reject request without token", async () => {
      const response = await request(app).get("/api/auth/me").expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Access denied. No token provided.");
    });
  });

  describe("Logout", () => {
    test("should logout successfully", async () => {
      const response = await request(app)
        .post("/api/auth/logout")
        .set("Authorization", `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("Logged out successfully");
    });
  });
});
