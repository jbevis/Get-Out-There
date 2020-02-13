import React from 'react';
import { mapboxKey } from '../../apiKeys';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export const Maps = ({ center }) => {
  mapboxgl.accessToken = mapboxKey;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v10',
    center: [39.738453, -104.984853],
    zoom: 9
  });

  return (
    <section id='map'>

    </section>
  )
}
