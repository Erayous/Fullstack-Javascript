const fetch = require('node-fetch');
const now = require("performance-now");





const URL = "https://swapi.co/api/people/";

async function fetchPerson(url){
    let response = await fetch(url);
    return response.json();
}

async function printNames() {
    let start = now();
    console.log("Before");
    let person1 = await fetchPerson(URL + '1');
    let person2 = await fetchPerson(URL + '2');
    console.log(person1.name);
    console.log(person2.name);
    console.log("After all");
    let end = now();
    console.log(start.toFixed(3)); // the number of milliseconds the current node process is running
    console.log((end - start).toFixed(3)) // ~ 0.002 on my system
}

async function printNamesParallel() {
    let start = now();
    console.log("Before");
    let persons = await Promise.all([fetchPerson(URL + '1'), fetchPerson(URL + '2')]);
    persons.forEach(person => console.log(person.name));
    console.log("After all");
    let end = now();
    console.log(start.toFixed(3)); // the number of milliseconds the current node process is running
    console.log((end - start).toFixed(3)) // ~ 0.002 on my system
}

// printNames();
printNamesParallel();
