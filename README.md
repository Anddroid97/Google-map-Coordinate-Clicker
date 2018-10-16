# Google-map-Coordinate-Clicker
Simple representation of functionality that help to get place coordinates by easy click or drag a marker on the map
---------------
See sample.html to figure out how it works.
Change where coordinates will be passed(e.g. input) in mapClicker.js here by choosing id`s of elements
```js
//function getCoords(lat, lng) {
    var coords_lat = document.getElementById('lat');
    coords_lat.value = lat;
    var coords_lng = document.getElementById('lng');
    coords_lng.value = lng;
}
```
Also you can change container for your map
```js
map = new google.maps.Map(document.getElementById('map'), mapOptions); //here you can change map container
```
And don't forget set your Api Key
```html
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
```
![screen](/doc/chat.png?raw=true&v=2)
