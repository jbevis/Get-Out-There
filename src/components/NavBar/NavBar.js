import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
      <section className="nav-bar">
        <NavLink to='/maps' activeClassName='nav-button' className='button'>Maps</NavLink>
        <NavLink to='/' activeClassName='nav-button' className='button'>Home</NavLink>
      </section>
    )
}
