var url = "http://mylogger.io/log";
const EventEmitter = require("events"); //Class

class Logger extends EventEmitter {
  log(msg) {
    // Send a HTTP request
    console.log(msg);

    // Raise an event
    this.emit("MessageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
//module.exports.endPoint = url;
