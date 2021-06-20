const { default: fetch } = require("node-fetch");
const now = require("performance-now");
const URL = "https://swapi.dev/api/people/";

function fetchPerson(url) {
  return fetch(url).then((res) => res.json());
}

async function printNamesSerial() {
  let start = now();
  console.log("Before");
  const person1 = await fetchPerson(URL + "1");
  const person2 = await fetchPerson(URL + "2");
  const person3 = await fetchPerson(URL + "3");
  const person4 = await fetchPerson(URL + "4");
  const person5 = await fetchPerson(URL + "5");
  console.log(person1.name);
  console.log(person2.name);
  console.log(person3.name);
  console.log(person4.name);
  console.log(person5.name);

  console.log("After all");
  let end = now();
  console.log((end - start).toFixed(3));
}

printNamesSerial();
