import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import styles from "./Map.module.scss";

const Map = ({coords, ISOCode}) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2FkYW1pcjI0IiwiYSI6ImNraXk2emplNTI1cGEyeW40Y2JxMmQ0ZmQifQ.-rzmHUAxpKRFdBrqat63GA';
  // console.log('coords', coords)
  useEffect(() => {
    let map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: coords,
      zoom: 4,
    });

    map.on('load', function() {
      map.addLayer({
        id: 'countries', 
        source: {
          type: 'vector',
          url: 'mapbox://kadamir24.7tsxvqbm',
        },
        'source-layer': 'ne_10m_admin_0_countries-1ik8fb',
        type: 'fill',
        paint: {
      
          'fill-color': '#d85d37', 
          'fill-outline-color': '#F2F2F2',
          'fill-opacity': 0.5, 
        },
      });


      map.setFilter('countries', ['in', 'ADM0_A3_IS'].concat([`${ISOCode}`]));

    });

    const marker = new mapboxgl.Marker()
      .setLngLat(coords)
      .addTo(map);

    map.addControl(new mapboxgl.FullscreenControl());

  }, []);

  return <div id="mapContainer" className={styles.map}></div>;
};

export default Map;