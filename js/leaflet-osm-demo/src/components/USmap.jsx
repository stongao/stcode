import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./USmap.css";

const USmap = ({states}) => {
    const position = [37.8, -96]
    const mapStyle = {
        fillColor: "white",
        weight: 1,
        color: "black",
        fillOpacity: 1
    };

    const onEachState = (state, layer) => {
        layer.options.fillColor = state.properties.color;
        const displayProp = state.properties.name + "," + state.properties.density;
        layer.bindPopup(`${displayProp}`);
    };

    return ( 
        <MapContainer center={position} zoom={4}>
            <GeoJSON data={states} style={mapStyle} onEachFeature={onEachState} />
        </MapContainer>
      );
}
 
export default USmap;