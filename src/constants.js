import L from 'leaflet';

const icon = new L.Icon({
  iconUrl: `${process.env.PUBLIC_URL}/favicon.ico`,
  iconRetinaUrl: `${process.env.PUBLIC_URL}/favicon.ico`,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [30, 30], // Adjust the size as needed
  iconAnchor: [12, 25],
  popupAnchor: [1, -24],
  shadowSize: [41, 41]
});

export default icon;