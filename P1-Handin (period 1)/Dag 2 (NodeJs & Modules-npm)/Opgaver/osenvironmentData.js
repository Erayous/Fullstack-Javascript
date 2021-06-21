const os = require("os");

let osInfo = {
  platform: os.platform(),
  osType: os.type(),
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
  EOL: os.EOL,
};

module.exports = osInfo;
