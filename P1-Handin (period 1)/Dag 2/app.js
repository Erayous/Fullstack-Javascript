const Logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events"); //Class
const logger = new Logger();

let pathObj = path.parse(__filename);
console.log(pathObj);

let totalMem = os.totalmem();
let freeMem = os.freemem;

console.log(`Total memory = ${totalMem} Free memory = ${freeMem}`);

let files = fs.readdirSync("./"); // array a Strings
console.log(files);

fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});

logger.log("Test");

logger.on("MessageLogged", (arg) => {
  console.log("LISTENER CALLED", arg);
});
