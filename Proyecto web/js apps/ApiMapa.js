mapboxgl.accessToken = 'pk.eyJ1IjoiaGFja25veCIsImEiOiJjbHVsdnJ2cXowazR0MnFvMXk3c3Y0MzNvIn0.pW4WobqQ293cnL0v3e_04A';


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-84.591217,9.831569],
    zoom: 17
});

// Crear marcador personalizado
var marker = document.createElement('div');
marker.className = 'marker';

var markerLabel = document.createElement('div');
markerLabel.className = 'marker-label';
markerLabel.textContent = 'VeggiFresh';

marker.appendChild(markerLabel);

// Agregar marcador al mapa
new mapboxgl.Marker(marker)
    .setLngLat([-84.591217,9.831569])
    .addTo(map);

