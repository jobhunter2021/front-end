// Initialize and add the map
var marker

function initMap() {
    // The center of maps
    const center = { lat: -6.917464, lng: 107.619125 }
    var marker;

    // The map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: center,
    })

    map.addListener("click", function (e) {
        if (marker) {
            marker.setPosition(e.latLng);
        } else {
            marker = new google.maps.Marker({
                position: e.latLng,
                map: map
            });
        }
    })
}



