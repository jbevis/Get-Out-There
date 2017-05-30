import React from 'react';
import { difficultyLevel } from '../../ops/logic'
import PropTypes from 'prop-types';
import './Card.css';
import icon from './hikeicon.svg';
import { NavLink } from 'react-router-dom'
import trailsKey from '../../apiKeys'

const imgCheck = (image) => {
  return image === "" ? icon : image
}

const formatConditionData = (trailInfo, conditionsCall) => {
  return Object.assign({}, trailInfo, conditionsCall)
}

export const Card = ({ trail, handleGetConditions }) => {
  const getTrailConditions = (id) => {
    fetch(`https://www.hikingproject.com/data/get-conditions?ids=${id}&key=${trailsKey}`)
    .then((resp) => resp.json())
    .then((conditions)  => formatConditionData(trail, conditions[0]))
    .then((cleanedConditions) => handleGetConditions(cleanedConditions))
    .catch((error) => console.log(error, 'error fetching trail conditions'))
  }

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
                 onClick={() => getTrailConditions(trail.id)}>
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
