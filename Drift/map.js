let map;
let comments = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8182, lng: -71.4201 },
    zoom: 14.5,
    mapTypeControl: false,
    styles: styles.silver
  });

  const checkpoints = [
      { label: "01", name: "start from a place of memory", lat: 41.8131, lng: -71.4346 },
      { label: "02", name: "flow through space with intuition", lat: 41.8205, lng: -71.4263 },
      { label: "03", name: "what could be overlooked?", lat: 41.8141, lng: -71.4230 },
      { label: "04", name: "move slowly", lat: 41.8253, lng: -71.4432 },
      { label: "05", name: "what might you encounter?", lat: 41.8195, lng: -71.4406 },
      { label: "06", name: "where is the edge?", lat: 41.8260, lng: -71.4609 },
      { label: "07", name: "limit speed", lat: 41.8186, lng: -71.4241 },
      { label: "10", name: "move slow", lat: 41.8236, lng: -71.4297 },
      { label: "12", name: "no one way", lat: 41.8203, lng: -71.3937 },
      { label: "08", name: "limit speed", lat: 41.8187, lng: -71.4265 },
      { label: "11", name: "arrows", lat: 41.8393, lng: -71.3988 },
      { label: "13", name: "limit speed", lat: 41.8378, lng: -71.3809 },
      { label: "09", name: "arrows", lat: 41.8162, lng: -71.4244 },
      { label: "*", name: "arrows", lat: 41.8154, lng: -71.4321 },
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
        fillColor: '#0af7a2', // Fill color of the marker, 0af7a2
        fillOpacity: 1, // Opacity of the marker
        scale: 15, // Size of the marker
        strokeColor: 'black',
        strokeWeight: 2 // Stroke weight of the marker
      }
    });

    //marker.addListener("click", () => {
      //infowindow.setContent(name);
      //infowindow.open(map, marker);
   // });
  });
}

const styles = {
  silver: [
      {
      elementType: "geometry",
      stylers: [{ color: "#e6edeb" }],
      },
      {
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
      },
      {
      elementType: "labels.text.fill",
      stylers: [{ color: "#0fd48d" }],
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
      stylers: [{ color: "#9ba3a0" }],
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