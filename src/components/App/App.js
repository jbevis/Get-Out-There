import React, { Component } from 'react';
import ControlsContainer from '../../containers/ControlsContainer';
import CardGridContainer from '../../containers/CardGridContainer';
import { NavBar } from '../NavBar/NavBar';
import { Maps } from '../Maps/Maps';
import { Route, Switch } from 'react-router-dom';

import './App.css';

export default class App extends Component {

  render() {
    return (
      <main className="App">
        <header>
          <h1>Get Out There</h1>
          <NavBar />
        </header>
        <ControlsContainer />
        <Switch>
          <Route exact path='/' component={CardGridContainer} />
          <Route exact path='/maps'
            render={() => { return (<Maps history={this.props.history}/>)}}
          />
        </Switch>
      </main>
    );
  }
}
