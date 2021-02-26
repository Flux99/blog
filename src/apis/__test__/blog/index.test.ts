import request from "supertest";
import { app } from "../../../app";

it("get a list of tickets ", async () => {
  // const id = new mongoose.Types.ObjectId().toHexString();

  await request(app)
    .post("/api/blog")
    .send({ title: "My First Blog", story: "xyz.." });
  await request(app)
    .post("/api/blog")
    .send({ title: "My Second Blog", story: "awdad.." });

  const response = await request(app).get("/api/blogs").send().expect(200);

  expect(response.body.length).toEqual(2);
});
