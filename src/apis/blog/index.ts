import express, { Request, Response } from "express";
import { NotFoundError } from "@drparadox/common";
import { Blog } from "../../model/blog";

const router = express.Router();

router.get("/api/blogs", async (req: Request, res: Response) => {
  const blogs = await Blog.find({});
  if (!blogs) {
    throw new NotFoundError();
  }
  res.send(blogs);
});

export { router as indexAllBlog };
