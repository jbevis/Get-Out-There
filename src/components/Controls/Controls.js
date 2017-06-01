import React, { Component } from 'react';
import './Controls.css';
import { formatTrailData } from '../../ops/logic'

export default class Controls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchArea: '',
      searchRadius: ''
    }
  }

  setStore(location, radius) {
    const { trails, handleGetTrails, handleSetDisplay } = this.props;

    handleGetTrails(location, radius)
    handleSetDisplay(trails)
    this.setState({ searchArea: '', searchRadius: ''})
  }

  render() {
    return (
      <section  className='controls'>
        <label>Find trails near...</label>
        <input  type="text"
                placeholder="enter a location"
                value={this.state.searchArea}
                onChange={(e) => {this.setState({ searchArea: e.target.value })}} />
        <label>within...</label>
        <input  type="text"
                placeholder="enter a distance"
                value={this.state.searchRadius}
                onChange={(e) => {this.setState({ searchRadius: e.target.value })}} />
        <label>miles</label>
        <button onClick={() => {
          this.setStore(this.state.searchArea, this.state.searchRadius)
        }}>
          Search
        </button>
      </section>
    )
  }
}
