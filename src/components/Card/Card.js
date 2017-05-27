import React from 'react';
import { difficultyLevel } from '../../ops/logic'
import PropTypes from 'prop-types';
import './Card.css';
import icon from './hikeicon.svg';

const imgCheck = (image) => {
  console.log(image);
  return image === "" ? icon : image
}

export const Card = ({ trail }) => {

  return (
    <article className="trail-card">
      <img className="card-img" alt={trail.summary} src={imgCheck(trail.imgSqSmall)} />
      <div className='card-text'>
        <h4>{trail.name}</h4>
        <p>{trail.summary}</p>
        <p>Length: {trail.length} mi</p>
        <p>Difficulty: {difficultyLevel(trail)}</p>
      </div>
    </article>
  )
}

Card.propTypes = {
  trail: PropTypes.object.isRequired
}
