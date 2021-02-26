import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "@drparadox/common";
import { Blog } from "../../model/blog";

const router = express.Router();

router.post(
  "/api/blog",
  [
    body("title").not().isEmpty().withMessage("title is required"),
    body("story").not().isEmpty().withMessage("story is required"),
  ],
  validateRequest,

  async (req: Request, res: Response) => {
    const { title, story } = req.body;

    const blog = Blog.build({
      title,
      story,
    });
    await blog.save();
    res.status(201).send(blog);
  }
);

export { router as createblog };
