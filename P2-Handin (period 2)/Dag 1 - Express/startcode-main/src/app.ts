import express from "express";
import dotenv from "dotenv";
import path from "path"
dotenv.config()
const app = express()

app.use(express.static(path.join(process.cwd(), "public")))

app.get("/demo", (req, res) => {
  res.send("Server is up");
})


import facade from "./facades/DummyDB-Facade"

app.get("/api/friends/all", (req, res) => {
	const friends = facade.getAllFriends();
	res.json(friends);
})

export default app;

