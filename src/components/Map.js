import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css'; // Import the CSS file
import L from 'leaflet';
import icon from '../constants'; // Import the custom icon

// Fix for default icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map = () => {
  const [geoJSON, setGeoJSON] = useState({ type: 'FeatureCollection', features: [] });

  const fetchGeoJSON = (countryCode) => {
    return fetch(`https://raw.githubusercontent.com/inmagik/world-countries/master/countries/${countryCode}.geojson`)
      .then((resp) => resp.json());
  };

  useEffect(() => {
    const fetchAllGeoJSON = async () => {
      const countries = ['FRA', 'CAN', 'GBR', 'ESP', 'ITA', 'DEU', 'VAT', 'CYP', 'HRV', 'CZE', 'USA', 'CHE', 'BIH', 'BEL', 'AUT', 'SVN']; // List of country codes
      const geoJSONData = await Promise.all(countries.map(fetchGeoJSON));
      const combinedGeoJSON = {
        type: 'FeatureCollection',
        features: geoJSONData.flatMap(data => data.features),
      };
      setGeoJSON(combinedGeoJSON);
    };

    fetchAllGeoJSON();
  }, []);

  const countryStyle = (feature) => {
    return {
      fillColor: 'black',
      weight: 2,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7,
    };
  };

  return (
    <MapContainer center={[20, 0]} zoom={2} className="map-container">
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {geoJSON.features.length > 0 && <GeoJSON data={geoJSON} style={countryStyle} />}
      <Marker position={[46.8139, -71.2082]} icon={icon}>
        <Popup className="custom-popup">Québec City, Canada</Popup>
      </Marker>
      <Marker position={[45.5017, -73.5673]} icon={icon}>
        <Popup className="custom-popup">Montréal, Canada</Popup>
      </Marker>
      <Marker position={[40.7128, -74.0060]} icon={icon}>
        <Popup className="custom-popup">New York City, USA</Popup>
      </Marker>
      <Marker position={[41.9028, 12.4964]} icon={icon}>
        <Popup className="custom-popup">Rome, Italy</Popup>
      </Marker>
      <Marker position={[45.4384, 10.9916]} icon={icon}>
        <Popup className="custom-popup">Verona, Italy</Popup>
      </Marker>
      <Marker position={[34.7720, 32.4297]} icon={icon}>
        <Popup className="custom-popup">Paphos, Cyprus</Popup>
      </Marker>
      <Marker position={[35.1856, 33.3823]} icon={icon}>
        <Popup className="custom-popup">Nicosia, Cyprus</Popup>
      </Marker>
      <Marker position={[51.2802, 1.0789]} icon={icon}>
        <Popup className="custom-popup">Canterbury, UK</Popup>
      </Marker>
      <Marker position={[40.4168, -3.7038]} icon={icon}>
        <Popup className="custom-popup">Madrid, Spain</Popup>
      </Marker>
      <Marker position={[39.8628, -4.0273]} icon={icon}>
        <Popup className="custom-popup">Toledo, Spain</Popup>
      </Marker>
      <Marker position={[48.8566, 2.3522]} icon={icon}>
        <Popup className="custom-popup">Paris, France</Popup>
      </Marker>
      <Marker position={[48.4284, -71.0683]} icon={icon}>
        <Popup className="custom-popup">Saguenay, Canada</Popup>
      </Marker>
      <Marker position={[43.5081, 16.4402]} icon={icon}>
        <Popup className="custom-popup">Split, Croatia</Popup>
      </Marker>
      <Marker position={[46.2044, 6.1432]} icon={icon}>
        <Popup className="custom-popup">Geneva, Switzerland</Popup>
      </Marker>
      <Marker position={[50.0755, 14.4378]} icon={icon}>
        <Popup className="custom-popup">Prague, Czech Republic</Popup>
      </Marker>
      <Marker position={[39.4699, -0.3763]} icon={icon}>
        <Popup className="custom-popup">Valencia, Spain</Popup>
      </Marker>
      <Marker position={[48.1351, 11.5820]} icon={icon}>
        <Popup className="custom-popup">Munich, Germany</Popup>
      </Marker>
      <Marker position={[43.7696, 11.2558]} icon={icon}>
        <Popup className="custom-popup">Florence, Italy</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;