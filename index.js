let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 8
    });
}

function calculateToll() {
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const vehicleType = document.getElementById('vehicle').value;

    // Assuming a simple toll calculation for demonstration
    const fixedToll = 10;

    // Display result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Estimated toll for ${vehicleType} from ${start} to ${end}: $${fixedToll}`;

    // Draw a polyline on the map (example)
    drawPolylineOnMap();
}

function drawPolylineOnMap() {
    const coordinates = [
        { lat: 37.7749, lng: -122.4194 },
        { lat: 37.7751, lng: -122.4196 },
        { lat: 37.7753, lng: -122.4198 }
    ];

    const encodedPolyline = google.maps.geometry.encoding.encodePath(coordinates);
    const decodedCoordinates = google.maps.geometry.encoding.decodePath(encodedPolyline);

    const polyline = new google.maps.Polyline({
        path: decodedCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    polyline.setMap(map);
}
