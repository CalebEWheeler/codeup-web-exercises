"use strict";
//  <================================  My Map  ==========================================>
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FsZWJ3aGVlbGVyIiwiYSI6ImNrZWN4MHF5eDAwMTAycm16a3psZm4yeGYifQ.TPxlV9LK002eq2AvbiB1sg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.6, 29.6],
    zoom: 11.25,
});

// // Add zoom and rotation controls to the map.
// map.addControl(new mapboxgl.NavigationControl());

// document.getElementById('zoom').addEventListener('click', function() {
//     map.zoomTo(5, { duration: 9000 });

//  <================================  Exercise Todo's  ===================================>
// 1. Generate a Mapbox API Key using the steps from above

// 2. Create a new file named mapbox_maps_api.html and add a map using the next steps.

// 3. Generate a map that shows the city with your favorite restaurant using geocoding.

// 4. Redraw the map of the above location at zoom levels 5, 15, and 20. Do this by simply
// changing the value of zoom level where the map properties are initially set and refresh
// the page to see the changes. Can the zoom be changed
// programmatically after the initial map is drawn?

// 5. Create a marker on your map of the exact location of your favorite restaurant set the
// zoom to allow for best viewing distance.
// var wasabi = new mapboxgl.Marker().setLngLat([-98.5857901, 29.5311642]).addTo(map);

// 6. Create a popup with the name of the restaurant.
// var wasabiPopup = new mapboxgl.Popup().setHTML("<p>Wasabi Sushi</p>").addTo(map)
// wasabi.setPopup(wasabiPopup);

// 7. Make sure the info window does not display until the marker has been clicked on.


// 8. Refactor your code to display at least three of your favorite restaurants with information
// about each. Create an array of objects with information about each restaurant to accomplish
// this. Use a .forEach() loop rather than a for loop.
map.on('load', function() {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<div style="text-align:center"><p style="font-size: 1.5em; margin-bottom: 0"><strong>Wasabi Sushi Bar</strong></p><br><a href="http://wasabisanantonio.com/">Wasabi San Antonio</a><br><p>This is my favorite restaurant because of the Whatever Roll.<br>The whatever roll is whatever the Sushi Chef thinks will be great.<br>It takes a great chef to consistently amaze me with complex flavors.</p><img style="border: .5rem solid #fff;width:90%;height:40%" src="../img/wasabi-bar.jpg"></div>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-98.5634622, 29.5339343]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<div style="text-align:center"><p style="font-size: 1.5em; margin-bottom: 0"><strong>P.F. Chang\'s La Cantera</strong></p><br><a href="https://www.pfchangs.com/locations/us/tx/san-antonio/15900-lacantera-pkwy/9982-la-cantera.html?utm_source=YextMain&utm_medium=Directory">P.F. Chang\'s La Cantera</a><p>My family enjoys asian cuisine and we have been coming to P.F. Chang\'s at the La Cantera location since I was in grade school.<br>The food here is not the best, but it is up there. I\'d say nostalgia and the atmosphere are my main draws.</p><img style="border: .5rem solid #fff;width:90%;height:40%" src="../img/pf-changs.jpeg"></div>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-98.6179847,29.5930233]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<div style="text-align:center"><p style="font-size: 1.5em; margin-bottom: 0"><strong>Longhorn Cafe</strong></p><br><a href="https://www.thelonghorncafe.com/locations">Longhorn Cafe</a><p>Best mushroom swiss burger I have ever had!<br>I\'m a real fan of a good mushroom swiss and the Boerne location has the best. This location is also good, but just slightly not as good.</p><img style="border: .5rem solid #fff;width:90%;height:40%" src="../img/longhornCafe.jpeg"></div>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-98.6314518,29.66271]
                    }
                },
            ]
        }
    });
// Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true
        }
    });

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

// Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

// Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
});