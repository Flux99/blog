import express, { Request, Response } from "express";
import { Blog } from "../../model/blog";
import { NotFoundError } from "@drparadox/common";

const router = express.Router();

router.get("/api/blog/:id", async (req: Request, res: Response) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    throw new NotFoundError();
  }
  res.send(blog);
});
export { router as showblog };
