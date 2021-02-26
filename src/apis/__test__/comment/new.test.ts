import request from "supertest";
import { app } from "../../../app";
import mongoose from "mongoose";

it("create comment api listening", async () => {
  const response = await request(app).post("/api/comment").send({});

  expect(response.status).not.toEqual(404);
});

it("gives error if blogId is invalid ", async () => {
  await request(app)
    .post("/api/comment")
    .send({ blogId: "", body: "Good" })
    .expect(400);

  await request(app).post("/api/comment").send({ body: "Good" }).expect(400);
});

it("gives error if body is invalid ", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .post("/api/comment")
    .send({ blogId: id, body: "" })
    .expect(400);

  await request(app).post("/api/comment").send({ blogId: id }).expect(400);
});

it("creates a comment ", async () => {
  //const id = new mongoose.Types.ObjectId().toHexString();

  const response = await request(app)
    .post("/api/blog")
    .send({ title: "abc", story: "xyz" });
  // console.log("response.body[0]", Object.keys(response.body));
  // console.log("response.body", response.body.id);

  await request(app)
    .post("/api/comment")
    .send({ blogId: response.body.id, body: "very Good" })
    .expect(201);
});
