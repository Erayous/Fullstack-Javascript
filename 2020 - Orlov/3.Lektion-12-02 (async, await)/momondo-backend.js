const fetch = require('node-fetch');
const urls = [
    "https://jsonplaceholder.typicode.com/photos?albumId=1",
    "https://jsonplaceholder.typicode.com/photos?albumId=3",
    "https://jsonplaceholder.typicode.com/photos?albumId=5",
    "https://jsonplaceholder.typicode.com/photos?albumId=7",
    "https://jsonplaceholder.typicode.com/photos?albumId=9"
];

const filterLongTitles = (album, n) => {
    if (album["title"].split(" ").length <= n) {
        return album;
    }
};

const fetchAlbum = async (url) => {
    let response = await fetch(url);
    return await response.json();
};

const fetchAllAlbums = async (urls) => {
    let fetchList = [];
    for (let url of urls) fetchList.push(fetchAlbum(url));
    let response = await Promise.all(fetchList);
    return response.flat();
};

const makeResponse = async (n) => {
    let albums = await fetchAllAlbums(urls);
    albums = albums.filter(album => {
        if (album["title"].split(" ").length <= n) {
            return album
        }
    });
    albums = albums.map(album => {
        return {albumId: album.albumId, title: album.title}
    });
    return albums;
};

module.exports = makeResponse;
