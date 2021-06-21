const crypto = require("crypto");

function getSecureRandom(size) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(size, function (err, buffer) {
      if (err) reject(err);
      let random = { length: size, random: buffer.toString("hex") };
      resolve(random);
    });
  });
}

function getSecureRandomFromList(list) {
  return new Promise((resolve, reject) => {
    const result = [];
    for (let i = 0; i < list.length; i++) {
      crypto.randomBytes(list[i], function (err, buffer) {
        if (err) reject(err);
        let random = { length: list[i], random: buffer.toString("hex") };
        result.push(random);
        if (i == list.length - 1) {
          resolve(result);
        }
      });
    }
  });
}

module.exports = { getSecureRandom, getSecureRandomFromList };
