import "core-js/proposals/promise-any";
const fetch = require("node-fetch");

let url = "https://api.chucknorris.io/jokes/random";
async function promiseAll() {
  let f1 = fetch(url).then((x) => x.json());
  let f2 = fetch(url).then((x) => x.json());
  let f3 = fetch(url).then((x) => x.json());

  return await Promise.all([f1, f2, f3]);
}

//promiseAll().then((x) => console.log(x));

async function promiseAny() {
  const promise1 = Promise.reject(0);
  const promise2 = new Promise((resolve) => setTimeout(resolve, 200, "quick"));
  const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

  const promises = [promise1, promise2, promise3];

  return await Promise.any(promises);
}

promiseAny().then((res) => console.log(res));
