import React, { Component } from 'react';
import ControlsContainer from '../../containers/ControlsContainer'
import CardGridContainer from '../../containers/CardGridContainer'
import './App.css';

export default class App extends Component {

  render() {
    return (
      <main className="App">
        <header>
          <h1>Get Out There</h1>
        </header>
        <ControlsContainer />
        <CardGridContainer />
      </main>
    );
  }
}
