const crypto = require("crypto");

let secures1 = {
  title: "6 Secure Randoms",
  randoms: [],
};

function exA() {
  crypto.randomBytes(48, (err, buffer) => {
    let random1 = { length: 48, random: buffer.toString("hex") };
    secures1.randoms.push(random1);
    crypto.randomBytes(40, (err, buffer) => {
      let random2 = { length: 40, random: buffer.toString("hex") };
      secures1.randoms.push(random2);
      crypto.randomBytes(32, (err, buffer) => {
        let random3 = { length: 32, random: buffer.toString("hex") };
        secures1.randoms.push(random3);
        console.log(secures1);
      });
    });
  });
}
exA();
