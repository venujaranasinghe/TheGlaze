// MapComponent.jsx
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 7.2906,     // Example: Kandy, Sri Lanka
  lng: 80.6337,
};

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCJijfUqYI092AvbJMjDgWEgljEkLIBc-A', // Replace with your key
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapComponent;
