import React from "react";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";

const MapboxMap = () => {
  return (
    <Map
      initialViewState={{
        longitude: 12.133373995737152,
        latitude: 54.0873696208192,
        zoom: 18,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9?optimize=true"
      mapboxAccessToken="pk.eyJ1IjoibS1wb2hsIiwiYSI6ImNsZ204MmtueTAyOWQzbnM5MDV4bHYxcWUifQ.Jt-DFTpx4RcTdbp5ZIU81Q"
    >
      <Marker
        longitude={12.133373995737152}
        latitude={54.0873696208192}
        anchor="bottom"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="h-12 w-12 fill-current text-red-600"
        >
          <path d="M56.8 1.4c-2.6.7-5.5 1.9-6.5 2.6C41.7 10.5 38 17.3 38 26.5c0 11.9 7 21.1 19.2 25.5l2.8.9.2 32.2c.3 29.4.5 32.3 2 33.3 1.3.8 2.3.8 3.5 0 1.6-1 1.8-3.9 2.1-33.3l.2-32.2 2.8-.9C83 47.6 90 38.4 90 26.5 90 9.1 73.5-3.3 56.8 1.4z" />
        </svg>
      </Marker>
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
    </Map>
  );
};

export default MapboxMap;
