const osInfo = require("./osData");
const DosDetector = require("./dosDetector");

let dos = new DosDetector(1);

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    dos.addUrl("www.google.dk");
  }, 0);
}

console.log(osInfo);
