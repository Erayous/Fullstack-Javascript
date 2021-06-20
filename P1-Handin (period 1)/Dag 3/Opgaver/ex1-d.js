const getSecureRandom = require("./ex1-crypto-module");

function withPromises() {
  let result = [];
  getSecureRandom
    .getSecureRandom(48)
    .then((res) => {
      result.push(res);
      return getSecureRandom.getSecureRandom(40);
    })
    .then((res) => {
      result.push(res);
      return getSecureRandom.getSecureRandom(30);
    })
    .then((res) => {
      result.push(res);
    })
    .finally(() => {
      return console.log(result);
    });
}
// withPromises();

async function withAsyncAwaitSequential() {
  const r1 = await getSecureRandom.getSecureRandom(48);
  const r2 = await getSecureRandom.getSecureRandom(40);
  const r3 = await getSecureRandom.getSecureRandom(32);
  const r4 = await getSecureRandom.getSecureRandom(24);
  const r5 = await getSecureRandom.getSecureRandom(16);
  return [r1, r2, r3, r4, r5];
}

async function withAsyncAwaitParallel() {
  const r1 = getSecureRandom.getSecureRandom(48);
  const r2 = getSecureRandom.getSecureRandom(40);
  const r3 = getSecureRandom.getSecureRandom(32);
  const r4 = getSecureRandom.getSecureRandom(24);
  const r5 = getSecureRandom.getSecureRandom(16);
  const allResults = await Promise.all([r1, r2, r3, r4, r5]);
  const obj = { title: "6 Secure Randoms", randoms: allResults };
  return obj;
}

async function test() {
  try {
    const data = await withAsyncAwaitSequential();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

function getSecureRandomList() {
  getSecureRandom
    .getSecureRandomFromList([48, 40, 32, 24, 16, 8])
    .then((x) => console.log(x));
}
//test();
module.exports = withAsyncAwaitParallel;
