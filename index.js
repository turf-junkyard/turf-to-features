/**
 * Takes an arbitrary GeoJSON object and converts it to a
 * Feature or FeatureCollection
 *
 * @module turf/to-features
 * @param {Feature|Geometry|FeatureCollection|GeometryCollection} geojson geojson to convert
 * @return {Feature|Collection}
 * @example
 * var poly = {
 *   "type": "Polygon",
 *   "coordinates": [[
 *     [-122.801742, 45.48565],
 *     [-122.801742, 45.60491],
 *     [-122.584762, 45.60491],
 *     [-122.584762, 45.48565],
 *     [-122.801742, 45.48565]
 *   ]]
 * };
 *
 * var feature = turf.toFeatures(poly);
 *
 * // Feature is:
 * {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Polygon",
 *     "coordinates": [[
 *       [-122.801742, 45.48565],
 *       [-122.801742, 45.60491],
 *       [-122.584762, 45.60491],
 *       [-122.584762, 45.48565],
 *       [-122.801742, 45.48565]
 *     ]]
 *   }
 * };
 */
module.exports = function (geojson) {
    if (geojson.type == 'Feature' || geojson.type == 'FeatureCollection') {
        return geojson;
    }

    if (geojson["coordinates"]) {
        return {
            "type": "Feature",
            "properties": {},
            "geometry": geojson
        };
    }

    if (geojson.type == 'GeometryCollection') {
        var geo = {
            "type": "FeatureCollection",
            "features": []
        };

        geojson.geometries.forEach(function (elem) {
            geo.features.push({
                "type": "Feature",
                "properties": {},
                "geometry": elem
            });
        });

        return geo;
    }
};
