import request from "supertest";
import { app } from "../../../app";
import mongoose from "mongoose";

it("returns 404 if the ticket is not found ", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await request(app).get(`/api/blog/${id}`).send().expect(404);
});

it("return ticket if the ticket is found ", async () => {
  const title = "abc";
  const story = "xyz";
  const response = await request(app)
    .post("/api/blog")
    .send({ title, story })
    .expect(201);

  const blogResponse = await request(app)
    .get(`/api/blog/${response.body.id}`)
    .send()
    .expect(200);

  expect(blogResponse.body.title).toEqual(title);
  expect(blogResponse.body.story).toEqual(story);
});
