import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as ReactLeafletMarker from "react-leaflet-marker";

const { MapContainer } = ReactLeaflet;
const { MarkerLayer, Marker } = ReactLeafletMarker;

const Map = ({ children, ...rest }) => {
  return (
    <MapContainer
      attributionControl={false}
      style={{ position: "absolute", top: 0, left: 0, height: "500px" }}
      {...rest}
    >
      {children(ReactLeaflet, Leaflet, ReactLeafletMarker)}
      <MarkerLayer>
        <Marker position={[54.08726, 12.13295]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-12 w-12 fill-current text-tertiary-400"
          >
            <path d="M12 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" />
            <path d="M12 24a5.271 5.271 0 0 1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055 10.055 0 0 1 20.11 0c0 2.538-1.933 6.49-5.744 11.747A5.271 5.271 0 0 1 12 24Zm0-21.819a7.883 7.883 0 0 0-7.874 7.874c0 2.01 1.893 5.727 5.329 10.466a3.145 3.145 0 0 0 5.09 0c3.436-4.739 5.329-8.456 5.329-10.466A7.883 7.883 0 0 0 12 2.181Z" />
          </svg>
        </Marker>
      </MarkerLayer>
    </MapContainer>
  );
};

export default Map;
