const http = require("http");
const withAsyncAwaitParallel = require("./ex1-d");

const server = http.createServer((req, res) => {
  if (req.url === "/api/securerandoms") {
    (async () => {
      try {
        const data = await withAsyncAwaitParallel();
        res.write(JSON.stringify(data));
      } catch (e) {
        console.log(e);
      } finally {
        res.end();
      }
    })();
  }
  if (req.url === "/api/") {
    res.write(`<h1> TEST </h1>`);
    res.end();
  }
});

server.listen(3000);
