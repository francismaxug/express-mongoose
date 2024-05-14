import express from "express";
export const app = express();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import connectDB from "./config/db.js";
import handleError from "./middleware/customError.js";
import userRouter from "./routes/api/userRoute.js";
import cors from "cors";
import tourRoute from "./routes/api/tourRoute.js";
connectDB();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/api/v1", userRouter);
app.use("/api/v1", tourRoute);
app.use(handleError);
