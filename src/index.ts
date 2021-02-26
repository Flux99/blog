import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  console.log("Starting Up...");

  console.log("jwt", process.env.JWT_KEY);

  // if (!process.env.JWT_KEY) {
  //   throw new Error("JWT_KEY must be defined");
  // }

  try {
    await mongoose.connect("mongodb://mongo:27017/blog", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("App Listening on port 3000  !!!!!!!!");
  });
};

start();
