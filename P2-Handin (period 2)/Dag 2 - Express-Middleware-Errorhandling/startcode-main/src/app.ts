import express from "express";
import dotenv from "dotenv";
import path from "path"
dotenv.config()
const app = express()

app.use(express.static(path.join(process.cwd(), "public")))


import authMiddleware from "./middleware/basic-auth"
app.use("/", authMiddleware)


app.get("/demo", (req, res) => {
  res.send("Server is up");
})

app.get("/me", (req: any, res) => {
  const user = req.credentials;
  console.log(user)
  res.json(user);
})


export default app;

