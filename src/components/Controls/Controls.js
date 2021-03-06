import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
    this.setState({ searchArea: '', searchRadius: '' })

  }

  render() {
    return (
      <section  className='controls'>
        <div    className='input'>
          <label>Find trails near...</label>
          <input id='location-input'
                 type="text"
                 placeholder="enter a location"
                 value={this.state.searchArea}
                 onChange={(e) => {
                   this.setState({ searchArea: e.target.value })}
                 } />
        </div>
        <div     className='input'>
          <label>within...</label>
          <input id='radius-input'
                 type="text"
                 placeholder="....miles of"
                 value={this.state.searchRadius}
                 onChange={(e) => {
                   this.setState({ searchRadius: e.target.value })}
                 } />
        </div>
        <NavLink  id='search'
                  to='/'
                  onClick={() => {
                  this.setStore(this.state.searchArea, this.state.searchRadius)}
        }>
          Search
        </NavLink>
      </section>
    )
  }
}

Controls.propTypes = {
  trails: PropTypes.object.isRequired,
  handleGetTrails: PropTypes.func.isRequired,
  handleSetDisplay: PropTypes.func.isRequired,
}
