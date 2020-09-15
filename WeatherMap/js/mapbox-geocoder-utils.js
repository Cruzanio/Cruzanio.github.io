(function () {
    "use strict";
    $().ready(function () {

//Geocoder
        function geocode(search, token) {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
                .then(function (res) {
                    return res.json();
                    // to get all the data from the request, comment out the following three lines...
                }).then(function (data) {
                    return data.features[0].center;
                });
        }

// geocode("Via Ippolito Nievo Nr 2, 33081, Aviano Italy", MAPBOX_TOKEN2)
//     .then(function (result) {
//         console.log('Geocode for New Risto Pizza results: ' + result);
//         map.setCenter(result);
//         map.setZoom(15);
//     });

//Reverse Geocode
        function reverseGeocode(coordinates, token) {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
                .then(response => response.json())
                .then(data => {
                    return data
                })
        };
    });
})();
// var kebabsLoc ={lng: 12.587187, lat: 46.070614}
//
// reverseGeocode(kebabsLoc, MAPBOX_TOKEN2)
//     .then(function (result) {
//         console.log("Did we find Buonissimo Kebabs? " + result)
//     })

//newline