# turf-to-features

converts arbitrary geojson into feature objects


### `turf.to-features(geojson)`

Takes an arbitrary GeoJSON object and converts it to a
Feature or FeatureCollection


### Parameters

| parameter | type                                                     | description        |
| --------- | -------------------------------------------------------- | ------------------ |
| `geojson` | Feature\,Geometry\,FeatureCollection\,GeometryCollection | geojson to convert |


### Example

```js
var poly = {
  "type": "Polygon",
  "coordinates": [[
    [-122.801742, 45.48565],
    [-122.801742, 45.60491],
    [-122.584762, 45.60491],
    [-122.584762, 45.48565],
    [-122.801742, 45.48565]
  ]]
};

var feature = turf.toFeatures(poly);

// Feature is:
{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-122.801742, 45.48565],
      [-122.801742, 45.60491],
      [-122.584762, 45.60491],
      [-122.584762, 45.48565],
      [-122.801742, 45.48565]
    ]]
  }
};
```


**Returns** `Feature,Collection`, 

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-to-features
```

## Tests

```sh
$ npm test
```


