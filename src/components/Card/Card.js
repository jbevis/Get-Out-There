import React from 'react';
import { difficultyLevel, imgCheck } from '../../ops/logic'
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom'

export const Card = ({ trail, handleGetConditions }) => {
  return (
    <Link to='trail-data'
          style={{ textDecoration: 'none' }}>
      <article className="trail-card"
               onClick={() => handleGetConditions(trail)} >
          <img className="card-img" alt={trail.summary} src={imgCheck(trail.imgSqSmall)} />
          <div className='card-text'>
            <h4>{trail.name}</h4>
            <p>{trail.summary}</p>
            <p>Length: {trail.length} mi</p>
            <p>Difficulty: {difficultyLevel(trail)}</p>
            <NavLink to='/trail-data'
                     activeClassName='nav-button'
                     className='button'
                     onClick={() => handleGetConditions(trail)} >
            Check Trail Conditions
          </NavLink>
        </div>
      </article>
    </Link>
  )
}

Card.propTypes = {
  trail: PropTypes.object.isRequired,
  handleGetConditions: PropTypes.func.isRequired
}
