import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError } from "@drparadox/common";
import { createblog } from "./apis/blog/new";
import { showblog } from "./apis/blog/show";
import { indexAllBlog } from "./apis/blog/index";
import { updateBlog } from "./apis/blog/update";
import { createcomment } from "./apis/comment/new";

const app = express();

app.set("trust proxy", true);
app.use(json());
// app.use(
//   cookieSession({
//     signed: false,
//     secure: process.env.NODE_ENV !== "test",
//   })
// );
app.use(createblog);
app.use(showblog);
app.use(indexAllBlog);
app.use(updateBlog);
app.use(createcomment);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
