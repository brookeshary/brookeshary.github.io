let map;

function initMap() {
  // Create the map with the "silver" style.
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8145, lng: -71.4317 },
    zoom: 15,
    mapTypeControl: false,
    styles: styles.silver
  });

  const checkpoints = [
      { label: "01", name: "start from a place of memory", lat: 41.8131, lng: -71.4345 },
      { label: "02", name: "flow through space with intuition", lat: 41.8214, lng: -71.4223 },
  ];

  const infowindow = new google.maps.InfoWindow();

  checkpoints.forEach(({ label, name, lat, lng }) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      label: {
        text: label, // Set label text
        className: "custom-marker-label", // Apply custom CSS class for styling
      },
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE, // Define the shape of the marker
        color: 'white',
        fillColor: '#0af7a2', // Fill color of the marker
        fillOpacity: 1, // Opacity of the marker
        scale: 15, // Size of the marker
        strokeColor: 'black',
        strokeWeight: 2 // Stroke weight of the marker
      }
    });

    marker.addListener("click", () => {
      infowindow.setContent(name);
      infowindow.open(map, marker);
    });
  });
}

const styles = {
silver: [
    {
    elementType: "geometry",
    stylers: [{ color: "#e1faf1" }],
    },
    {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
    },
    {
    elementType: "labels.text.fill",
    stylers: [{ color: "#000000" }],
    },
    {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#fafff7" }],
    },
    {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
    },
    {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#CBF3E5" }],
    },
    {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
    },
    {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#91e3c7" }],
    },
    {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
    },
    {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
    },
    {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
    },
    {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }],
    },
    {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
    },
    {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
    },
    {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
    },
    {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
    },
    {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#4c4f4e" }],
    },
    {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#e6ffd9" }],
    },
],

hiding: [
    {
    featureType: "poi.business",
    stylers: [{ visibility: "off" }],
    },
    {
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
    },
],
};

      window.initMap = initMap;