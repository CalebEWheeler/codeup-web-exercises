"use strict";
//  <================================  My Map  ==========================================>
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FsZWJ3aGVlbGVyIiwiYSI6ImNrZWN4MHF5eDAwMTAycm16a3psZm4yeGYifQ.TPxlV9LK002eq2AvbiB1sg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 29.4241],
    zoom: 8,
});
// <===========================  My functions for Geocode  =================================>

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}

//  <================================  Exercise Todo's  ===================================>
// 1. Generate a Mapbox API Key using the steps from above

// 2. Create a new file named mapbox_maps_api.html and add a map using the next steps.

// 3. Generate a map that shows the city with your favorite restaurant using geocoding.



    geocode("9921 Frontage Rd, San Antonio, TX 78230", MAPBOX_TOKEN).then(function(result) {
        console.log("Geocoded result for Wasabi: " + result);
        map.setCenter(result);
        // response += + result;
})

// 4. Redraw the map of the above location at zoom levels 5, 15, and 20. Do this by simply
// changing the value of zoom level where the map properties are initially set and refresh
// the page to see the changes. Can the zoom be changed
// programmatically after the initial map is drawn?

// 5. Create a marker on your map of the exact location of your favorite restaurant set the
// zoom to allow for best viewing distance.

// 6. Create a popup with the name of the restaurant.

// 7. Make sure the info window does not display until the marker has been clicked on.

// 8. Refactor your code to display at least three of your favorite restaurants with information
// about each. Create an array of objects with information about each restaurant to accomplish
// this. Use a .forEach() loop rather than a for loop.