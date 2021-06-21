const gameArea = {
    "type": "Polygon",
    "coordinates": [
        [
            [
              12.322540283203123,
              55.7464390084051
            ],
            [
              12.534027099609373,
              55.654347641744195
            ],
            [
              12.5518798828125,
              55.68997171381322
            ],
            [
              12.469482421875,
              55.77039358162004
            ],
            [
              12.339019775390625,
              55.79047317030209
            ],
            [
              12.322540283203123,
              55.7464390084051
            ]
        ]
    ]
};

const players = [
  {
      "type": "Feature",
      "properties": {"name":"Morten"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.517547607421873,
          55.76034990679016
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"name":"Benner"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.425537109375,
          55.7425739894847
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"name":"Connie"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.49969482421875,
          55.693841941307134
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {"name":"Egon"},
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.293701171875,
          55.696163893908825
        ]
      }
    }
];

module.exports = {gameArea, players};
