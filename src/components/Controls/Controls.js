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

  searchByLocation(location) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?new_forward_geocoder=true&components=locality:${location}&key=${geoCodeKey}`)
    .then((resp) => resp.json())
    .then((json) => json.results[0].geometry.location)
    .then((coordinates) => this.getTrailsByLocation(coordinates.lat, coordinates.lng, this.state.searchRadius))
    .catch((error) => console.log(error, 'error fetching LatLong'))
    this.setState({ searchArea: ''})
    this.setState({ searchRadius: ''})
  }

  getTrailsByLocation(lat, long, radius) {
    const { handleGetTrails } = this.props;
    fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=${radius}&maxResults=50&key=${trailsKey}`)
    .then((resp) => resp.json())
    .then((trails) => formatTrailData(trails.trails))
    .then((cleanedTrails) => handleGetTrails(cleanedTrails))
    .catch((error) => console.log(error, 'error fetching trails'))
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
        <button onClick={() => {this.searchByLocation(this.state.searchArea)}}>
          Search
        </button>
      </section>
    )
  }
}
