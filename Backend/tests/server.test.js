import request from "supertest";
import app from "../app.js";

describe("LankaTransit API", () => {

    test("GET / should return backend running message", async () => {

        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.text).toBe(
            "LankaTransit Backend is running!"
        );
    });


    test("POST /api/auth/register should reject missing fields", async () => {

        const response = await request(app)
            .post("/api/auth/register")
            .send({});

        expect(response.statusCode).toBe(400);

        expect(response.body.message).toBe(
            "Please provide name, email and password"
        );
    });


    test("POST /api/auth/login should reject missing fields", async () => {

        const response = await request(app)
            .post("/api/auth/login")
            .send({});

        expect(response.statusCode).toBe(400);

        expect(response.body.message).toBe(
            "Please provide email and password"
        );
    });


    test("GET /api/auth/profile should reject request without token", async () => {

        const response = await request(app)
            .get("/api/auth/profile");

        expect(response.statusCode).toBe(401);

        expect(response.body.message).toBe(
            "No token provided"
        );
    });

});