import React, { Component } from 'react';
import { Card } from '../Card/Card';


export default class CardGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  filterByDifficulty(diffLevel) {
    const { trails, handleFilter, handleSetDisplay } = this.props;
    const filtered = Object.keys(trails).reduce((acc, key) => {
      if (trails[key].difficulty === diffLevel) {
        acc[key] = trails[key]
      } else if (diffLevel === 'show-all') {
        acc = trails
      }
      return acc
    },{});
    handleFilter(filtered)
    handleSetDisplay(filtered)
  }

  render() {
    const { displayTrails, handleGetConditions } = this.props;
    const trailKeys = Object.keys(displayTrails)

    if (!trailKeys.length) {
      return (
        <h3 className='no-data'>Find your next adventure</h3>
      )
    }
    return (
      <section className="card-grid">
        <div id="filter-bar">
          <label>Filter by:</label>
          <select name='difficulty'
            onChange={(e) => {this.setState({filter: e.target.value})}}>
            <option value='show-all'>Show All</option>
            <option value='green'>Easy</option>
            <option value='greenBlue'>Easy/Intermediate</option>
            <option value='blue'>Intermediate</option>
            <option value='blueBlack'>Intermediate/Difficult</option>
            <option value='black'>Difficult</option>
            <option value='dblack'>Extremely Difficult</option>
          </select>
          <button className='filter-btn'
            onClick={() => this.filterByDifficulty(this.state.filter)}>
            Filter
          </button>
        </div>
        { trailKeys.map((key, index) => {
          return (
            <Card key={index}
                  trail={displayTrails[key]}
                  handleGetConditions={handleGetConditions}/>
          )
        }) }
      </section>
    )
  }
}
