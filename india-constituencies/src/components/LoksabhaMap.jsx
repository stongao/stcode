import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./LoksabhaMap.css";

const LoksabhaMap = ({states}) => {
    const position = [23, 80.1]
    const mapStyle = {
        fillColor: "white",
        weight: 1,
        color: "black",
        fillOpacity: 1
    };


    const onEachState = (state, layer) => {
        //layer.options.fillColor = state.properties.color;
        const displayProp = state.properties.pc_name_hi;
        layer.bindPopup(`${displayProp}`);
    };

    return ( 
        <MapContainer center={position} zoom={5}>
            <GeoJSON data={states} style={mapStyle} onEachFeature={onEachState}/>
        </MapContainer>
      );
}
 
export default LoksabhaMap;