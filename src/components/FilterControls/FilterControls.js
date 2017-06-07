import React, { Component } from 'react';

export default class FilterControls extends Component {
  constructor(props) {
    super(props)
      this.state = {
        filter: ''
      }
  }

  render() {
    const { trails, handleSetDisplay } = this.props
    return (
      <div id="filter-bar">
        <label>Filter by Difficulty:</label>
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
                onClick={() => handleSetDisplay(trails, this.state.filter)}>
          Filter
        </button>
      </div>
      )
    }
  }
