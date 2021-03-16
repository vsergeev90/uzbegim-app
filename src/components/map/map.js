import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker
} from "@react-google-maps/api";

const Map = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 50.0893161,
    lng: 14.4625295,
  };

  const position = {
    name: "Uzbegim",
    location: {
      lat: 50.0893161,
      lng: 14.4625295,
    },
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDrvWbnzo8Yf8FCtaCKvNzX5SPLHxDtIe0">
      <GoogleMap mapContainerStyle={mapStyles} zoom={18} center={defaultCenter}>
        <Marker key={position.name} position={position.location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
