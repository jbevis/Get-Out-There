import React from 'react';
import { difficultyLevel, imgCheck } from '../../ops/logic'
import PropTypes from 'prop-types';
// import './Card.css';
import { NavLink } from 'react-router-dom'

export const Card = ({ trail, handleGetConditions }) => {
  return (
    <article className="trail-card">
      <img className="card-img" alt={trail.summary} src={imgCheck(trail.imgSqSmall)} />
      <div className='card-text'>
        <h4>{trail.name}</h4>
        <p>{trail.summary}</p>
        <p>Length: {trail.length} mi</p>
        <p>Difficulty: {difficultyLevel(trail)}</p>
        <NavLink to='/trail-data'
                 activeClassName='nav-button'
                 className='button'
                 onClick={() => handleGetConditions(trail)}>
          More Info
        </NavLink>
      </div>
    </article>
  )
}

Card.propTypes = {
  trail: PropTypes.object.isRequired,
  handleGetConditions: PropTypes.func.isRequired
}
