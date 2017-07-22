import React from 'react';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export const Maps = () => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiamJldmlzIiwiYSI6ImNpeXFhMTJrbTAwMGgyd20wcTcxcWxqdGEifQ.gMhUIj7c1hJmhPhLBv1ZLA';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v10'
  });

  return (
    <section id='map'>
      <h4>A map should go here</h4>
    </section>
  )
}
