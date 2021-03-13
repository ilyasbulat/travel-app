import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import styles from "./Map.module.scss";

const Map = ({coords}) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2FkYW1pcjI0IiwiYSI6ImNraXk2emplNTI1cGEyeW40Y2JxMmQ0ZmQifQ.-rzmHUAxpKRFdBrqat63GA';
  console.log('coords', coords)
  useEffect(() => {
    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: coords,
      zoom: 9,
    });
  }, []);

  return <div id="mapContainer" className={styles.map}></div>;
};

export default Map;