var map;
var marker;

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(50.44,30.52),
        zoom: 9,
        mapTypeId: 'roadmap'
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions); //here you can change map container
    google.maps.event.addListener(map, "click", function(event) {
        var lat = event.latLng.lat().toFixed(6);
        var lng = event.latLng.lng().toFixed(6);
        createMarker(lat, lng);
        getCoords(lat, lng);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);


function createMarker(lat, lng) {
    if (marker) {
        marker.setMap(null);
        marker = "";
    }
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        draggable: true, // Set draggable option as true
        map: map
    });
    google.maps.event.addListener(marker, 'dragend', function() {
        marker.position = marker.getPosition();
        var lat = marker.position.lat().toFixed(6);
        var lng = marker.position.lng().toFixed(6);
    });
}

//function that passed coordinates into input fields
function getCoords(lat, lng) {
    var coords_lat = document.getElementById('lat');
    coords_lat.value = lat;
    var coords_lng = document.getElementById('lng');
    coords_lng.value = lng;
}
