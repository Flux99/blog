import mongoose from "mongoose";

interface BlogAttrs {
  title: string;
  story: string;
}

interface BlogDoc extends mongoose.Document {
  title: string;
  story: string;
  userId?: string;
}

interface BlogModel extends mongoose.Model<BlogDoc> {
  build(attrs: BlogAttrs): BlogDoc;
}

const blogScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    story: {
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

blogScheme.statics.build = (attrs: BlogAttrs) => {
  return new Blog(attrs);
};
const Blog = mongoose.model<BlogDoc, BlogModel>("Blog", blogScheme);

export { Blog };
