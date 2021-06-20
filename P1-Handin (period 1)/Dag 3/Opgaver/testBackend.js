const http = require("http");
const getAlbums = require("./ex4-backend");

const server = http.createServer((req, res) => {
  if (req.url === "/api/test") {
    res.write("<h1>TEST TEST</h1>");
    res.end();
  }
  if (req.url === "/api/albumthreewords") {
    (async () => {
      try {
        const data = await getAlbums();
        res.write(JSON.stringify(data));
      } catch (err) {
        console.log(err);
      } finally {
        res.end();
      }
    })();
  }
});

server.listen(8000);
console.log("Listening on port 8000");
