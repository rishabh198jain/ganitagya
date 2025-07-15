const request = require("supertest");
const app = require("../app");

describe("User Management API", () => {
  let adminToken;
  let studentToken;

  beforeAll(async () => {
    // Login as admin to get admin token
    const adminResponse = await request(app).post("/api/auth/login").send({
      email: "admin@ganitagya.com",
      password: "password123",
    });

    if (adminResponse.body.success && adminResponse.body.data) {
      adminToken = adminResponse.body.data.token;
    } else {
      console.error("Admin login failed:", adminResponse.body);
      throw new Error("Failed to login as admin");
    }

    // Register and login as student
    await request(app).post("/api/auth/register").send({
      name: "Student User",
      email: "student.test@example.com",
      password: "password123",
      role: "student",
    });

    const studentResponse = await request(app).post("/api/auth/login").send({
      email: "student.test@example.com",
      password: "password123",
    });

    if (studentResponse.body.success && studentResponse.body.data) {
      studentToken = studentResponse.body.data.token;
    } else {
      console.error("Student login failed:", studentResponse.body);
      throw new Error("Failed to login as student");
    }
  });

  describe("Get All Users (Admin Only)", () => {
    test("should get all users with admin token", async () => {
      const response = await request(app)
        .get("/api/users")
        .set("Authorization", `Bearer ${adminToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.users).toBeInstanceOf(Array);
      expect(response.body.data.total).toBeGreaterThan(0);

      // Check that passwords are not included
      response.body.data.users.forEach((user) => {
        expect(user).not.toHaveProperty("password");
      });
    });

    test("should reject non-admin access", async () => {
      const response = await request(app)
        .get("/api/users")
        .set("Authorization", `Bearer ${studentToken}`)
        .expect(403);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Access denied. Admin role required.");
    });

    test("should reject request without token", async () => {
      const response = await request(app).get("/api/users").expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Access denied. No token provided.");
    });
  });

  describe("Update User Profile", () => {
    test("should update user profile with valid data", async () => {
      const updateData = {
        name: "Updated Student Name",
        subscription: "premium",
      };

      const response = await request(app)
        .put("/api/auth/me")
        .set("Authorization", `Bearer ${studentToken}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe("User updated successfully");
      expect(response.body.data.user.name).toBe(updateData.name);
      expect(response.body.data.user.subscription).toBe(
        updateData.subscription
      );
    });

    test("should reject update without token", async () => {
      const response = await request(app)
        .put("/api/auth/me")
        .send({ name: "New Name" })
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Access denied. No token provided.");
    });
  });
});
