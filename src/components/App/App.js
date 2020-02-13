import React from 'react';
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
        </header>
        {/* <NavLink className='navigation'
                 to='maps' >
          Map View
        </NavLink>
        <NavLink className='navigation'
                 to='/' >
          List View
        </NavLink> */}
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
        <div id='map'></div>
        <footer>
          <p className='copyright'>&#169; 2020 Jack Bevis</p>
        </footer>
    </main>
  )
}
