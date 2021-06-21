const makeResponse = require('./momondo-backend');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Sup Fuckers!');
});

app.get('/api/albums/:words', (req, res) => {
    const params = req.params.words;
    makeResponse(params).then((response) => {
        res.send((response));
    });
});

app.listen(3000);


