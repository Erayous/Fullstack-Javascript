import express from "express";
import dotenv from "dotenv";
import path from "path"
import friendRoute from "./routes/friendRoutesAuth";
import { ApiError } from "./error/errors";
import logger, { stream } from "./middleware/logger";
import morgan from "morgan";
const morganFormat = process.env.NODE_ENV == "production" ? "combined" : "dev";

import Cors from "./middleware/Cors";
const cors = require("cors");

dotenv.config()
const app = express()

app.use(express.json())

//Cors
app.use(cors());

app.use(morgan(morganFormat, { stream }));
app.use(express.static(path.join(process.cwd(), "public")))
app.set("logger", logger);

//Routes
app.use("/api/friends", friendRoute);

//404 handlers for api requests
app.use("/api", (req, res, next) => {
  res.status(404).send({
    msg: "Not found",
    error: 404,
  });
});

export default app;

