import mongoose from "mongoose";

interface CommentAttrs {
  blogId: string;
  body: string;
}

interface CommentDoc extends mongoose.Document {
  blogId: string;
  body: string;
  userId?: string;
}

interface CommentModel extends mongoose.Model<CommentDoc> {
  build(attrs: CommentAttrs): CommentDoc;
}

const commentScheme = new mongoose.Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

commentScheme.statics.build = (attrs: CommentAttrs) => {
  return new Comment(attrs);
};
const Comment = mongoose.model<CommentDoc, CommentModel>(
  "Comment",
  commentScheme
);

export { Comment };
