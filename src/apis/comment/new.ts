import express, { Request, Response } from "express";
import { body } from "express-validator";
import { NotFoundError, validateRequest } from "@drparadox/common";
import { Blog } from "../../model/blog";
import { Comment } from "../../model/comment";

const router = express.Router();

router.post(
  "/api/comment",
  [
    body("blogId").not().isEmpty().withMessage("blogid should be empty"),
    body("body").not().isEmpty().withMessage("body should be empty"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { blogId, body } = req.body;
    // console.log("blogId, body", blogId, body);

    const blog = await Blog.findById(blogId);

    if (!blog) {
      throw new NotFoundError();
    }

    const comment = Comment.build({
      blogId,
      body,
    });
    await comment.save();

    res.status(201).send(comment);
  }
);

export { router as createcomment };
