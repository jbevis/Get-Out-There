import React, { Component } from 'react';
import './Controls.css';
import { formatTrailData } from '../../ops/logic'
import { geoCodeKey, trailsKey} from '../../apiKeys'


export default class Controls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchArea: '',
      searchRadius: ''
    }
  }


  setStore(data) {
    const { handleGetTrails, handleSetDisplay } = this.props;
    handleGetTrails(data)
    handleSetDisplay(data)
  }

  getTrailsByLocation(lat, long, radius) {
    console.log(radius);
    const apiCall = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=${radius}&maxResults=20&key=${trailsKey}`
    console.log(apiCall);
    fetch(apiCall)
    .then((resp) => resp.json())
    .then((data) => formatTrailData(data.trails))
    .then((cleanedTrails) => this.setStore(cleanedTrails))
    .catch((error) => console.log(error, 'error fetching trails'))
  }

  searchByLocation(location, radius) {
    console.log(location, radius);
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}`)
    .then((resp) => resp.json())
    .then((json) => json.results[0].geometry.location)
    .then((coordinates) => this.getTrailsByLocation(coordinates.lat, coordinates.lng, radius))
    .catch((error) => console.log(error, 'error fetching LatLong'))
    this.setState({ searchArea: ''})
    this.setState({ searchRadius: ''})
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
        <button onClick={() => {this.searchByLocation(this.state.searchArea, this.state.searchRadius)}}>
          Search
        </button>
      </section>
    )
  }
}
