// import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import Map, { MapRef, Marker, Popup, ViewState } from "react-map-gl";

// import Marker from "../Marker";
// import Card from "../Card";

import "mapbox-gl/dist/mapbox-gl.css";
import { electricCarData, ElectricVehicleData } from "../../util/mockData";

interface MapViewProps {
  isOpen: boolean;
}

const MapViewPage: React.FC<MapViewProps> = ({ isOpen }) => {
  const [selectedMarker, setSelectedMarker] =
    useState<ElectricVehicleData | null>(null);
  // const mapContainer = useRef<any>(null);
  // const [mapLoaded, setMapLoaded] = useState(false);

  // let mapRef = useRef<any>(null);

  // useEffect(() => {
  //   const map = (mapRef.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     center: [-75.15654, 39.94596],
  //     zoom: 12,
  //   }));

  //   map.addControl(new mapboxgl.NavigationControl());

  //   map.on("load", () => {
  //     onLoad(map);
  //     setMapLoaded(true);
  //   });
  // }, []);

  const mapRef = useRef<MapRef | null>(null);
  const [reRenderMap, setReRenderMap] = useState(1);
  const [viewState, setViewState] = useState<ViewState>({
    latitude: parseFloat(
      electricCarData[0]["Vehicle Location"].split(" ")[2].slice(0, 8)
    ),
    longitude: parseFloat(
      electricCarData[0]["Vehicle Location"].split(" ")[1].slice(1)
    ),
    zoom: 10,
    bearing: 0, // Rotation of the map
    pitch: 45, // Tilt of the map, 0 is flat, max is 60
    padding: { top: 50, bottom: 50, left: 50, right: 50 },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setReRenderMap(Date.now());
    }, 400);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <Map
      key={reRenderMap}
      ref={mapRef}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      doubleClickZoom
      boxZoom
      pitchWithRotate
      style={{ width: "100%", height: "90vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v11" // Use any Mapbox style you prefer
      mapboxAccessToken="pk.eyJ1Ijoic2Fyb2otMTIzNCIsImEiOiJjbHJweXVyY24wYXF5MmlsaWF1ZmZ1aDZsIn0.rkkbQXxcat-2yI-MyQQ4eg"
    >
      {electricCarData.map((item) => (
        <Marker
          key={item["Vehicle Location"]}
          latitude={parseFloat(
            item["Vehicle Location"].split(" ")[2].slice(0, 8)
          )}
          longitude={parseFloat(
            item["Vehicle Location"].split(" ")[1].slice(1)
          )}
          // color="red"
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setSelectedMarker(item);
          }}
        >
          <div className="text-red-500 cursor-pointer text-4xl">📍</div>
        </Marker>
      ))}

      {selectedMarker && (
        <Popup
          latitude={parseFloat(
            selectedMarker["Vehicle Location"].split(" ")[2].slice(0, 8)
          )}
          longitude={parseFloat(
            selectedMarker["Vehicle Location"].split(" ")[1].slice(1)
          )}
          anchor="top"
          onClose={() => setSelectedMarker(null)}
          // className=""
        >
          <div>
            <h3>{selectedMarker["Vehicle Location"]}</h3>
            <p>{selectedMarker.Model}</p>
            <p>{selectedMarker["Electric Vehicle Type"]}</p>
            <p>
              {selectedMarker["City"] +
                "," +
                selectedMarker.State +
                "," +
                selectedMarker.County}
            </p>
            <p>{selectedMarker["Postal Code"]}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default MapViewPage;
