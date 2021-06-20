import express from "express";
import dotenv from "dotenv";
import path from "path"
import friendRoute from "./routes/friendRoutesAuth";
import { ApiError } from "./error/errors";
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema';


import myCors from "./middleware/myCors";
const cors = require("cors");

dotenv.config()
const app = express()

app.use(express.json())

//Cors
app.use(cors());

app.use(express.static(path.join(process.cwd(), "public")))

//Routes
app.use("/api/friends", friendRoute);


//GRAPHIQL EDITOR
app.use('/graphql', graphqlHTTP({
   schema: schema,
   graphiql: true,
}));

//404 handlers for api requests
app.use("/api", (req, res, next) => {
  res.status(404).send({
    msg: "Not found",
    error: 404,
  });
});

export default app;

