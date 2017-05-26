import React, { Component } from 'react';
import { Card } from '../Card/Card'
// import FilterContainer from '../../containers/FilterContainer';

export default class CardGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  filterByDifficulty(diffLevel) {
    console.log('fire filter');
    const { trails, handleFilter } = this.props;
    const filtered = Object.keys(trails).reduce((acc, key) => {
      if (trails[key].difficulty === diffLevel) {
        acc[key] = trails[key]
      }
      return acc
    },{});
    handleFilter(filtered)
  }
  
  render() {
    const { trails, filteredTrails } = this.props;
    const trailKeys = Object.keys(trails)

    if (!trailKeys.length) {
      return (
        <h3>No trails in the area</h3>
      )
    }
    return (
      <section className="card-grid">
        <label>Filter by:</label>
        <input  type='text'
                placeholder='Difficulty'
                value={this.state.filter}
                onChange={(e) => {this.setState({filter: e.target.value})}} />
        <button onClick={() => this.filterByDifficulty(this.state.filter)}>Filter</button>
        {/* <button onClick={() => this.filterEasy(trails)}>Easy</button>
        <button onClick={() => this.filterInt(trails)}>Intermediate</button>
        <button onClick={() => this.filterDiff(trails)}>Difficult</button> */}
        { trailKeys.map((key, index) => {
          return (
            <Card key={index} trail={trails[key]}/>
          )
        }) }
      </section>
    )
  }
}

{/* <select name='difficulty'>
  <option value='easy'>Easy</option>
  <option value='easy/intermediate'>Easy/Intermediate</option>
  <option value='Intermediate'>Intermediate</option>
  <option value='difficult/intermediate'>Intermediate/Difficult</option>
  <option value='difficult'>Difficult</option>
  <option value='extremely/difficult'>Extremely Difficult</option>
</select> */}
