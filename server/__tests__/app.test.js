const request = require("supertest");
const app = require("../app");

describe("Ganitagya API Server", () => {
  describe("Health Check", () => {
    test("GET /api/health should return success", async () => {
      const response = await request(app).get("/api/health").expect(200);

      expect(response.body).toEqual({
        success: true,
        message: "Ganitagya API is running!",
        timestamp: expect.any(String),
      });
    });
  });

  describe("404 Handler", () => {
    test("should return 404 for non-existent routes", async () => {
      const response = await request(app)
        .get("/api/non-existent-route")
        .expect(404);

      expect(response.body).toEqual({
        success: false,
        message: "Route not found",
      });
    });
  });

  describe("CORS Configuration", () => {
    test("should include CORS headers", async () => {
      const response = await request(app).get("/api/health").expect(200);

      expect(response.headers["access-control-allow-origin"]).toBeDefined();
    });
  });

  describe("Rate Limiting", () => {
    test("should apply rate limiting headers", async () => {
      const response = await request(app).get("/api/health").expect(200);

      // Rate limiting headers might be named differently depending on version
      const hasRateLimitHeaders =
        response.headers["x-ratelimit-limit"] ||
        response.headers["ratelimit-limit"] ||
        response.headers["x-rate-limit-limit"];

      expect(hasRateLimitHeaders).toBeDefined();
    });
  });
});
