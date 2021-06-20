const express = require('express');
const app = express();
const gju = require('geojson-utils');
const {gameArea, players} = require('./gameData');

app.get('/', (req, res) => res.send('Geo Demo!'));

app.get('/geoapi/isuserinarea/:lon/:lat', (req, res) => {
	const point = {"type": "Point", "coordinates": [req.params.lon, req.params.lat]}
	let result = gju.pointInPolygon(point, gameArea);
	if (result) {
		res.json({
            "status": result,
            "msg": "Point was inside the tested polygon"});
	} else {
		res.json({
			"status": false,
			"msg": "Point was NOT inside tested polygon"
		})
	}
});

app.get('/geoapi/findnearbyplayers/:lon/:lat/:rad', (req, res) => {
    const point = {"type": "Point", "coordinates": [req.params.lon, req.params.lat]};
    const playersInside = players.filter(value => gju.geometryWithinRadius(value.geometry, point, req.params.rad));
    res.json(playersInside);
});

app.get('geoapi/distanceToUser/:lon/:lat/:username', (req, res) => {
    // const player = players.find(value => value.properties.name === req.params.username);
    // const playerPoint = {"type": "Point", "coordinates": [player.geometry.coordinates.]};
    // const distance = gju.pointDistance()
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));
