const { default: fetch } = require("node-fetch");
const now = require("performance-now");
const URL = "https://swapi.dev/api/people/";

function fetchPerson(url) {
  return fetch(url).then((res) => res.json());
}

async function printNamesParallel() {
  let start = now();
  console.log("Before");
  const person1 = fetchPerson(URL + "1");
  const person2 = fetchPerson(URL + "2");
  const person3 = fetchPerson(URL + "3");
  const person4 = fetchPerson(URL + "4");
  const person5 = fetchPerson(URL + "5");
  const result = await Promise.all([
    person1,
    person2,
    person3,
    person4,
    person5,
  ]);
  console.log(result[0].name);
  console.log(result[1].name);
  console.log(result[2].name);
  console.log(result[3].name);
  console.log(result[4].name);
  console.log("After all");
  let end = now();
  console.log((end - start).toFixed(3));
}

printNamesParallel();
