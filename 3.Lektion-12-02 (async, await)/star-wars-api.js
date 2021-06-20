const fetch = require('node-fetch');

const getPlanetForFirstSpeciesInFirstMovieForPerson = id => {
    fetch("https://swapi.co/api/people/" + id + "/")
        .then(value => value.json())
        .then(value => {
            console.log('Name: ' + value['name']);
            fetch(value['films'][0])
                .then((value => value.json()))
                .then(value1 => {
                    console.log('Film: ' + value1['title']);
                    fetch(value1['species'][0])
                        .then((value2 => value2.json()))
                        .then(value2 => {
                            console.log('Species: ' + value2['name']);
                            fetch(value2['homeworld'])
                                .then(value3 => value3.json())
                                .then(value3 => {
                                    console.log('Homeworld: ' + value3['name'])
                                })
                        })
                })
        });
};

// getPlanetForFirstSpeciesInFirstMovieForPerson(1);


async function getPlanetForFirstSpeciesInFirstMovieForPersonAscync(id) {
    try {
        let response = await fetch("https://swapi.co/api/people/" + id + "/");
        let person = await response.json();
        response = await fetch(person["films"][0]);
        let film = await response.json();
        response = await fetch(film['species'][0]);
        let species = await response.json();
        response = await fetch(species['homeworld']);
        let homeworld = await response.json();
        console.log(person.name, film.title, species.name, homeworld.name)
    } catch (e) {
        console.log(e)
    }
}

getPlanetForFirstSpeciesInFirstMovieForPersonAscync(1);
