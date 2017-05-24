import React, { Component } from 'react';
import './Controls.css';
import { formatTrailData } from '../../ops/logic'
import { geoCodeKey, trailsKey} from '../../apiKeys'


export default class Controls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchArea: ''

    }
  }

  searchByLocation(location) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?new_forward_geocoder=true&components=locality:${location}&key=${geoCodeKey}`)
    .then((resp) => resp.json())
    .then((json) => json.results[0].geometry.location)
    .then((coordinates) => this.getTrailsByLocation(coordinates.lat, coordinates.lng))
    .catch((error) => console.log(error, 'error fetching LatLong'))
    this.setState({ searchArea: ''})
  }

  getTrailsByLocation(lat, long) {
    const { handleGetTrails } = this.props;
    console.log(lat, long);
    fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&key=${trailsKey}`)
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
                placeholder="Enter a location"
                value={this.state.searchArea}
                onChange={(e) => {this.setState({ searchArea: e.target.value })}} />
        <button onClick={() => {this.searchByLocation(this.state.searchArea)}}>
          Search
        </button>
      </section>
    )
  }
}
