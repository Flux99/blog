import request from "supertest";
import { app } from "../../../app";
import { Blog } from "../../../model/blog";

it("has a route handler listening to api /blog/ post request", async () => {
  const response = await request(app).post("/api/blog").send({});

  expect(response.status).not.toEqual(404);
});

it("returns error if an invalid title is provide ", async () => {
  await request(app)
    .post("/api/blog")
    .send({ title: "", story: "abc" })
    .expect(400);

  await request(app).post("/api/blog").send({ story: "abc" }).expect(400);
});

it("returns error if an invalid story is provide", async () => {
  await request(app)
    .post("/api/blog")
    .send({ title: "abc", story: "" })
    .expect(400);

  await request(app).post("/api/blog").send({ title: "abc" }).expect(400);
});

it("creates a blog with valid inputs ", async () => {
  let blog = await Blog.find({});
  expect(blog.length).toEqual(0);

  let title = "xyz";
  await request(app)
    .post("/api/blog")
    .send({ title, story: "abc" })
    .expect(201);

  blog = await Blog.find({});
  expect(blog.length).toEqual(1);
  expect(blog[0].title).toEqual(title);
  expect(blog[0].story).toEqual("abc");
});
