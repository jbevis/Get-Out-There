import React from 'react';
import PropTypes from 'prop-types';


export const Card = ({ trail }) => {
  return (
    <article className="trail-card">
      <h4>{trail.name}</h4>
      <p>Difficulty: {trail.difficulty}</p>
    </article>
  )
}

Card.propTypes = {
  trails: PropTypes.object.isRequired
}
