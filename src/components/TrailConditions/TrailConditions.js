import React from 'react';
import { NavLink } from 'react-router-dom';

export const TrailConditions = ({ currentConditions }) => {
  const currentKeys = Object.keys(currentConditions)
  if (!currentKeys.length) {
    return (
      <section className="trail-conditions">
        <NavLink to='/'
        activeClassName='nav-button'
        className='button'>
        Back To Trails
        </NavLink>
        <h4>Please select a trail to see conditions</h4>
      </section>
    )
  }

  return (
    <section className="trail-conditions">
      <NavLink to='/'
               activeClassName='nav-button'
               className='button'>
        Back To Trails
      </NavLink>
      <h4>{currentConditions.name}</h4>
      <img src={currentConditions.conditionImg} />
      <p>{currentConditions.conditionStatus}</p>
      <p>{currentConditions.conditionDetails}</p>
      <p>Latest Update:{currentConditions.conditionDate}</p>
      <div>Data viz will go here</div>
    </section>
  )
}
