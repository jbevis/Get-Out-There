import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'


export const Card = ({ trail }) => {
  return (
    <article className="trail-card">
      <h4>{trail.name}</h4>
      <p>Length: {trail.length} mi</p>
      <p>Difficulty: {difficultyLevel(trail)}</p>
    </article>
  )
}

Card.propTypes = {
  trail: PropTypes.object.isRequired
}

const difficultyLevel = (difficulty) => {
  switch (difficulty.difficulty) {
    case 'green':
      return 'Easy'
    case 'greenBlue':
      return 'Easy/Intermediate'
    case 'blue':
      return 'Intermediate'
    case 'blueBlack':
      return 'Intermediate/Difficult'
    case 'black':
      return 'Difficult'
    case 'dblack':
      return 'Extremely Difficult'
    default:
  }
}
