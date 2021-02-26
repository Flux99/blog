import request from "supertest";
import { app } from "../../../app";
import mongoose from "mongoose";
//const response = await request(app).post("/api/blog").send({});

// expect(response.status).not.toEqual(404);
it("return a 404 if the id does not exist ", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/blog/${id}`)
    .send({ title: "aacasc", story: "wdawda" })
    .expect(404);
});

it("return a 400 if the user provides an invalid title or story ", async () => {
  const response = await request(app)
    .post("/api/blog")
    .send({ title: "aacasc", story: "wdawda" });
  // console.log("response", response.body.id);

  await request(app)
    .put(`/api/blog/${response.body.id}`)
    .send({ title: "", story: "svsv" })
    .expect(400);

  await request(app)
    .put(`/api/blog/${response.body.id}`)
    .send({ title: "khkkf", story: "" })
    .expect(400);
});

it("updates a ticket", async () => {
  const response = await request(app)
    .post("/api/blog")
    .send({ title: "sdsdvcs", story: "sdvdssd" });
  // console.log("response", response.body.id);

  await request(app)
    .put(`/api/blog/${response.body.id}`)
    .send({ title: "new", story: "ascasc" })
    .expect(200);

  const blogResponse = await request(app)
    .get(`/api/blog/${response.body.id}`)
    .send();

  expect(blogResponse.body.title).toEqual("new");
  expect(blogResponse.body.story).toEqual("ascasc");
});
