import request from "supertest";
import app from "../src/app";

jest.mock("@supabase/supabase-js", () => {
  return {
    createClient: jest.fn(() => ({
      from: jest.fn(() => ({
        select: jest.fn().mockResolvedValue({ data: [], error: null }),
      })),
    })),
  };
});

describe("app", () => {
  it("responds with a not found message", async () => {
    const response = await request(app)
      .get("/what-is-this-even")
      .set("Accept", "application/json");

    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toBe("text/html; charset=utf-8");
  });
});

describe("GET /", () => {
  it("responds with a json message", async () => {
    const response = await request(app)
      .get("/")
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual({
      message: "Welcome to the Phasmobusters API",
    });
  });
});
