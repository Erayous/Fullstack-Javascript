const fetch = require("node-fetch");

const url = "https://swapi.dev/api/people/";

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
  let obj = {};

  fetch(url + id)
    .then((res) => res.json())
    .then((res) => {
      obj.name = res.name;
      return fetch(res.films[0]);
    })
    .then((res) => res.json())
    .then((res) => {
      obj.firstFilm = res.title;
      return fetch(res.species[0]);
    })
    .then((res) => res.json())
    .then((res) => {
      obj.firstSpecies = res.name;
      return fetch(res.homeworld);
    })
    .then((res) => res.json())
    .then((res) => {
      obj.homeworld = res.name;
    })
    .finally(() => {
      console.log(obj);
      return obj;
    });
}
getPlanetforFirstSpeciesInFirstMovieForPerson(1);
