const fetch = require("node-fetch");

const getJokesSequental = async () => {
  const jokes = [];
  for (let i = 0; i < 5; i++) {
    const p = await fetch("http://api.icndb.com/jokes/random").then((r) =>
      r.json()
    );
    jokes.push(p.value.joke);
  }
  return jokes;
};

const getJokesParallel = async () => {
  const promises = [];
  for (let i = 0; i < 5; i++) {
    const p = fetch("http://api.icndb.com/jokes/random").then((r) => r.json());
    promises.push(p);
  }
  const all = await Promise.all(promises);
  return all.map((j) => j.value.joke);
};

async function test() {
  const jokes = await getJokesParallel();
  console.log(jokes);
}
test();
