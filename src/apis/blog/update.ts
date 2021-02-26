import express, { Request, Response } from "express";
import { Blog } from "../../model/blog";
import { body } from "express-validator";
import { NotFoundError, validateRequest } from "@drparadox/common";

const router = express.Router();

router.put(
  "/api/blog/:id",
  [
    body("title").not().isEmpty().withMessage("title should not be Empty"),
    body("story").not().isEmpty().withMessage("story should not be Empty"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const id = req.params.id;
    // console.log("idddd", id);

    const blog = await Blog.findById(id);
    if (!blog) {
      throw new NotFoundError();
    }

    blog.set({
      title: req.body.title,
      story: req.body.story,
    });
    await blog.save();
    res.send(blog).status(200);
  }
);

export { router as updateBlog };
