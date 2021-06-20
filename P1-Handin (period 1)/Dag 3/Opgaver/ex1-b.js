const getSecureRandom = require("./ex1-crypto-module");

const b1 = () => {
  const secures = {
    title: "6 Secure Randoms",
    randoms: [],
  };
  getSecureRandom(48)
    .then((res) => {
      secures.randoms.push(res);
      return getSecureRandom(40);
    })
    .then((res) => {
      secures.randoms.push(res);
      return getSecureRandom(32);
    })
    .then((res) => {
      secures.randoms.push(res);
      return secures;
    })
    .finally(() => console.log("Sequential =", secures));
};

b1();

const b2 = () => {
  const secures = {
    title: "6 Secure Randoms",
    randoms: [],
  };
  const p1 = getSecureRandom(48);
  const p2 = getSecureRandom(40);
  const p3 = getSecureRandom(32);
  const promises = [p1, p2, p3];

  Promise.all(promises).then((res) => {
    res.map((x) => secures.randoms.push(x));
    console.log("Parallel = ", secures);
  });
};
b2();
