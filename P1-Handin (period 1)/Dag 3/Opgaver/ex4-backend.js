const fetch = require("node-fetch");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").Server(app);
const port = 3000;
const helmet = require("helmet");

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  next();
});

//pre-flight requests
app.options("*", function (req, res) {
  res.send(200);
});

server.listen(port, (err) => {
  if (err) {
    throw err;
  }
  /* eslint-disable no-console */
  console.log("Node Endpoints working :)");
});

app.get("/api/albumthreewords", async (req, res) => {
  try {
    const albums = await getAlbums();
    res.json(albums);
    res.end();
  } catch (err) {
    res.json(err);
  }
});

app.get("/api/:words", async (req, res) => {
  try {
    const words = req.params.words;
    const albums = await getAlbums(words);
    res.json(albums);
    res.end();
  } catch (err) {
    res.json(err);
  }
});

module.exports = server;

const getAlbums = async (words) => {
  let url1 = "https://jsonplaceholder.typicode.com/photos?albumId=1";
  let url2 = "https://jsonplaceholder.typicode.com/photos?albumId=3";
  let url3 = "https://jsonplaceholder.typicode.com/photos?albumId=5";
  let url4 = "https://jsonplaceholder.typicode.com/photos?albumId=7";
  let url5 = "https://jsonplaceholder.typicode.com/photos?albumId=9";

  const urls = [url1, url2, url3, url4, url5];
  const promises = [];

  if (typeof words === "undefined") {
    words = 4;
  }

  for (let i = 0; i < urls.length; i++) {
    const p = fetch(urls[i]).then((res) => res.json());
    promises.push(p);
  }
  const all = await Promise.all(promises).then((arrayOfArrays) => {
    return [].concat.apply([], arrayOfArrays);
  });
  const filtered = all.filter(
    (album) => album.title.split(" ").length == words
  );

  return filtered;
};

module.exports = getAlbums;
