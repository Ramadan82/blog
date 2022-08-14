import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";

//db password = cLktWdo9CTG26mbX
//db username = Digilutions
//dbUrl = mongodb+srv://Digilutions:<password>@cluster0.hfaqocw.mongodb.net/?retryWrites=true&w=majority
const app = express();
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/users", userRouter);

const MONGODB_URL =
  "mongodb+srv://Digilutions:cLktWdo9CTG26mbX@cluster0.hfaqocw.mongodb.net/blog_db?retryWrites=true&w=majority";

const port = 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() =>
    app.listen(port, () => console.log(`server listening on port ${port}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
