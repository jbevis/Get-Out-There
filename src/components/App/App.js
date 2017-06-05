import React, { Component } from 'react';
import ControlsContainer from '../../containers/ControlsContainer';
import CardGridContainer from '../../containers/CardGridContainer';
import TrailConditionsContainer from '../../containers/TrailConditionsContainer';
import { Maps } from '../Maps/Maps';
import { Route, Switch, NavLink } from 'react-router-dom';

  export const App = () => {
    return (
      <main className="App">
        <header>
          <h1>Get Out There</h1>
          <div className='nav-links'>
            <NavLink to='/' activeClassName='nav-button' className='button'>Home</NavLink>
            <NavLink to='/trail-data' activeClassName='nav-button' className='button'>Trail Conditions</NavLink>
          </div>
        </header>
        <ControlsContainer />
        <Switch>
          <Route exact path='/' component={ CardGridContainer } />
          <Route exact path='/maps'
            render={() => { return (<Maps history={ history }/>)}}
          />
          <Route exact path='/trail-data'
            render={() => { return (<TrailConditionsContainer history={ history }/>)}}
          />
        </Switch>
        <footer>
          <p className='copyright'>&#169; 2017 Jack Bevis</p>                  
        </footer>
    </main>
  )
}
